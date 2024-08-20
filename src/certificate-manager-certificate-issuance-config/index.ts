/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/certificate_manager_certificate_issuance_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateManagerCertificateIssuanceConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * One or more paragraphs of text description of a CertificateIssuanceConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/certificate_manager_certificate_issuance_config#description CertificateManagerCertificateIssuanceConfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/certificate_manager_certificate_issuance_config#id CertificateManagerCertificateIssuanceConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key algorithm to use when generating the private key. Possible values: ["RSA_2048", "ECDSA_P256"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/certificate_manager_certificate_issuance_config#key_algorithm CertificateManagerCertificateIssuanceConfig#key_algorithm}
  */
  readonly keyAlgorithm: string;
  /**
  * 'Set of label tags associated with the CertificateIssuanceConfig resource.
  *  An object containing a list of "key": value pairs. Example: { "name": "wrench", "count": "3" }.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/certificate_manager_certificate_issuance_config#labels CertificateManagerCertificateIssuanceConfig#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Lifetime of issued certificates. A duration in seconds with up to nine fractional digits, ending with 's'.
  * Example: "1814400s". Valid values are from 21 days (1814400s) to 30 days (2592000s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/certificate_manager_certificate_issuance_config#lifetime CertificateManagerCertificateIssuanceConfig#lifetime}
  */
  readonly lifetime: string;
  /**
  * The Certificate Manager location. If not specified, "global" is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/certificate_manager_certificate_issuance_config#location CertificateManagerCertificateIssuanceConfig#location}
  */
  readonly location?: string;
  /**
  * A user-defined name of the certificate issuance config.
  * CertificateIssuanceConfig names must be unique globally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/certificate_manager_certificate_issuance_config#name CertificateManagerCertificateIssuanceConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/certificate_manager_certificate_issuance_config#project CertificateManagerCertificateIssuanceConfig#project}
  */
  readonly project?: string;
  /**
  * It specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate.
  * Must be a number between 1-99, inclusive.
  * You must set the rotation window percentage in relation to the certificate lifetime so that certificate renewal occurs at least 7 days after
  * the certificate has been issued and at least 7 days before it expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/certificate_manager_certificate_issuance_config#rotation_window_percentage CertificateManagerCertificateIssuanceConfig#rotation_window_percentage}
  */
  readonly rotationWindowPercentage: number;
  /**
  * certificate_authority_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/certificate_manager_certificate_issuance_config#certificate_authority_config CertificateManagerCertificateIssuanceConfig#certificate_authority_config}
  */
  readonly certificateAuthorityConfig: CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/certificate_manager_certificate_issuance_config#timeouts CertificateManagerCertificateIssuanceConfig#timeouts}
  */
  readonly timeouts?: CertificateManagerCertificateIssuanceConfigTimeouts;
}
export interface CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig {
  /**
  * A CA pool resource used to issue a certificate.
  * The CA pool string has a relative resource path following the form
  * "projects/{project}/locations/{location}/caPools/{caPool}".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/certificate_manager_certificate_issuance_config#ca_pool CertificateManagerCertificateIssuanceConfig#ca_pool}
  */
  readonly caPool: string;
}

export function certificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigToTerraform(struct?: CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference | CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_pool: cdktf.stringToTerraform(struct!.caPool),
  }
}


export function certificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigToHclTerraform(struct?: CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference | CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_pool: {
      value: cdktf.stringToHclTerraform(struct!.caPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.caPool = this._caPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caPool = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caPool = value.caPool;
    }
  }

  // ca_pool - computed: false, optional: false, required: true
  private _caPool?: string; 
  public get caPool() {
    return this.getStringAttribute('ca_pool');
  }
  public set caPool(value: string) {
    this._caPool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caPoolInput() {
    return this._caPool;
  }
}
export interface CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig {
  /**
  * certificate_authority_service_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/certificate_manager_certificate_issuance_config#certificate_authority_service_config CertificateManagerCertificateIssuanceConfig#certificate_authority_service_config}
  */
  readonly certificateAuthorityServiceConfig?: CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig;
}

export function certificateManagerCertificateIssuanceConfigCertificateAuthorityConfigToTerraform(struct?: CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference | CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_authority_service_config: certificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigToTerraform(struct!.certificateAuthorityServiceConfig),
  }
}


