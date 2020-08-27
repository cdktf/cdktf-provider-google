// https://www.terraform.io/docs/providers/google/r/active_directory_domain_trust.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ActiveDirectoryDomainTrustConfig extends TerraformMetaArguments {
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

// Resource

export class ActiveDirectoryDomainTrust extends TerraformResource {

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
    return this._domain;
  }
  public set domain(value: string) {
    this._domain = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // selective_authentication - computed: false, optional: true, required: false
  private _selectiveAuthentication?: boolean;
  public get selectiveAuthentication() {
    return this._selectiveAuthentication;
  }
  public set selectiveAuthentication(value: boolean | undefined) {
    this._selectiveAuthentication = value;
  }

  // target_dns_ip_addresses - computed: false, optional: false, required: true
  private _targetDnsIpAddresses: string[];
  public get targetDnsIpAddresses() {
    return this._targetDnsIpAddresses;
  }
  public set targetDnsIpAddresses(value: string[]) {
    this._targetDnsIpAddresses = value;
  }

  // target_domain_name - computed: false, optional: false, required: true
  private _targetDomainName: string;
  public get targetDomainName() {
    return this._targetDomainName;
  }
  public set targetDomainName(value: string) {
    this._targetDomainName = value;
  }

  // trust_direction - computed: false, optional: false, required: true
  private _trustDirection: string;
  public get trustDirection() {
    return this._trustDirection;
  }
  public set trustDirection(value: string) {
    this._trustDirection = value;
  }

  // trust_handshake_secret - computed: false, optional: false, required: true
  private _trustHandshakeSecret: string;
  public get trustHandshakeSecret() {
    return this._trustHandshakeSecret;
  }
  public set trustHandshakeSecret(value: string) {
    this._trustHandshakeSecret = value;
  }

  // trust_type - computed: false, optional: false, required: true
  private _trustType: string;
  public get trustType() {
    return this._trustType;
  }
  public set trustType(value: string) {
    this._trustType = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ActiveDirectoryDomainTrustTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ActiveDirectoryDomainTrustTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: this._domain,
      project: this._project,
      selective_authentication: this._selectiveAuthentication,
      target_dns_ip_addresses: this._targetDnsIpAddresses,
      target_domain_name: this._targetDomainName,
      trust_direction: this._trustDirection,
      trust_handshake_secret: this._trustHandshakeSecret,
      trust_type: this._trustType,
      timeouts: this._timeouts,
    };
  }
}
