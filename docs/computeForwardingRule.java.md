# `computeForwardingRule` Submodule <a name="`computeForwardingRule` Submodule" id="@cdktf/provider-google.computeForwardingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeForwardingRule <a name="ComputeForwardingRule" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule google_compute_forwarding_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_forwarding_rule.ComputeForwardingRule;

ComputeForwardingRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .allowGlobalAccess(java.lang.Boolean)
//  .allowGlobalAccess(IResolvable)
//  .allowPscGlobalAccess(java.lang.Boolean)
//  .allowPscGlobalAccess(IResolvable)
//  .allPorts(java.lang.Boolean)
//  .allPorts(IResolvable)
//  .backendService(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ipAddress(java.lang.String)
//  .ipProtocol(java.lang.String)
//  .ipVersion(java.lang.String)
//  .isMirroringCollector(java.lang.Boolean)
//  .isMirroringCollector(IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .loadBalancingScheme(java.lang.String)
//  .network(java.lang.String)
//  .networkTier(java.lang.String)
//  .noAutomateDnsZone(java.lang.Boolean)
//  .noAutomateDnsZone(IResolvable)
//  .portRange(java.lang.String)
//  .ports(java.util.List<java.lang.String>)
//  .project(java.lang.String)
//  .recreateClosedPsc(java.lang.Boolean)
//  .recreateClosedPsc(IResolvable)
//  .region(java.lang.String)
//  .serviceDirectoryRegistrations(ComputeForwardingRuleServiceDirectoryRegistrations)
//  .serviceLabel(java.lang.String)
//  .sourceIpRanges(java.util.List<java.lang.String>)
//  .subnetwork(java.lang.String)
//  .target(java.lang.String)
//  .timeouts(ComputeForwardingRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.allowGlobalAccess">allowGlobalAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This field is used along with the 'backend_service' field for internal load balancing or with the 'target' field for internal TargetInstance. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.allowPscGlobalAccess">allowPscGlobalAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.allPorts">allPorts</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.backendService">backendService</a></code> | <code>java.lang.String</code> | Identifies the backend service to which the forwarding rule sends traffic. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#id ComputeForwardingRule#id}. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | IP address for which this forwarding rule accepts traffic. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | The IP address version that will be used by this forwarding rule. Valid options are IPV4 and IPV6. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.isMirroringCollector">isMirroringCollector</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether or not this load balancer can be used as a collector for packet mirroring. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to apply to this forwarding rule.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | Specifies the forwarding rule type. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | This field is not used for external load balancing. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.networkTier">networkTier</a></code> | <code>java.lang.String</code> | This signifies the networking tier used for configuring this load balancer and can only take the following values: 'PREMIUM', 'STANDARD'. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.noAutomateDnsZone">noAutomateDnsZone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This is used in PSC consumer ForwardingRule to control whether it should try to auto-generate a DNS zone or not. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.portRange">portRange</a></code> | <code>java.lang.String</code> | The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.ports">ports</a></code> | <code>java.util.List<java.lang.String></code> | The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#project ComputeForwardingRule#project}. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.recreateClosedPsc">recreateClosedPsc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This is used in PSC consumer ForwardingRule to make terraform recreate the ForwardingRule when the status is closed. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | A reference to the region where the regional forwarding rule resides. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.serviceDirectoryRegistrations">serviceDirectoryRegistrations</a></code> | <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations">ComputeForwardingRuleServiceDirectoryRegistrations</a></code> | service_directory_registrations block. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.serviceLabel">serviceLabel</a></code> | <code>java.lang.String</code> | An optional prefix to the service name for this Forwarding Rule. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.sourceIpRanges">sourceIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | If not empty, this Forwarding Rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | This field identifies the subnetwork that the load balanced IP should belong to for this Forwarding Rule, used in internal load balancing and network load balancing with IPv6. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.target">target</a></code> | <code>java.lang.String</code> | The URL of the target resource to receive the matched traffic. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts">ComputeForwardingRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource;

provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).

Specifically, the name must be 1-63 characters long and match the regular
expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit, except the last character, which
cannot be a dash.

For Private Service Connect forwarding rules that forward traffic to Google
APIs, the forwarding rule name must be a 1-20 characters string with
lowercase letters and numbers and must start with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#name ComputeForwardingRule#name}

---

##### `allowGlobalAccess`<sup>Optional</sup> <a name="allowGlobalAccess" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.allowGlobalAccess"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This field is used along with the 'backend_service' field for internal load balancing or with the 'target' field for internal TargetInstance.

If the field is set to 'TRUE', clients can access ILB from all
regions.

Otherwise only allows access from clients in the same region as the
internal load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#allow_global_access ComputeForwardingRule#allow_global_access}

---

##### `allowPscGlobalAccess`<sup>Optional</sup> <a name="allowPscGlobalAccess" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.allowPscGlobalAccess"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#allow_psc_global_access ComputeForwardingRule#allow_psc_global_access}

---

##### `allPorts`<sup>Optional</sup> <a name="allPorts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.allPorts"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive.

Only packets addressed to ports in the specified range will be forwarded
to the backends configured with this forwarding rule.

The 'allPorts' field has the following limitations:

* It requires that the forwarding rule 'IPProtocol' be TCP, UDP, SCTP, or
  L3_DEFAULT.
* It's applicable only to the following products: internal passthrough
  Network Load Balancers, backend service-based external passthrough Network
  Load Balancers, and internal and external protocol forwarding.
* Set this field to true to allow packets addressed to any port or packets
  lacking destination port information (for example, UDP fragments after the
  first fragment) to be forwarded to the backends configured with this
  forwarding rule. The L3_DEFAULT protocol requires 'allPorts' be set to
  true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#all_ports ComputeForwardingRule#all_ports}

---

##### `backendService`<sup>Optional</sup> <a name="backendService" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.backendService"></a>

- *Type:* java.lang.String

Identifies the backend service to which the forwarding rule sends traffic.