export function certificateManagerCertificateIssuanceConfigCertificateAuthorityConfigToHclTerraform(struct?: CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference | CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_authority_service_config: {
      value: certificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigToHclTerraform(struct!.certificateAuthorityServiceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateAuthorityServiceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityServiceConfig = this._certificateAuthorityServiceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateAuthorityServiceConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateAuthorityServiceConfig.internalValue = value.certificateAuthorityServiceConfig;
    }
  }

  // certificate_authority_service_config - computed: false, optional: true, required: false
  private _certificateAuthorityServiceConfig = new CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference(this, "certificate_authority_service_config");
  public get certificateAuthorityServiceConfig() {
    return this._certificateAuthorityServiceConfig;
  }
  public putCertificateAuthorityServiceConfig(value: CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig) {
    this._certificateAuthorityServiceConfig.internalValue = value;
  }
  public resetCertificateAuthorityServiceConfig() {
    this._certificateAuthorityServiceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityServiceConfigInput() {
    return this._certificateAuthorityServiceConfig.internalValue;
  }
}
export interface CertificateManagerCertificateIssuanceConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/certificate_manager_certificate_issuance_config#create CertificateManagerCertificateIssuanceConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/certificate_manager_certificate_issuance_config#delete CertificateManagerCertificateIssuanceConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/certificate_manager_certificate_issuance_config#update CertificateManagerCertificateIssuanceConfig#update}
  */
  readonly update?: string;
}

export function certificateManagerCertificateIssuanceConfigTimeoutsToTerraform(struct?: CertificateManagerCertificateIssuanceConfigTimeouts | cdktf.IResolvable): any {
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


export function certificateManagerCertificateIssuanceConfigTimeoutsToHclTerraform(struct?: CertificateManagerCertificateIssuanceConfigTimeouts | cdktf.IResolvable): any {
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

export class CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateManagerCertificateIssuanceConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CertificateManagerCertificateIssuanceConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/certificate_manager_certificate_issuance_config google_certificate_manager_certificate_issuance_config}
*/
export class CertificateManagerCertificateIssuanceConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_certificate_manager_certificate_issuance_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificateManagerCertificateIssuanceConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificateManagerCertificateIssuanceConfig to import
  * @param importFromId The id of the existing CertificateManagerCertificateIssuanceConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/certificate_manager_certificate_issuance_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificateManagerCertificateIssuanceConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_certificate_manager_certificate_issuance_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/certificate_manager_certificate_issuance_config google_certificate_manager_certificate_issuance_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateManagerCertificateIssuanceConfigConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateManagerCertificateIssuanceConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_certificate_manager_certificate_issuance_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.42.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._keyAlgorithm = config.keyAlgorithm;
    this._labels = config.labels;
    this._lifetime = config.lifetime;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._rotationWindowPercentage = config.rotationWindowPercentage;
    this._certificateAuthorityConfig.internalValue = config.certificateAuthorityConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // key_algorithm - computed: false, optional: false, required: true
  private _keyAlgorithm?: string; 
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }
  public set keyAlgorithm(value: string) {
    this._keyAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAlgorithmInput() {
    return this._keyAlgorithm;
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

  // lifetime - computed: false, optional: false, required: true
  private _lifetime?: string; 
  public get lifetime() {
    return this.getStringAttribute('lifetime');
  }
  public set lifetime(value: string) {
    this._lifetime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
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

  // rotation_window_percentage - computed: false, optional: false, required: true
  private _rotationWindowPercentage?: number; 
  public get rotationWindowPercentage() {
    return this.getNumberAttribute('rotation_window_percentage');
  }
  public set rotationWindowPercentage(value: number) {
    this._rotationWindowPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationWindowPercentageInput() {
    return this._rotationWindowPercentage;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // certificate_authority_config - computed: false, optional: false, required: true
  private _certificateAuthorityConfig = new CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference(this, "certificate_authority_config");
  public get certificateAuthorityConfig() {
    return this._certificateAuthorityConfig;
  }
  public putCertificateAuthorityConfig(value: CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig) {
    this._certificateAuthorityConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityConfigInput() {
    return this._certificateAuthorityConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CertificateManagerCertificateIssuanceConfigTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      key_algorithm: cdktf.stringToTerraform(this._keyAlgorithm),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      lifetime: cdktf.stringToTerraform(this._lifetime),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      rotation_window_percentage: cdktf.numberToTerraform(this._rotationWindowPercentage),
      certificate_authority_config: certificateManagerCertificateIssuanceConfigCertificateAuthorityConfigToTerraform(this._certificateAuthorityConfig.internalValue),
      timeouts: certificateManagerCertificateIssuanceConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      key_algorithm: {
        value: cdktf.stringToHclTerraform(this._keyAlgorithm),
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
      lifetime: {
        value: cdktf.stringToHclTerraform(this._lifetime),
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
      rotation_window_percentage: {
        value: cdktf.numberToHclTerraform(this._rotationWindowPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      certificate_authority_config: {
        value: certificateManagerCertificateIssuanceConfigCertificateAuthorityConfigToHclTerraform(this._certificateAuthorityConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigList",
      },
      timeouts: {
        value: certificateManagerCertificateIssuanceConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateManagerCertificateIssuanceConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
