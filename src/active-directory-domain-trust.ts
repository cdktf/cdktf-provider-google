// https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActiveDirectoryDomainTrustConfig extends cdktf.TerraformMetaArguments {
  /** The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions, 
https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains. */
  readonly domain: string;
  readonly project?: string;
  /** Whether the trusted side has forest/domain wide access or selective access to an approved set of resources. */
  readonly selectiveAuthentication?: boolean;
  /** The target DNS server IP addresses which can resolve the remote domain involved in the trust. */
  readonly targetDnsIpAddresses: string[];
  /** The fully qualified target domain name which will be in trust with the current domain. */
  readonly targetDomainName: string;
  /** The trust direction, which decides if the current domain is trusted, trusting, or both. Possible values: ["INBOUND", "OUTBOUND", "BIDIRECTIONAL"] */
  readonly trustDirection: string;
  /** The trust secret used for the handshake with the target domain. This will not be stored. */
  readonly trustHandshakeSecret: string;
  /** The type of trust represented by the trust resource. Possible values: ["FOREST", "EXTERNAL"] */
  readonly trustType: string;
  /** timeouts block */
  readonly timeouts?: ActiveDirectoryDomainTrustTimeouts;
}
export interface ActiveDirectoryDomainTrustTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function activeDirectoryDomainTrustTimeoutsToTerraform(struct?: ActiveDirectoryDomainTrustTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ActiveDirectoryDomainTrust extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ActiveDirectoryDomainTrustConfig) {
    super(scope, id, {
      terraformResourceType: 'google_active_directory_domain_trust',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domain = config.domain;
    this._project = config.project;
    this._selectiveAuthentication = config.selectiveAuthentication;
    this._targetDnsIpAddresses = config.targetDnsIpAddresses;
    this._targetDomainName = config.targetDomainName;
    this._trustDirection = config.trustDirection;
    this._trustHandshakeSecret = config.trustHandshakeSecret;
    this._trustType = config.trustType;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain: string;
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._project
  }

  // selective_authentication - computed: false, optional: true, required: false
  private _selectiveAuthentication?: boolean;
  public get selectiveAuthentication() {
    return this.getBooleanAttribute('selective_authentication');
  }
  public set selectiveAuthentication(value: boolean ) {
    this._selectiveAuthentication = value;
  }
  public resetSelectiveAuthentication() {
    this._selectiveAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectiveAuthenticationInput() {
    return this._selectiveAuthentication
  }

  // target_dns_ip_addresses - computed: false, optional: false, required: true
  private _targetDnsIpAddresses: string[];
  public get targetDnsIpAddresses() {
    return this.getListAttribute('target_dns_ip_addresses');
  }
  public set targetDnsIpAddresses(value: string[]) {
    this._targetDnsIpAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDnsIpAddressesInput() {
    return this._targetDnsIpAddresses
  }

  // target_domain_name - computed: false, optional: false, required: true
  private _targetDomainName: string;
  public get targetDomainName() {
    return this.getStringAttribute('target_domain_name');
  }
  public set targetDomainName(value: string) {
    this._targetDomainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDomainNameInput() {
    return this._targetDomainName
  }

  // trust_direction - computed: false, optional: false, required: true
  private _trustDirection: string;
  public get trustDirection() {
    return this.getStringAttribute('trust_direction');
  }
  public set trustDirection(value: string) {
    this._trustDirection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustDirectionInput() {
    return this._trustDirection
  }

  // trust_handshake_secret - computed: false, optional: false, required: true
  private _trustHandshakeSecret: string;
  public get trustHandshakeSecret() {
    return this.getStringAttribute('trust_handshake_secret');
  }
  public set trustHandshakeSecret(value: string) {
    this._trustHandshakeSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustHandshakeSecretInput() {
    return this._trustHandshakeSecret
  }

  // trust_type - computed: false, optional: false, required: true
  private _trustType: string;
  public get trustType() {
    return this.getStringAttribute('trust_type');
  }
  public set trustType(value: string) {
    this._trustType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustTypeInput() {
    return this._trustType
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ActiveDirectoryDomainTrustTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ActiveDirectoryDomainTrustTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      project: cdktf.stringToTerraform(this._project),
      selective_authentication: cdktf.booleanToTerraform(this._selectiveAuthentication),
      target_dns_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform)(this._targetDnsIpAddresses),
      target_domain_name: cdktf.stringToTerraform(this._targetDomainName),
      trust_direction: cdktf.stringToTerraform(this._trustDirection),
      trust_handshake_secret: cdktf.stringToTerraform(this._trustHandshakeSecret),
      trust_type: cdktf.stringToTerraform(this._trustType),
      timeouts: activeDirectoryDomainTrustTimeoutsToTerraform(this._timeouts),
    };
  }
}
