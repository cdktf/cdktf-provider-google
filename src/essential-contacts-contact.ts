// https://www.terraform.io/docs/providers/google/r/essential_contacts_contact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EssentialContactsContactConfig extends cdktf.TerraformMetaArguments {
  /**
  * The email address to send notifications to. This does not need to be a Google account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/essential_contacts_contact#email EssentialContactsContact#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/essential_contacts_contact#id EssentialContactsContact#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The preferred language for notifications, as a ISO 639-1 language code. See Supported languages for a list of supported languages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/essential_contacts_contact#language_tag EssentialContactsContact#language_tag}
  */
  readonly languageTag: string;
  /**
  * The categories of notifications that the contact will receive communications for.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/essential_contacts_contact#notification_category_subscriptions EssentialContactsContact#notification_category_subscriptions}
  */
  readonly notificationCategorySubscriptions: string[];
  /**
  * The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/essential_contacts_contact#parent EssentialContactsContact#parent}
  */
  readonly parent: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/essential_contacts_contact#timeouts EssentialContactsContact#timeouts}
  */
  readonly timeouts?: EssentialContactsContactTimeouts;
}
export interface EssentialContactsContactTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/essential_contacts_contact#create EssentialContactsContact#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/essential_contacts_contact#delete EssentialContactsContact#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/essential_contacts_contact#update EssentialContactsContact#update}
  */
  readonly update?: string;
}

export function essentialContactsContactTimeoutsToTerraform(struct?: EssentialContactsContactTimeoutsOutputReference | EssentialContactsContactTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class EssentialContactsContactTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EssentialContactsContactTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssentialContactsContactTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/essential_contacts_contact google_essential_contacts_contact}
*/
export class EssentialContactsContact extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_essential_contacts_contact";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/essential_contacts_contact google_essential_contacts_contact} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EssentialContactsContactConfig
  */
  public constructor(scope: Construct, id: string, config: EssentialContactsContactConfig) {
    super(scope, id, {
      terraformResourceType: 'google_essential_contacts_contact',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._email = config.email;
    this._id = config.id;
    this._languageTag = config.languageTag;
    this._notificationCategorySubscriptions = config.notificationCategorySubscriptions;
    this._parent = config.parent;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // language_tag - computed: false, optional: false, required: true
  private _languageTag?: string; 
  public get languageTag() {
    return this.getStringAttribute('language_tag');
  }
  public set languageTag(value: string) {
    this._languageTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageTagInput() {
    return this._languageTag;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notification_category_subscriptions - computed: false, optional: false, required: true
  private _notificationCategorySubscriptions?: string[]; 
  public get notificationCategorySubscriptions() {
    return this.getListAttribute('notification_category_subscriptions');
  }
  public set notificationCategorySubscriptions(value: string[]) {
    this._notificationCategorySubscriptions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationCategorySubscriptionsInput() {
    return this._notificationCategorySubscriptions;
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EssentialContactsContactTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EssentialContactsContactTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      language_tag: cdktf.stringToTerraform(this._languageTag),
      notification_category_subscriptions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationCategorySubscriptions),
      parent: cdktf.stringToTerraform(this._parent),
      timeouts: essentialContactsContactTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
