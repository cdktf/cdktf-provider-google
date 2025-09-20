/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_oauth_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamOauthClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Required. The list of OAuth grant types is allowed for the OauthClient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_oauth_client#allowed_grant_types IamOauthClient#allowed_grant_types}
  */
  readonly allowedGrantTypes: string[];
  /**
  * Required. The list of redirect uris that is allowed to redirect back
  * when authorization process is completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_oauth_client#allowed_redirect_uris IamOauthClient#allowed_redirect_uris}
  */
  readonly allowedRedirectUris: string[];
  /**
  * Required. The list of scopes that the OauthClient is allowed to request during
  * OAuth flows.
  * 
  * The following scopes are supported:
  * 
  * * 'https://www.googleapis.com/auth/cloud-platform': See, edit, configure,
  * and delete your Google Cloud data and see the email address for your Google
  * Account.
  * * 'openid': The OAuth client can associate you with your personal
  * information on Google Cloud.
  * * 'email': The OAuth client can read a federated identity's email address.
  * * 'groups': The OAuth client can read a federated identity's groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_oauth_client#allowed_scopes IamOauthClient#allowed_scopes}
  */
  readonly allowedScopes: string[];
  /**
  * Immutable. The type of OauthClient. Either public or private.
  * For private clients, the client secret can be managed using the dedicated
  * OauthClientCredential resource.
  * Possible values:
  * CLIENT_TYPE_UNSPECIFIED
  * PUBLIC_CLIENT
  * CONFIDENTIAL_CLIENT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_oauth_client#client_type IamOauthClient#client_type}
  */
  readonly clientType?: string;
  /**
  * A user-specified description of the OauthClient.
  * 
  * Cannot exceed 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_oauth_client#description IamOauthClient#description}
  */
  readonly description?: string;
  /**
  * Whether the OauthClient is disabled. You cannot use a disabled OAuth
  * client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_oauth_client#disabled IamOauthClient#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * A user-specified display name of the OauthClient.
  * 
  * Cannot exceed 32 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_oauth_client#display_name IamOauthClient#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_oauth_client#id IamOauthClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_oauth_client#location IamOauthClient#location}
  */
  readonly location: string;
  /**
  * Required. The ID to use for the OauthClient, which becomes the final component of
  * the resource name. This value should be a string of 6 to 63 lowercase
  * letters, digits, or hyphens. It must start with a letter, and cannot have a
  * trailing hyphen. The prefix 'gcp-' is reserved for use by Google, and may
  * not be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_oauth_client#oauth_client_id IamOauthClient#oauth_client_id}
  */
  readonly oauthClientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_oauth_client#project IamOauthClient#project}
  */
  readonly project?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_oauth_client#timeouts IamOauthClient#timeouts}
  */
  readonly timeouts?: IamOauthClientTimeouts;
}
export interface IamOauthClientTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_oauth_client#create IamOauthClient#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_oauth_client#delete IamOauthClient#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_oauth_client#update IamOauthClient#update}
  */
  readonly update?: string;
}

export function iamOauthClientTimeoutsToTerraform(struct?: IamOauthClientTimeouts | cdktf.IResolvable): any {
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


export function iamOauthClientTimeoutsToHclTerraform(struct?: IamOauthClientTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamOauthClientTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IamOauthClientTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IamOauthClientTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_oauth_client google_iam_oauth_client}
*/
export class IamOauthClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iam_oauth_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamOauthClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamOauthClient to import
  * @param importFromId The id of the existing IamOauthClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_oauth_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamOauthClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_iam_oauth_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_oauth_client google_iam_oauth_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamOauthClientConfig
  */
  public constructor(scope: Construct, id: string, config: IamOauthClientConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iam_oauth_client',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.50.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedGrantTypes = config.allowedGrantTypes;
    this._allowedRedirectUris = config.allowedRedirectUris;
    this._allowedScopes = config.allowedScopes;
    this._clientType = config.clientType;
    this._description = config.description;
    this._disabled = config.disabled;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._oauthClientId = config.oauthClientId;
    this._project = config.project;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_grant_types - computed: false, optional: false, required: true
  private _allowedGrantTypes?: string[]; 
  public get allowedGrantTypes() {
    return this.getListAttribute('allowed_grant_types');
  }
  public set allowedGrantTypes(value: string[]) {
    this._allowedGrantTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedGrantTypesInput() {
    return this._allowedGrantTypes;
  }

  // allowed_redirect_uris - computed: false, optional: false, required: true
  private _allowedRedirectUris?: string[]; 
  public get allowedRedirectUris() {
    return this.getListAttribute('allowed_redirect_uris');
  }
  public set allowedRedirectUris(value: string[]) {
    this._allowedRedirectUris = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRedirectUrisInput() {
    return this._allowedRedirectUris;
  }

  // allowed_scopes - computed: false, optional: false, required: true
  private _allowedScopes?: string[]; 
  public get allowedScopes() {
    return this.getListAttribute('allowed_scopes');
  }
  public set allowedScopes(value: string[]) {
    this._allowedScopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedScopesInput() {
    return this._allowedScopes;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_type - computed: false, optional: true, required: false
  private _clientType?: string; 
  public get clientType() {
    return this.getStringAttribute('client_type');
  }
  public set clientType(value: string) {
    this._clientType = value;
  }
  public resetClientType() {
    this._clientType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTypeInput() {
    return this._clientType;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oauth_client_id - computed: false, optional: false, required: true
  private _oauthClientId?: string; 
  public get oauthClientId() {
    return this.getStringAttribute('oauth_client_id');
  }
  public set oauthClientId(value: string) {
    this._oauthClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientIdInput() {
    return this._oauthClientId;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IamOauthClientTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IamOauthClientTimeouts) {
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
      allowed_grant_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedGrantTypes),
      allowed_redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedRedirectUris),
      allowed_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedScopes),
      client_type: cdktf.stringToTerraform(this._clientType),
      description: cdktf.stringToTerraform(this._description),
      disabled: cdktf.booleanToTerraform(this._disabled),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      oauth_client_id: cdktf.stringToTerraform(this._oauthClientId),
      project: cdktf.stringToTerraform(this._project),
      timeouts: iamOauthClientTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_grant_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedGrantTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allowed_redirect_uris: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedRedirectUris),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allowed_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedScopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      client_type: {
        value: cdktf.stringToHclTerraform(this._clientType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_client_id: {
        value: cdktf.stringToHclTerraform(this._oauthClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: iamOauthClientTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IamOauthClientTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