Required for Internal TCP/UDP Load Balancing and Network Load Balancing;
must be omitted for all other load balancer types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#backend_service ComputeForwardingRule#backend_service}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#description ComputeForwardingRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#id ComputeForwardingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.ipAddress"></a>

- *Type:* java.lang.String

IP address for which this forwarding rule accepts traffic.

When a client
sends traffic to this IP address, the forwarding rule directs the traffic
to the referenced 'target' or 'backendService'.

While creating a forwarding rule, specifying an 'IPAddress' is
required under the following circumstances:

* When the 'target' is set to 'targetGrpcProxy' and
  'validateForProxyless' is set to 'true', the
  'IPAddress' should be set to '0.0.0.0'.
* When the 'target' is a Private Service Connect Google APIs
  bundle, you must specify an 'IPAddress'.

Otherwise, you can optionally specify an IP address that references an
existing static (reserved) IP address resource. When omitted, Google Cloud
assigns an ephemeral IP address.

Use one of the following formats to specify an IP address while creating a
forwarding rule:

* IP address number, as in '100.1.2.3'
* IPv6 address range, as in '2600:1234::/96'
* Full resource URL, as in
  'https://www.googleapis.com/compute/v1/projects/project_id/regions/region/addresses/address-name'
* Partial URL or by name, as in:

  * 'projects/project_id/regions/region/addresses/address-name'
  * 'regions/region/addresses/address-name'
  * 'global/addresses/address-name'
  * 'address-name'

The forwarding rule's 'target' or 'backendService',
and in most cases, also the 'loadBalancingScheme', determine the
type of IP address that you can use. For detailed information, see
[IP address
specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).

When reading an 'IPAddress', the API always returns the IP
address number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#ip_address ComputeForwardingRule#ip_address}

---

##### `ipProtocol`<sup>Optional</sup> <a name="ipProtocol" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.ipProtocol"></a>

- *Type:* java.lang.String

The IP protocol to which this rule applies.

For protocol forwarding, valid
options are 'TCP', 'UDP', 'ESP',
'AH', 'SCTP', 'ICMP' and
'L3_DEFAULT'.

