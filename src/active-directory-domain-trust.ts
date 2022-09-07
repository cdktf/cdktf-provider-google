// https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActiveDirectoryDomainTrustConfig extends cdktf.TerraformMetaArguments {
  /**
  * The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions, 
https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#domain ActiveDirectoryDomainTrust#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#id ActiveDirectoryDomainTrust#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#project ActiveDirectoryDomainTrust#project}
  */
  readonly project?: string;
  /**
  * Whether the trusted side has forest/domain wide access or selective access to an approved set of resources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#selective_authentication ActiveDirectoryDomainTrust#selective_authentication}
  */
  readonly selectiveAuthentication?: boolean | cdktf.IResolvable;
  /**
  * The target DNS server IP addresses which can resolve the remote domain involved in the trust.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#target_dns_ip_addresses ActiveDirectoryDomainTrust#target_dns_ip_addresses}
  */
  readonly targetDnsIpAddresses: string[];
  /**
  * The fully qualified target domain name which will be in trust with the current domain.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#target_domain_name ActiveDirectoryDomainTrust#target_domain_name}
  */
  readonly targetDomainName: string;
  /**
  * The trust direction, which decides if the current domain is trusted, trusting, or both. Possible values: ["INBOUND", "OUTBOUND", "BIDIRECTIONAL"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#trust_direction ActiveDirectoryDomainTrust#trust_direction}
  */
  readonly trustDirection: string;
  /**
  * The trust secret used for the handshake with the target domain. This will not be stored.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#trust_handshake_secret ActiveDirectoryDomainTrust#trust_handshake_secret}
  */
  readonly trustHandshakeSecret: string;
  /**
  * The type of trust represented by the trust resource. Possible values: ["FOREST", "EXTERNAL"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#trust_type ActiveDirectoryDomainTrust#trust_type}
  */
  readonly trustType: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#timeouts ActiveDirectoryDomainTrust#timeouts}
  */
  readonly timeouts?: ActiveDirectoryDomainTrustTimeouts;
}
export interface ActiveDirectoryDomainTrustTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#create ActiveDirectoryDomainTrust#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#delete ActiveDirectoryDomainTrust#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust#update ActiveDirectoryDomainTrust#update}
  */
  readonly update?: string;
}

export function activeDirectoryDomainTrustTimeoutsToTerraform(struct?: ActiveDirectoryDomainTrustTimeoutsOutputReference | ActiveDirectoryDomainTrustTimeouts | cdktf.IResolvable): any {
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

export class ActiveDirectoryDomainTrustTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ActiveDirectoryDomainTrustTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ActiveDirectoryDomainTrustTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust google_active_directory_domain_trust}
*/
export class ActiveDirectoryDomainTrust extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_active_directory_domain_trust";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust google_active_directory_domain_trust} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActiveDirectoryDomainTrustConfig
  */
  public constructor(scope: Construct, id: string, config: ActiveDirectoryDomainTrustConfig) {
    super(scope, id, {
      terraformResourceType: 'google_active_directory_domain_trust',
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
    this._domain = config.domain;
    this._id = config.id;
    this._project = config.project;
    this._selectiveAuthentication = config.selectiveAuthentication;
    this._targetDnsIpAddresses = config.targetDnsIpAddresses;
    this._targetDomainName = config.targetDomainName;
    this._trustDirection = config.trustDirection;
    this._trustHandshakeSecret = config.trustHandshakeSecret;
    this._trustType = config.trustType;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // selective_authentication - computed: false, optional: true, required: false
  private _selectiveAuthentication?: boolean | cdktf.IResolvable; 
  public get selectiveAuthentication() {
    return this.getBooleanAttribute('selective_authentication');
  }
  public set selectiveAuthentication(value: boolean | cdktf.IResolvable) {
    this._selectiveAuthentication = value;
  }
  public resetSelectiveAuthentication() {
    this._selectiveAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectiveAuthenticationInput() {
    return this._selectiveAuthentication;
  }

  // target_dns_ip_addresses - computed: false, optional: false, required: true
  private _targetDnsIpAddresses?: string[]; 
  public get targetDnsIpAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('target_dns_ip_addresses'));
  }
  public set targetDnsIpAddresses(value: string[]) {
    this._targetDnsIpAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDnsIpAddressesInput() {
    return this._targetDnsIpAddresses;
  }

  // target_domain_name - computed: false, optional: false, required: true
  private _targetDomainName?: string; 
  public get targetDomainName() {
    return this.getStringAttribute('target_domain_name');
  }
  public set targetDomainName(value: string) {
    this._targetDomainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDomainNameInput() {
    return this._targetDomainName;
  }

  // trust_direction - computed: false, optional: false, required: true
  private _trustDirection?: string; 
  public get trustDirection() {
    return this.getStringAttribute('trust_direction');
  }
  public set trustDirection(value: string) {
    this._trustDirection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustDirectionInput() {
    return this._trustDirection;
  }

  // trust_handshake_secret - computed: false, optional: false, required: true
  private _trustHandshakeSecret?: string; 
  public get trustHandshakeSecret() {
    return this.getStringAttribute('trust_handshake_secret');
  }
  public set trustHandshakeSecret(value: string) {
    this._trustHandshakeSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustHandshakeSecretInput() {
    return this._trustHandshakeSecret;
  }

  // trust_type - computed: false, optional: false, required: true
  private _trustType?: string; 
  public get trustType() {
    return this.getStringAttribute('trust_type');
  }
  public set trustType(value: string) {
    this._trustType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustTypeInput() {
    return this._trustType;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ActiveDirectoryDomainTrustTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ActiveDirectoryDomainTrustTimeouts) {
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
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      selective_authentication: cdktf.booleanToTerraform(this._selectiveAuthentication),
      target_dns_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetDnsIpAddresses),
      target_domain_name: cdktf.stringToTerraform(this._targetDomainName),
      trust_direction: cdktf.stringToTerraform(this._trustDirection),
      trust_handshake_secret: cdktf.stringToTerraform(this._trustHandshakeSecret),
      trust_type: cdktf.stringToTerraform(this._trustType),
      timeouts: activeDirectoryDomainTrustTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
