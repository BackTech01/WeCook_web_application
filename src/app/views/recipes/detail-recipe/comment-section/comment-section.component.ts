import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { showMessageError } from 'src/app/helpers/toastError';
import { Comment, CommentComplete } from 'src/app/models/comment';
import { Profile } from 'src/app/models/profile';
import { CommentsService } from 'src/app/services/comments/comments.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css'],
})
export class CommentSectionComponent implements OnInit {
  @Input() profiles: Profile[] = [];
  @Input() receiptId: number | undefined = 0;
  loading = false;
  comments: CommentComplete[] = [];
  myProfileId = 0;

  commentForm = new FormGroup({
    content: new FormControl('', Validators.required),
  });
  constructor(
    private profileService: ProfileService,
    private commentService: CommentsService,
    private _snackBar: MatSnackBar
  ) {
    const myId = profileService.getMyProfile();
    myId !== null && (this.myProfileId = +myId);
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    this.getAllCommentsByRecipeId(changes['profiles'].currentValue);
  }

  getPlaceHolderName() {
    return !!this.myProfileId ? 'Agrege un comentario' : 'Debe iniciar sesion';
  }

  getAllCommentsByRecipeId(actualProfiles: Profile[]) {
    if (actualProfiles.length === 0) return;
    this.commentService
      .getAllComentsByRecipeId(
        this.receiptId !== undefined ? +this.receiptId : 0
      )
      .subscribe(
        (res: Comment[]) => {
          console.log('RECEIPT ID', this.receiptId);

          this.comments = res.map((comment) => {
            return {
              ...comment,
              profileName:
                actualProfiles.find((p) => p.id === comment.profileId)?.name ||
                'John Doe',
            };
          });
        },
        (error) => {
          debugger;
          console.log('Error', error);
          this.loading = !this.loading;
          showMessageError(
            this._snackBar,
            'Ha ocurrido un error en el servicio, intente de nuevo'
          );
        }
      );
  }

  onSubmitComment() {
    if (this.commentForm.invalid) {
      return;
    }

    const commentText = this.commentForm.value.content || '';

    const myId = this.profileService.getMyProfile();
    this.loading = true;
    this.commentService
      .createCommentInRecipe(
        {
          profileId: myId !== null ? +myId : 0,
          text: commentText,
        },
        this.receiptId !== undefined ? +this.receiptId : 0
      )
      .subscribe(
        (res: Comment) => {
          this.loading = !this.loading;
          this.comments.push({
            ...res,
            profileName:
              this.profiles.find((p) => p.id === res.profileId)?.name ||
              'John Doe',
          });
        },
        (error) => {
          this.loading = !this.loading;
          showMessageError(
            this._snackBar,
            'Ha ocurrido un error en el servicio, intente de nuevo'
          );
        }
      );
  }
}