The valid IP protocols are different for different load balancing products
as described in [Load balancing
features](https://cloud.google.com/load-balancing/docs/features#protocols_from_the_load_balancer_to_the_backends).

A Forwarding Rule with protocol L3_DEFAULT can attach with target instance or
backend service with UNSPECIFIED protocol.
A forwarding rule with "L3_DEFAULT" IPProtocal cannot be attached to a backend service with TCP or UDP. Possible values: ["TCP", "UDP", "ESP", "AH", "SCTP", "ICMP", "L3_DEFAULT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#ip_protocol ComputeForwardingRule#ip_protocol}

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.ipVersion"></a>

- *Type:* java.lang.String

The IP address version that will be used by this forwarding rule. Valid options are IPV4 and IPV6.

If not set, the IPv4 address will be used by default. Possible values: ["IPV4", "IPV6"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#ip_version ComputeForwardingRule#ip_version}

---

##### `isMirroringCollector`<sup>Optional</sup> <a name="isMirroringCollector" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.isMirroringCollector"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether or not this load balancer can be used as a collector for packet mirroring.

To prevent mirroring loops, instances behind this
load balancer will not have their traffic mirrored even if a
'PacketMirroring' rule applies to them.

This can only be set to true for load balancers that have their
'loadBalancingScheme' set to 'INTERNAL'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#is_mirroring_collector ComputeForwardingRule#is_mirroring_collector}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to apply to this forwarding rule.  A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#labels ComputeForwardingRule#labels}

---

##### `loadBalancingScheme`<sup>Optional</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.loadBalancingScheme"></a>

- *Type:* java.lang.String

Specifies the forwarding rule type.

For more information about forwarding rules, refer to
[Forwarding rule concepts](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts). Default value: "EXTERNAL" Possible values: ["EXTERNAL", "EXTERNAL_MANAGED", "INTERNAL", "INTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#load_balancing_scheme ComputeForwardingRule#load_balancing_scheme}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.network"></a>

- *Type:* java.lang.String

This field is not used for external load balancing.

For Internal TCP/UDP Load Balancing, this field identifies the network that
the load balanced IP should belong to for this Forwarding Rule.
If the subnetwork is specified, the network of the subnetwork will be used.
If neither subnetwork nor this field is specified, the default network will
be used.

For Private Service Connect forwarding rules that forward traffic to Google
APIs, a network must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#network ComputeForwardingRule#network}

---

##### `networkTier`<sup>Optional</sup> <a name="networkTier" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.networkTier"></a>

- *Type:* java.lang.String

This signifies the networking tier used for configuring this load balancer and can only take the following values: 'PREMIUM', 'STANDARD'.

For regional ForwardingRule, the valid values are 'PREMIUM' and
'STANDARD'. For GlobalForwardingRule, the valid value is
'PREMIUM'.

If this field is not specified, it is assumed to be 'PREMIUM'.
If 'IPAddress' is specified, this value must be equal to the
networkTier of the Address. Possible values: ["PREMIUM", "STANDARD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#network_tier ComputeForwardingRule#network_tier}

---

##### `noAutomateDnsZone`<sup>Optional</sup> <a name="noAutomateDnsZone" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.noAutomateDnsZone"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This is used in PSC consumer ForwardingRule to control whether it should try to auto-generate a DNS zone or not.

Non-PSC forwarding rules do not use this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#no_automate_dns_zone ComputeForwardingRule#no_automate_dns_zone}

---

##### `portRange`<sup>Optional</sup> <a name="portRange" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.portRange"></a>

- *Type:* java.lang.String

The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive.

Only packets addressed to ports in the specified range will be forwarded
to the backends configured with this forwarding rule.

The 'portRange' field has the following limitations:

* It requires that the forwarding rule 'IPProtocol' be TCP, UDP, or SCTP,
  and
* It's applicable only to the following products: external passthrough
  Network Load Balancers, internal and external proxy Network Load
  Balancers, internal and external Application Load Balancers, external
  protocol forwarding, and Classic VPN.
* Some products have restrictions on what ports can be used. See
  [port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#port_specifications)
  for details.

For external forwarding rules, two or more forwarding rules cannot use the
same '[IPAddress, IPProtocol]' pair, and cannot have overlapping
'portRange's.

For internal forwarding rules within the same VPC network, two or more
forwarding rules cannot use the same '[IPAddress, IPProtocol]' pair, and
cannot have overlapping 'portRange's.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.ports"></a>

- *Type:* java.util.List<java.lang.String>

The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive.

Only packets addressed to ports in the specified range will be forwarded
to the backends configured with this forwarding rule.

The 'ports' field has the following limitations:

* It requires that the forwarding rule 'IPProtocol' be TCP, UDP, or SCTP,
  and
* It's applicable only to the following products: internal passthrough
  Network Load Balancers, backend service-based external passthrough Network
  Load Balancers, and internal protocol forwarding.
* You can specify a list of up to five ports by number, separated by
  commas. The ports can be contiguous or discontiguous.

For external forwarding rules, two or more forwarding rules cannot use the
same '[IPAddress, IPProtocol]' pair if they share at least one port
number.

For internal forwarding rules within the same VPC network, two or more
forwarding rules cannot use the same '[IPAddress, IPProtocol]' pair if
they share at least one port number.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#project ComputeForwardingRule#project}.

---

##### `recreateClosedPsc`<sup>Optional</sup> <a name="recreateClosedPsc" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.recreateClosedPsc"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This is used in PSC consumer ForwardingRule to make terraform recreate the ForwardingRule when the status is closed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#recreate_closed_psc ComputeForwardingRule#recreate_closed_psc}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.region"></a>

- *Type:* java.lang.String

A reference to the region where the regional forwarding rule resides.

This field is not applicable to global forwarding rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#region ComputeForwardingRule#region}

---

##### `serviceDirectoryRegistrations`<sup>Optional</sup> <a name="serviceDirectoryRegistrations" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.serviceDirectoryRegistrations"></a>

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations">ComputeForwardingRuleServiceDirectoryRegistrations</a>

service_directory_registrations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#service_directory_registrations ComputeForwardingRule#service_directory_registrations}

---

##### `serviceLabel`<sup>Optional</sup> <a name="serviceLabel" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.serviceLabel"></a>

- *Type:* java.lang.String

An optional prefix to the service name for this Forwarding Rule.

If specified, will be the first label of the fully qualified service
name.

The label must be 1-63 characters long, and comply with RFC1035.
Specifically, the label must be 1-63 characters long and match the
regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

This field is only used for INTERNAL load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#service_label ComputeForwardingRule#service_label}

---

##### `sourceIpRanges`<sup>Optional</sup> <a name="sourceIpRanges" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.sourceIpRanges"></a>

- *Type:* java.util.List<java.lang.String>

If not empty, this Forwarding Rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here.

Note that a Forwarding Rule can only have up to 64 source IP ranges, and this field can only be used with a regional Forwarding Rule whose scheme is EXTERNAL. Each sourceIpRange entry should be either an IP address (for example, 1.2.3.4) or a CIDR range (for example, 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#source_ip_ranges ComputeForwardingRule#source_ip_ranges}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.subnetwork"></a>

- *Type:* java.lang.String

This field identifies the subnetwork that the load balanced IP should belong to for this Forwarding Rule, used in internal load balancing and network load balancing with IPv6.

If the network specified is in auto subnet mode, this field is optional.
However, a subnetwork must be specified if the network is in custom subnet
mode or when creating external forwarding rule with IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#subnetwork ComputeForwardingRule#subnetwork}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.target"></a>

- *Type:* java.lang.String

The URL of the target resource to receive the matched traffic.

For
regional forwarding rules, this target must be in the same region as the
forwarding rule. For global forwarding rules, this target must be a global
load balancing resource.

The forwarded traffic must be of a type appropriate to the target object.

* For load balancers, see the "Target" column in [Port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).
* For Private Service Connect forwarding rules that forward traffic to Google APIs, provide the name of a supported Google API bundle:
* 'vpc-sc' - [ APIs that support VPC Service Controls](https://cloud.google.com/vpc-service-controls/docs/supported-products).
* 'all-apis' - [All supported Google APIs](https://cloud.google.com/vpc/docs/private-service-connect#supported-apis).

For Private Service Connect forwarding rules that forward traffic to managed services, the target must be a service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#target ComputeForwardingRule#target}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts">ComputeForwardingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#timeouts ComputeForwardingRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.putServiceDirectoryRegistrations">putServiceDirectoryRegistrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetAllowGlobalAccess">resetAllowGlobalAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetAllowPscGlobalAccess">resetAllowPscGlobalAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetAllPorts">resetAllPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetBackendService">resetBackendService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetIpProtocol">resetIpProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetIsMirroringCollector">resetIsMirroringCollector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetLoadBalancingScheme">resetLoadBalancingScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetNetworkTier">resetNetworkTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetNoAutomateDnsZone">resetNoAutomateDnsZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetPortRange">resetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetRecreateClosedPsc">resetRecreateClosedPsc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetServiceDirectoryRegistrations">resetServiceDirectoryRegistrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetServiceLabel">resetServiceLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetSourceIpRanges">resetSourceIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putServiceDirectoryRegistrations` <a name="putServiceDirectoryRegistrations" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.putServiceDirectoryRegistrations"></a>

```java
public void putServiceDirectoryRegistrations(ComputeForwardingRuleServiceDirectoryRegistrations value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.putServiceDirectoryRegistrations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations">ComputeForwardingRuleServiceDirectoryRegistrations</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.putTimeouts"></a>

```java
public void putTimeouts(ComputeForwardingRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts">ComputeForwardingRuleTimeouts</a>

---

##### `resetAllowGlobalAccess` <a name="resetAllowGlobalAccess" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetAllowGlobalAccess"></a>

```java
public void resetAllowGlobalAccess()
```

##### `resetAllowPscGlobalAccess` <a name="resetAllowPscGlobalAccess" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetAllowPscGlobalAccess"></a>

```java
public void resetAllowPscGlobalAccess()
```

##### `resetAllPorts` <a name="resetAllPorts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetAllPorts"></a>

```java
public void resetAllPorts()
```

##### `resetBackendService` <a name="resetBackendService" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetBackendService"></a>

```java
public void resetBackendService()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetId"></a>

```java
public void resetId()
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetIpAddress"></a>

```java
public void resetIpAddress()
```

##### `resetIpProtocol` <a name="resetIpProtocol" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetIpProtocol"></a>

```java
public void resetIpProtocol()
```

##### `resetIpVersion` <a name="resetIpVersion" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetIpVersion"></a>

```java
public void resetIpVersion()
```

##### `resetIsMirroringCollector` <a name="resetIsMirroringCollector" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetIsMirroringCollector"></a>

```java
public void resetIsMirroringCollector()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLoadBalancingScheme` <a name="resetLoadBalancingScheme" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetLoadBalancingScheme"></a>

```java
public void resetLoadBalancingScheme()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetNetworkTier` <a name="resetNetworkTier" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetNetworkTier"></a>

```java
public void resetNetworkTier()
```

##### `resetNoAutomateDnsZone` <a name="resetNoAutomateDnsZone" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetNoAutomateDnsZone"></a>

```java
public void resetNoAutomateDnsZone()
```

##### `resetPortRange` <a name="resetPortRange" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetPortRange"></a>

```java
public void resetPortRange()
```

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetPorts"></a>

```java
public void resetPorts()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetProject"></a>

```java
public void resetProject()
```

##### `resetRecreateClosedPsc` <a name="resetRecreateClosedPsc" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetRecreateClosedPsc"></a>

```java
public void resetRecreateClosedPsc()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetServiceDirectoryRegistrations` <a name="resetServiceDirectoryRegistrations" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetServiceDirectoryRegistrations"></a>

```java
public void resetServiceDirectoryRegistrations()
```

##### `resetServiceLabel` <a name="resetServiceLabel" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetServiceLabel"></a>

```java
public void resetServiceLabel()
```

##### `resetSourceIpRanges` <a name="resetSourceIpRanges" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetSourceIpRanges"></a>

```java
public void resetSourceIpRanges()
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetSubnetwork"></a>

```java
public void resetSubnetwork()
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetTarget"></a>

```java
public void resetTarget()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeForwardingRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_forwarding_rule.ComputeForwardingRule;

ComputeForwardingRule.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_forwarding_rule.ComputeForwardingRule;

ComputeForwardingRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_forwarding_rule.ComputeForwardingRule;

ComputeForwardingRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_forwarding_rule.ComputeForwardingRule;

ComputeForwardingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeForwardingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComputeForwardingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeForwardingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeForwardingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComputeForwardingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.baseForwardingRule">baseForwardingRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.labelFingerprint">labelFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.pscConnectionId">pscConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.pscConnectionStatus">pscConnectionStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceDirectoryRegistrations">serviceDirectoryRegistrations</a></code> | <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference">ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference">ComputeForwardingRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allowGlobalAccessInput">allowGlobalAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allowPscGlobalAccessInput">allowPscGlobalAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allPortsInput">allPortsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.backendServiceInput">backendServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipProtocolInput">ipProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipVersionInput">ipVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.isMirroringCollectorInput">isMirroringCollectorInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.loadBalancingSchemeInput">loadBalancingSchemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.networkTierInput">networkTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.noAutomateDnsZoneInput">noAutomateDnsZoneInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.portRangeInput">portRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.portsInput">portsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.recreateClosedPscInput">recreateClosedPscInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceDirectoryRegistrationsInput">serviceDirectoryRegistrationsInput</a></code> | <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations">ComputeForwardingRuleServiceDirectoryRegistrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceLabelInput">serviceLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.sourceIpRangesInput">sourceIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.subnetworkInput">subnetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts">ComputeForwardingRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allowGlobalAccess">allowGlobalAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allowPscGlobalAccess">allowPscGlobalAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allPorts">allPorts</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.backendService">backendService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.isMirroringCollector">isMirroringCollector</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.networkTier">networkTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.noAutomateDnsZone">noAutomateDnsZone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.portRange">portRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ports">ports</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.recreateClosedPsc">recreateClosedPsc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceLabel">serviceLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.sourceIpRanges">sourceIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `baseForwardingRule`<sup>Required</sup> <a name="baseForwardingRule" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.baseForwardingRule"></a>

```java
public java.lang.String getBaseForwardingRule();
```

- *Type:* java.lang.String

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.labelFingerprint"></a>

```java
public java.lang.String getLabelFingerprint();
```

- *Type:* java.lang.String

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.pscConnectionId"></a>

```java
public java.lang.String getPscConnectionId();
```

- *Type:* java.lang.String

---

##### `pscConnectionStatus`<sup>Required</sup> <a name="pscConnectionStatus" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.pscConnectionStatus"></a>

```java
public java.lang.String getPscConnectionStatus();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `serviceDirectoryRegistrations`<sup>Required</sup> <a name="serviceDirectoryRegistrations" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceDirectoryRegistrations"></a>

```java
public ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference getServiceDirectoryRegistrations();
```

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference">ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference</a>

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.timeouts"></a>

```java
public ComputeForwardingRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference">ComputeForwardingRuleTimeoutsOutputReference</a>

---

##### `allowGlobalAccessInput`<sup>Optional</sup> <a name="allowGlobalAccessInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allowGlobalAccessInput"></a>

```java
public java.lang.Object getAllowGlobalAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowPscGlobalAccessInput`<sup>Optional</sup> <a name="allowPscGlobalAccessInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allowPscGlobalAccessInput"></a>

```java
public java.lang.Object getAllowPscGlobalAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allPortsInput`<sup>Optional</sup> <a name="allPortsInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allPortsInput"></a>

```java
public java.lang.Object getAllPortsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backendServiceInput`<sup>Optional</sup> <a name="backendServiceInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.backendServiceInput"></a>

```java
public java.lang.String getBackendServiceInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipProtocolInput"></a>

```java
public java.lang.String getIpProtocolInput();
```

- *Type:* java.lang.String

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipVersionInput"></a>

```java
public java.lang.String getIpVersionInput();
```

- *Type:* java.lang.String

---

##### `isMirroringCollectorInput`<sup>Optional</sup> <a name="isMirroringCollectorInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.isMirroringCollectorInput"></a>

```java
public java.lang.Object getIsMirroringCollectorInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `loadBalancingSchemeInput`<sup>Optional</sup> <a name="loadBalancingSchemeInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.loadBalancingSchemeInput"></a>

```java
public java.lang.String getLoadBalancingSchemeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `networkTierInput`<sup>Optional</sup> <a name="networkTierInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.networkTierInput"></a>

```java
public java.lang.String getNetworkTierInput();
```

- *Type:* java.lang.String

---

##### `noAutomateDnsZoneInput`<sup>Optional</sup> <a name="noAutomateDnsZoneInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.noAutomateDnsZoneInput"></a>

```java
public java.lang.Object getNoAutomateDnsZoneInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `portRangeInput`<sup>Optional</sup> <a name="portRangeInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.portRangeInput"></a>

```java
public java.lang.String getPortRangeInput();
```

- *Type:* java.lang.String

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.portsInput"></a>

```java
public java.util.List<java.lang.String> getPortsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `recreateClosedPscInput`<sup>Optional</sup> <a name="recreateClosedPscInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.recreateClosedPscInput"></a>

```java
public java.lang.Object getRecreateClosedPscInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `serviceDirectoryRegistrationsInput`<sup>Optional</sup> <a name="serviceDirectoryRegistrationsInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceDirectoryRegistrationsInput"></a>

```java
public ComputeForwardingRuleServiceDirectoryRegistrations getServiceDirectoryRegistrationsInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations">ComputeForwardingRuleServiceDirectoryRegistrations</a>

---

##### `serviceLabelInput`<sup>Optional</sup> <a name="serviceLabelInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceLabelInput"></a>

```java
public java.lang.String getServiceLabelInput();
```

- *Type:* java.lang.String

---

##### `sourceIpRangesInput`<sup>Optional</sup> <a name="sourceIpRangesInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.sourceIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getSourceIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.subnetworkInput"></a>

```java
public java.lang.String getSubnetworkInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts">ComputeForwardingRuleTimeouts</a>

---

##### `allowGlobalAccess`<sup>Required</sup> <a name="allowGlobalAccess" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allowGlobalAccess"></a>

```java
public java.lang.Object getAllowGlobalAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowPscGlobalAccess`<sup>Required</sup> <a name="allowPscGlobalAccess" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allowPscGlobalAccess"></a>

```java
public java.lang.Object getAllowPscGlobalAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allPorts`<sup>Required</sup> <a name="allPorts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.allPorts"></a>

```java
public java.lang.Object getAllPorts();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backendService`<sup>Required</sup> <a name="backendService" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.backendService"></a>

```java
public java.lang.String getBackendService();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ipVersion"></a>

```java
public java.lang.String getIpVersion();
```

- *Type:* java.lang.String

---

##### `isMirroringCollector`<sup>Required</sup> <a name="isMirroringCollector" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.isMirroringCollector"></a>

```java
public java.lang.Object getIsMirroringCollector();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.loadBalancingScheme"></a>

```java
public java.lang.String getLoadBalancingScheme();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.networkTier"></a>

```java
public java.lang.String getNetworkTier();
```

- *Type:* java.lang.String

---

##### `noAutomateDnsZone`<sup>Required</sup> <a name="noAutomateDnsZone" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.noAutomateDnsZone"></a>

```java
public java.lang.Object getNoAutomateDnsZone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.portRange"></a>

```java
public java.lang.String getPortRange();
```

- *Type:* java.lang.String

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.ports"></a>

```java
public java.util.List<java.lang.String> getPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `recreateClosedPsc`<sup>Required</sup> <a name="recreateClosedPsc" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.recreateClosedPsc"></a>

```java
public java.lang.Object getRecreateClosedPsc();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `serviceLabel`<sup>Required</sup> <a name="serviceLabel" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.serviceLabel"></a>

```java
public java.lang.String getServiceLabel();
```

- *Type:* java.lang.String

---

##### `sourceIpRanges`<sup>Required</sup> <a name="sourceIpRanges" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.sourceIpRanges"></a>

```java
public java.util.List<java.lang.String> getSourceIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeForwardingRuleConfig <a name="ComputeForwardingRuleConfig" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_forwarding_rule.ComputeForwardingRuleConfig;

ComputeForwardingRuleConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .allowGlobalAccess(java.lang.Boolean)
//  .allowGlobalAccess(IResolvable)
//  .allowPscGlobalAccess(java.lang.Boolean)
//  .allowPscGlobalAccess(IResolvable)
//  .allPorts(java.lang.Boolean)
//  .allPorts(IResolvable)
//  .backendService(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ipAddress(java.lang.String)
//  .ipProtocol(java.lang.String)
//  .ipVersion(java.lang.String)
//  .isMirroringCollector(java.lang.Boolean)
//  .isMirroringCollector(IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .loadBalancingScheme(java.lang.String)
//  .network(java.lang.String)
//  .networkTier(java.lang.String)
//  .noAutomateDnsZone(java.lang.Boolean)
//  .noAutomateDnsZone(IResolvable)
//  .portRange(java.lang.String)
//  .ports(java.util.List<java.lang.String>)
//  .project(java.lang.String)
//  .recreateClosedPsc(java.lang.Boolean)
//  .recreateClosedPsc(IResolvable)
//  .region(java.lang.String)
//  .serviceDirectoryRegistrations(ComputeForwardingRuleServiceDirectoryRegistrations)
//  .serviceLabel(java.lang.String)
//  .sourceIpRanges(java.util.List<java.lang.String>)
//  .subnetwork(java.lang.String)
//  .target(java.lang.String)
//  .timeouts(ComputeForwardingRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.allowGlobalAccess">allowGlobalAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This field is used along with the 'backend_service' field for internal load balancing or with the 'target' field for internal TargetInstance. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.allowPscGlobalAccess">allowPscGlobalAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.allPorts">allPorts</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.backendService">backendService</a></code> | <code>java.lang.String</code> | Identifies the backend service to which the forwarding rule sends traffic. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#id ComputeForwardingRule#id}. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | IP address for which this forwarding rule accepts traffic. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | The IP address version that will be used by this forwarding rule. Valid options are IPV4 and IPV6. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.isMirroringCollector">isMirroringCollector</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether or not this load balancer can be used as a collector for packet mirroring. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to apply to this forwarding rule.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | Specifies the forwarding rule type. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.network">network</a></code> | <code>java.lang.String</code> | This field is not used for external load balancing. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.networkTier">networkTier</a></code> | <code>java.lang.String</code> | This signifies the networking tier used for configuring this load balancer and can only take the following values: 'PREMIUM', 'STANDARD'. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.noAutomateDnsZone">noAutomateDnsZone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This is used in PSC consumer ForwardingRule to control whether it should try to auto-generate a DNS zone or not. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.portRange">portRange</a></code> | <code>java.lang.String</code> | The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.ports">ports</a></code> | <code>java.util.List<java.lang.String></code> | The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#project ComputeForwardingRule#project}. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.recreateClosedPsc">recreateClosedPsc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This is used in PSC consumer ForwardingRule to make terraform recreate the ForwardingRule when the status is closed. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.region">region</a></code> | <code>java.lang.String</code> | A reference to the region where the regional forwarding rule resides. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.serviceDirectoryRegistrations">serviceDirectoryRegistrations</a></code> | <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations">ComputeForwardingRuleServiceDirectoryRegistrations</a></code> | service_directory_registrations block. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.serviceLabel">serviceLabel</a></code> | <code>java.lang.String</code> | An optional prefix to the service name for this Forwarding Rule. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.sourceIpRanges">sourceIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | If not empty, this Forwarding Rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | This field identifies the subnetwork that the load balanced IP should belong to for this Forwarding Rule, used in internal load balancing and network load balancing with IPv6. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.target">target</a></code> | <code>java.lang.String</code> | The URL of the target resource to receive the matched traffic. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts">ComputeForwardingRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource;

provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).

Specifically, the name must be 1-63 characters long and match the regular
expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit, except the last character, which
cannot be a dash.

For Private Service Connect forwarding rules that forward traffic to Google
APIs, the forwarding rule name must be a 1-20 characters string with
lowercase letters and numbers and must start with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#name ComputeForwardingRule#name}

---

##### `allowGlobalAccess`<sup>Optional</sup> <a name="allowGlobalAccess" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.allowGlobalAccess"></a>

```java
public java.lang.Object getAllowGlobalAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This field is used along with the 'backend_service' field for internal load balancing or with the 'target' field for internal TargetInstance.

If the field is set to 'TRUE', clients can access ILB from all
regions.

Otherwise only allows access from clients in the same region as the
internal load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#allow_global_access ComputeForwardingRule#allow_global_access}

---

##### `allowPscGlobalAccess`<sup>Optional</sup> <a name="allowPscGlobalAccess" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.allowPscGlobalAccess"></a>

```java
public java.lang.Object getAllowPscGlobalAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#allow_psc_global_access ComputeForwardingRule#allow_psc_global_access}

---

##### `allPorts`<sup>Optional</sup> <a name="allPorts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.allPorts"></a>

```java
public java.lang.Object getAllPorts();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive.

Only packets addressed to ports in the specified range will be forwarded
to the backends configured with this forwarding rule.

The 'allPorts' field has the following limitations:

* It requires that the forwarding rule 'IPProtocol' be TCP, UDP, SCTP, or
  L3_DEFAULT.
* It's applicable only to the following products: internal passthrough
  Network Load Balancers, backend service-based external passthrough Network
  Load Balancers, and internal and external protocol forwarding.
* Set this field to true to allow packets addressed to any port or packets
  lacking destination port information (for example, UDP fragments after the
  first fragment) to be forwarded to the backends configured with this
  forwarding rule. The L3_DEFAULT protocol requires 'allPorts' be set to
  true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#all_ports ComputeForwardingRule#all_ports}

---

##### `backendService`<sup>Optional</sup> <a name="backendService" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.backendService"></a>

```java
public java.lang.String getBackendService();
```

- *Type:* java.lang.String

Identifies the backend service to which the forwarding rule sends traffic.

Required for Internal TCP/UDP Load Balancing and Network Load Balancing;
must be omitted for all other load balancer types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#backend_service ComputeForwardingRule#backend_service}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#description ComputeForwardingRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#id ComputeForwardingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

IP address for which this forwarding rule accepts traffic.

When a client
sends traffic to this IP address, the forwarding rule directs the traffic
to the referenced 'target' or 'backendService'.

While creating a forwarding rule, specifying an 'IPAddress' is
required under the following circumstances:

* When the 'target' is set to 'targetGrpcProxy' and
  'validateForProxyless' is set to 'true', the
  'IPAddress' should be set to '0.0.0.0'.
* When the 'target' is a Private Service Connect Google APIs
  bundle, you must specify an 'IPAddress'.

Otherwise, you can optionally specify an IP address that references an
existing static (reserved) IP address resource. When omitted, Google Cloud
assigns an ephemeral IP address.

Use one of the following formats to specify an IP address while creating a
forwarding rule:

* IP address number, as in '100.1.2.3'
* IPv6 address range, as in '2600:1234::/96'
* Full resource URL, as in
  'https://www.googleapis.com/compute/v1/projects/project_id/regions/region/addresses/address-name'
* Partial URL or by name, as in:

  * 'projects/project_id/regions/region/addresses/address-name'
  * 'regions/region/addresses/address-name'
  * 'global/addresses/address-name'
  * 'address-name'

The forwarding rule's 'target' or 'backendService',
and in most cases, also the 'loadBalancingScheme', determine the
type of IP address that you can use. For detailed information, see
[IP address
specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).

When reading an 'IPAddress', the API always returns the IP
address number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#ip_address ComputeForwardingRule#ip_address}

---

##### `ipProtocol`<sup>Optional</sup> <a name="ipProtocol" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

The IP protocol to which this rule applies.

For protocol forwarding, valid
options are 'TCP', 'UDP', 'ESP',
'AH', 'SCTP', 'ICMP' and
'L3_DEFAULT'.

The valid IP protocols are different for different load balancing products
as described in [Load balancing
features](https://cloud.google.com/load-balancing/docs/features#protocols_from_the_load_balancer_to_the_backends).

A Forwarding Rule with protocol L3_DEFAULT can attach with target instance or
backend service with UNSPECIFIED protocol.
A forwarding rule with "L3_DEFAULT" IPProtocal cannot be attached to a backend service with TCP or UDP. Possible values: ["TCP", "UDP", "ESP", "AH", "SCTP", "ICMP", "L3_DEFAULT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#ip_protocol ComputeForwardingRule#ip_protocol}

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.ipVersion"></a>

```java
public java.lang.String getIpVersion();
```

- *Type:* java.lang.String

The IP address version that will be used by this forwarding rule. Valid options are IPV4 and IPV6.

If not set, the IPv4 address will be used by default. Possible values: ["IPV4", "IPV6"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#ip_version ComputeForwardingRule#ip_version}

---

##### `isMirroringCollector`<sup>Optional</sup> <a name="isMirroringCollector" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.isMirroringCollector"></a>

```java
public java.lang.Object getIsMirroringCollector();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether or not this load balancer can be used as a collector for packet mirroring.

To prevent mirroring loops, instances behind this
load balancer will not have their traffic mirrored even if a
'PacketMirroring' rule applies to them.

This can only be set to true for load balancers that have their
'loadBalancingScheme' set to 'INTERNAL'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#is_mirroring_collector ComputeForwardingRule#is_mirroring_collector}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to apply to this forwarding rule.  A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#labels ComputeForwardingRule#labels}

---

##### `loadBalancingScheme`<sup>Optional</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.loadBalancingScheme"></a>

```java
public java.lang.String getLoadBalancingScheme();
```

- *Type:* java.lang.String

Specifies the forwarding rule type.

For more information about forwarding rules, refer to
[Forwarding rule concepts](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts). Default value: "EXTERNAL" Possible values: ["EXTERNAL", "EXTERNAL_MANAGED", "INTERNAL", "INTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#load_balancing_scheme ComputeForwardingRule#load_balancing_scheme}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

This field is not used for external load balancing.

For Internal TCP/UDP Load Balancing, this field identifies the network that
the load balanced IP should belong to for this Forwarding Rule.
If the subnetwork is specified, the network of the subnetwork will be used.
If neither subnetwork nor this field is specified, the default network will
be used.

For Private Service Connect forwarding rules that forward traffic to Google
APIs, a network must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#network ComputeForwardingRule#network}

---

##### `networkTier`<sup>Optional</sup> <a name="networkTier" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.networkTier"></a>

```java
public java.lang.String getNetworkTier();
```

- *Type:* java.lang.String

This signifies the networking tier used for configuring this load balancer and can only take the following values: 'PREMIUM', 'STANDARD'.

For regional ForwardingRule, the valid values are 'PREMIUM' and
'STANDARD'. For GlobalForwardingRule, the valid value is
'PREMIUM'.

If this field is not specified, it is assumed to be 'PREMIUM'.
If 'IPAddress' is specified, this value must be equal to the
networkTier of the Address. Possible values: ["PREMIUM", "STANDARD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#network_tier ComputeForwardingRule#network_tier}

---

##### `noAutomateDnsZone`<sup>Optional</sup> <a name="noAutomateDnsZone" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.noAutomateDnsZone"></a>

```java
public java.lang.Object getNoAutomateDnsZone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This is used in PSC consumer ForwardingRule to control whether it should try to auto-generate a DNS zone or not.

Non-PSC forwarding rules do not use this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#no_automate_dns_zone ComputeForwardingRule#no_automate_dns_zone}

---

##### `portRange`<sup>Optional</sup> <a name="portRange" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.portRange"></a>

```java
public java.lang.String getPortRange();
```

- *Type:* java.lang.String

The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive.

Only packets addressed to ports in the specified range will be forwarded
to the backends configured with this forwarding rule.

The 'portRange' field has the following limitations:

* It requires that the forwarding rule 'IPProtocol' be TCP, UDP, or SCTP,
  and
* It's applicable only to the following products: external passthrough
  Network Load Balancers, internal and external proxy Network Load
  Balancers, internal and external Application Load Balancers, external
  protocol forwarding, and Classic VPN.
* Some products have restrictions on what ports can be used. See
  [port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#port_specifications)
  for details.

For external forwarding rules, two or more forwarding rules cannot use the
same '[IPAddress, IPProtocol]' pair, and cannot have overlapping
'portRange's.

For internal forwarding rules within the same VPC network, two or more
forwarding rules cannot use the same '[IPAddress, IPProtocol]' pair, and
cannot have overlapping 'portRange's.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.ports"></a>

```java
public java.util.List<java.lang.String> getPorts();
```

- *Type:* java.util.List<java.lang.String>

The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive.

Only packets addressed to ports in the specified range will be forwarded
to the backends configured with this forwarding rule.

The 'ports' field has the following limitations:

* It requires that the forwarding rule 'IPProtocol' be TCP, UDP, or SCTP,
  and
* It's applicable only to the following products: internal passthrough
  Network Load Balancers, backend service-based external passthrough Network
  Load Balancers, and internal protocol forwarding.
* You can specify a list of up to five ports by number, separated by
  commas. The ports can be contiguous or discontiguous.

For external forwarding rules, two or more forwarding rules cannot use the
same '[IPAddress, IPProtocol]' pair if they share at least one port
number.

For internal forwarding rules within the same VPC network, two or more
forwarding rules cannot use the same '[IPAddress, IPProtocol]' pair if
they share at least one port number.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#project ComputeForwardingRule#project}.

---

##### `recreateClosedPsc`<sup>Optional</sup> <a name="recreateClosedPsc" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.recreateClosedPsc"></a>

```java
public java.lang.Object getRecreateClosedPsc();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This is used in PSC consumer ForwardingRule to make terraform recreate the ForwardingRule when the status is closed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#recreate_closed_psc ComputeForwardingRule#recreate_closed_psc}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

A reference to the region where the regional forwarding rule resides.

This field is not applicable to global forwarding rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#region ComputeForwardingRule#region}

---

##### `serviceDirectoryRegistrations`<sup>Optional</sup> <a name="serviceDirectoryRegistrations" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.serviceDirectoryRegistrations"></a>

```java
public ComputeForwardingRuleServiceDirectoryRegistrations getServiceDirectoryRegistrations();
```

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations">ComputeForwardingRuleServiceDirectoryRegistrations</a>

service_directory_registrations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#service_directory_registrations ComputeForwardingRule#service_directory_registrations}

---

##### `serviceLabel`<sup>Optional</sup> <a name="serviceLabel" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.serviceLabel"></a>

```java
public java.lang.String getServiceLabel();
```

- *Type:* java.lang.String

An optional prefix to the service name for this Forwarding Rule.

If specified, will be the first label of the fully qualified service
name.

The label must be 1-63 characters long, and comply with RFC1035.
Specifically, the label must be 1-63 characters long and match the
regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

This field is only used for INTERNAL load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#service_label ComputeForwardingRule#service_label}

---

##### `sourceIpRanges`<sup>Optional</sup> <a name="sourceIpRanges" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.sourceIpRanges"></a>

```java
public java.util.List<java.lang.String> getSourceIpRanges();
```

- *Type:* java.util.List<java.lang.String>

If not empty, this Forwarding Rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here.

Note that a Forwarding Rule can only have up to 64 source IP ranges, and this field can only be used with a regional Forwarding Rule whose scheme is EXTERNAL. Each sourceIpRange entry should be either an IP address (for example, 1.2.3.4) or a CIDR range (for example, 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#source_ip_ranges ComputeForwardingRule#source_ip_ranges}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

This field identifies the subnetwork that the load balanced IP should belong to for this Forwarding Rule, used in internal load balancing and network load balancing with IPv6.

If the network specified is in auto subnet mode, this field is optional.
However, a subnetwork must be specified if the network is in custom subnet
mode or when creating external forwarding rule with IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#subnetwork ComputeForwardingRule#subnetwork}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

The URL of the target resource to receive the matched traffic.

For
regional forwarding rules, this target must be in the same region as the
forwarding rule. For global forwarding rules, this target must be a global
load balancing resource.

The forwarded traffic must be of a type appropriate to the target object.

* For load balancers, see the "Target" column in [Port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).
* For Private Service Connect forwarding rules that forward traffic to Google APIs, provide the name of a supported Google API bundle:
* 'vpc-sc' - [ APIs that support VPC Service Controls](https://cloud.google.com/vpc-service-controls/docs/supported-products).
* 'all-apis' - [All supported Google APIs](https://cloud.google.com/vpc/docs/private-service-connect#supported-apis).

For Private Service Connect forwarding rules that forward traffic to managed services, the target must be a service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#target ComputeForwardingRule#target}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleConfig.property.timeouts"></a>

```java
public ComputeForwardingRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts">ComputeForwardingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#timeouts ComputeForwardingRule#timeouts}

---

### ComputeForwardingRuleServiceDirectoryRegistrations <a name="ComputeForwardingRuleServiceDirectoryRegistrations" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_forwarding_rule.ComputeForwardingRuleServiceDirectoryRegistrations;

ComputeForwardingRuleServiceDirectoryRegistrations.builder()
//  .namespace(java.lang.String)
//  .service(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Service Directory namespace to register the forwarding rule under. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations.property.service">service</a></code> | <code>java.lang.String</code> | Service Directory service to register the forwarding rule under. |

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Service Directory namespace to register the forwarding rule under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#namespace ComputeForwardingRule#namespace}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Service Directory service to register the forwarding rule under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#service ComputeForwardingRule#service}

---

### ComputeForwardingRuleTimeouts <a name="ComputeForwardingRuleTimeouts" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_forwarding_rule.ComputeForwardingRuleTimeouts;

ComputeForwardingRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#create ComputeForwardingRule#create}. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#delete ComputeForwardingRule#delete}. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#update ComputeForwardingRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#create ComputeForwardingRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#delete ComputeForwardingRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/compute_forwarding_rule#update ComputeForwardingRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference <a name="ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_forwarding_rule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference;

new ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetService` <a name="resetService" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resetService"></a>

```java
public void resetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations">ComputeForwardingRuleServiceDirectoryRegistrations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.internalValue"></a>

```java
public ComputeForwardingRuleServiceDirectoryRegistrations getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleServiceDirectoryRegistrations">ComputeForwardingRuleServiceDirectoryRegistrations</a>

---


### ComputeForwardingRuleTimeoutsOutputReference <a name="ComputeForwardingRuleTimeoutsOutputReference" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_forwarding_rule.ComputeForwardingRuleTimeoutsOutputReference;

new ComputeForwardingRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts">ComputeForwardingRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeForwardingRule.ComputeForwardingRuleTimeouts">ComputeForwardingRuleTimeouts</a>

---



