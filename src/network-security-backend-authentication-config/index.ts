/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkSecurityBackendAuthenticationConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Reference to a Certificate resource from the certificatemanager.googleapis.com namespace.
  * Used by a BackendService to negotiate mTLS when the backend connection uses TLS and the backend requests a client certificate. Must have a CLIENT_AUTH scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#client_certificate NetworkSecurityBackendAuthenticationConfig#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * A free-text description of the resource. Max length 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#description NetworkSecurityBackendAuthenticationConfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#id NetworkSecurityBackendAuthenticationConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of label tags associated with the BackendAuthenticationConfig resource.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#labels NetworkSecurityBackendAuthenticationConfig#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the backend authentication config.
  * The default value is 'global'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#location NetworkSecurityBackendAuthenticationConfig#location}
  */
  readonly location?: string;
  /**
  * Name of the BackendAuthenticationConfig resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#name NetworkSecurityBackendAuthenticationConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#project NetworkSecurityBackendAuthenticationConfig#project}
  */
  readonly project?: string;
  /**
  * Reference to a TrustConfig resource from the certificatemanager.googleapis.com namespace.
  * A BackendService uses the chain of trust represented by this TrustConfig, if specified, to validate the server certificates presented by the backend. Required unless wellKnownRoots is set to PUBLIC_ROOTS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#trust_config NetworkSecurityBackendAuthenticationConfig#trust_config}
  */
  readonly trustConfig?: string;
  /**
  * Well known roots to use for server certificate validation. If set to NONE, the BackendService will only validate server certificates against roots specified in TrustConfig.
  * If set to PUBLIC_ROOTS, the BackendService uses a set of well-known public roots, in addition to any roots specified in the trustConfig field, when validating the server certificates presented by the backend.
  * Validation with these roots is only considered when the TlsSettings.sni field in the BackendService is set. The well-known roots are a set of root CAs managed by Google. CAs in this set can be added or removed without notice. Possible values: ["NONE", "PUBLIC_ROOTS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#well_known_roots NetworkSecurityBackendAuthenticationConfig#well_known_roots}
  */
  readonly wellKnownRoots?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#timeouts NetworkSecurityBackendAuthenticationConfig#timeouts}
  */
  readonly timeouts?: NetworkSecurityBackendAuthenticationConfigTimeouts;
}
export interface NetworkSecurityBackendAuthenticationConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#create NetworkSecurityBackendAuthenticationConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#delete NetworkSecurityBackendAuthenticationConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#update NetworkSecurityBackendAuthenticationConfig#update}
  */
  readonly update?: string;
}

export function networkSecurityBackendAuthenticationConfigTimeoutsToTerraform(struct?: NetworkSecurityBackendAuthenticationConfigTimeouts | cdktf.IResolvable): any {
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


export function networkSecurityBackendAuthenticationConfigTimeoutsToHclTerraform(struct?: NetworkSecurityBackendAuthenticationConfigTimeouts | cdktf.IResolvable): any {
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

export class NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkSecurityBackendAuthenticationConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkSecurityBackendAuthenticationConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config google_network_security_backend_authentication_config}
*/
export class NetworkSecurityBackendAuthenticationConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_security_backend_authentication_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkSecurityBackendAuthenticationConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkSecurityBackendAuthenticationConfig to import
  * @param importFromId The id of the existing NetworkSecurityBackendAuthenticationConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkSecurityBackendAuthenticationConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_network_security_backend_authentication_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_backend_authentication_config google_network_security_backend_authentication_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkSecurityBackendAuthenticationConfigConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkSecurityBackendAuthenticationConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_security_backend_authentication_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.46.0',
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
    this._clientCertificate = config.clientCertificate;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._trustConfig = config.trustConfig;
    this._wellKnownRoots = config.wellKnownRoots;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // trust_config - computed: false, optional: true, required: false
  private _trustConfig?: string; 
  public get trustConfig() {
    return this.getStringAttribute('trust_config');
  }
  public set trustConfig(value: string) {
    this._trustConfig = value;
  }
  public resetTrustConfig() {
    this._trustConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustConfigInput() {
    return this._trustConfig;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // well_known_roots - computed: false, optional: true, required: false
  private _wellKnownRoots?: string; 
  public get wellKnownRoots() {
    return this.getStringAttribute('well_known_roots');
  }
  public set wellKnownRoots(value: string) {
    this._wellKnownRoots = value;
  }
  public resetWellKnownRoots() {
    this._wellKnownRoots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wellKnownRootsInput() {
    return this._wellKnownRoots;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkSecurityBackendAuthenticationConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkSecurityBackendAuthenticationConfigTimeouts) {
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
      client_certificate: cdktf.stringToTerraform(this._clientCertificate),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      trust_config: cdktf.stringToTerraform(this._trustConfig),
      well_known_roots: cdktf.stringToTerraform(this._wellKnownRoots),
      timeouts: networkSecurityBackendAuthenticationConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_certificate: {
        value: cdktf.stringToHclTerraform(this._clientCertificate),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      trust_config: {
        value: cdktf.stringToHclTerraform(this._trustConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      well_known_roots: {
        value: cdktf.stringToHclTerraform(this._wellKnownRoots),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: networkSecurityBackendAuthenticationConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkSecurityBackendAuthenticationConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
