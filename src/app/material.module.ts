import { NgModule } from '@angular/core';

import { MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatListModule,
        MatGridListModule,
        MatRadioModule,
        MatProgressSpinnerModule } from '@angular/material';

const modules = [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatGridListModule,
    MatRadioModule,
    MatProgressSpinnerModule
];

@NgModule({
    imports: modules,
    exports: modules
})

export class MaterialModule { }
