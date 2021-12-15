// https://www.terraform.io/docs/providers/google/r/essential_contacts_contact.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EssentialContactsContactConfig extends cdktf.TerraformMetaArguments {
  /**
  * The email address to send notifications to. This does not need to be a Google account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/essential_contacts_contact.html#email EssentialContactsContact#email}
  */
  readonly email: string;
  /**
  * The preferred language for notifications, as a ISO 639-1 language code. See Supported languages for a list of supported languages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/essential_contacts_contact.html#language_tag EssentialContactsContact#language_tag}
  */
  readonly languageTag: string;
  /**
  * The categories of notifications that the contact will receive communications for.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/essential_contacts_contact.html#notification_category_subscriptions EssentialContactsContact#notification_category_subscriptions}
  */
  readonly notificationCategorySubscriptions: string[];
  /**
  * The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/essential_contacts_contact.html#parent EssentialContactsContact#parent}
  */
  readonly parent: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/essential_contacts_contact.html#timeouts EssentialContactsContact#timeouts}
  */
  readonly timeouts?: EssentialContactsContactTimeouts;
}
export interface EssentialContactsContactTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/essential_contacts_contact.html#create EssentialContactsContact#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/essential_contacts_contact.html#delete EssentialContactsContact#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/essential_contacts_contact.html#update EssentialContactsContact#update}
  */
  readonly update?: string;
}

export function essentialContactsContactTimeoutsToTerraform(struct?: EssentialContactsContactTimeoutsOutputReference | EssentialContactsContactTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EssentialContactsContactTimeouts | undefined {
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

  public set internalValue(value: EssentialContactsContactTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/essential_contacts_contact.html google_essential_contacts_contact}
*/
export class EssentialContactsContact extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_essential_contacts_contact";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/essential_contacts_contact.html google_essential_contacts_contact} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EssentialContactsContactConfig
  */
  public constructor(scope: Construct, id: string, config: EssentialContactsContactConfig) {
    super(scope, id, {
      terraformResourceType: 'google_essential_contacts_contact',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._email = config.email;
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
  public get id() {
    return this.getStringAttribute('id');
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
  private _timeouts = new EssentialContactsContactTimeoutsOutputReference(this as any, "timeouts", true);
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
      language_tag: cdktf.stringToTerraform(this._languageTag),
      notification_category_subscriptions: cdktf.listMapper(cdktf.stringToTerraform)(this._notificationCategorySubscriptions),
      parent: cdktf.stringToTerraform(this._parent),
      timeouts: essentialContactsContactTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
