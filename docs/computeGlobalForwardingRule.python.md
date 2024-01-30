# `computeGlobalForwardingRule` Submodule <a name="`computeGlobalForwardingRule` Submodule" id="@cdktf/provider-google.computeGlobalForwardingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeGlobalForwardingRule <a name="ComputeGlobalForwardingRule" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule google_compute_global_forwarding_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_global_forwarding_rule

computeGlobalForwardingRule.ComputeGlobalForwardingRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  target: str,
  description: str = None,
  id: str = None,
  ip_address: str = None,
  ip_protocol: str = None,
  ip_version: str = None,
  labels: typing.Mapping[str] = None,
  load_balancing_scheme: str = None,
  metadata_filters: typing.Union[IResolvable, typing.List[ComputeGlobalForwardingRuleMetadataFilters]] = None,
  network: str = None,
  no_automate_dns_zone: typing.Union[bool, IResolvable] = None,
  port_range: str = None,
  project: str = None,
  service_directory_registrations: ComputeGlobalForwardingRuleServiceDirectoryRegistrations = None,
  source_ip_ranges: typing.List[str] = None,
  subnetwork: str = None,
  timeouts: ComputeGlobalForwardingRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.target">target</a></code> | <code>str</code> | The URL of the target resource to receive the matched traffic. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#id ComputeGlobalForwardingRule#id}. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.ipAddress">ip_address</a></code> | <code>str</code> | IP address for which this forwarding rule accepts traffic. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.ipProtocol">ip_protocol</a></code> | <code>str</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.ipVersion">ip_version</a></code> | <code>str</code> | The IP Version that will be used by this global forwarding rule. Possible values: ["IPV4", "IPV6"]. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this forwarding rule.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | Specifies the forwarding rule type. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.metadataFilters">metadata_filters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters">ComputeGlobalForwardingRuleMetadataFilters</a>]]</code> | metadata_filters block. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.network">network</a></code> | <code>str</code> | This field is not used for external load balancing. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.noAutomateDnsZone">no_automate_dns_zone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This is used in PSC consumer ForwardingRule to control whether it should try to auto-generate a DNS zone or not. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.portRange">port_range</a></code> | <code>str</code> | The 'portRange' field has the following limitations: * It requires that the forwarding rule 'IPProtocol' be TCP, UDP, or SCTP, and * It's applicable only to the following products: external passthrough Network Load Balancers, internal and external proxy Network Load Balancers, internal and external Application Load Balancers, external protocol forwarding, and Classic VPN. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#project ComputeGlobalForwardingRule#project}. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.serviceDirectoryRegistrations">service_directory_registrations</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrations">ComputeGlobalForwardingRuleServiceDirectoryRegistrations</a></code> | service_directory_registrations block. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.sourceIpRanges">source_ip_ranges</a></code> | <code>typing.List[str]</code> | If not empty, this Forwarding Rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>str</code> | This field identifies the subnetwork that the load balanced IP should belong to for this Forwarding Rule, used in internal load balancing and network load balancing with IPv6. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts">ComputeGlobalForwardingRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.name"></a>

- *Type:* str

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#name ComputeGlobalForwardingRule#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.target"></a>

- *Type:* str

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#target ComputeGlobalForwardingRule#target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#description ComputeGlobalForwardingRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#id ComputeGlobalForwardingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.ipAddress"></a>

- *Type:* str

IP address for which this forwarding rule accepts traffic.

When a client
sends traffic to this IP address, the forwarding rule directs the traffic
to the referenced 'target'.

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

The forwarding rule's 'target',
and in most cases, also the 'loadBalancingScheme', determine the
type of IP address that you can use. For detailed information, see
[IP address
specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).

When reading an 'IPAddress', the API always returns the IP
address number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#ip_address ComputeGlobalForwardingRule#ip_address}

---

##### `ip_protocol`<sup>Optional</sup> <a name="ip_protocol" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.ipProtocol"></a>

- *Type:* str

The IP protocol to which this rule applies.

For protocol forwarding, valid
options are 'TCP', 'UDP', 'ESP',
'AH', 'SCTP', 'ICMP' and
'L3_DEFAULT'.

The valid IP protocols are different for different load balancing products
as described in [Load balancing
features](https://cloud.google.com/load-balancing/docs/features#protocols_from_the_load_balancer_to_the_backends). Possible values: ["TCP", "UDP", "ESP", "AH", "SCTP", "ICMP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#ip_protocol ComputeGlobalForwardingRule#ip_protocol}

---

##### `ip_version`<sup>Optional</sup> <a name="ip_version" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.ipVersion"></a>

- *Type:* str

The IP Version that will be used by this global forwarding rule. Possible values: ["IPV4", "IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#ip_version ComputeGlobalForwardingRule#ip_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels to apply to this forwarding rule.  A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#labels ComputeGlobalForwardingRule#labels}

---

##### `load_balancing_scheme`<sup>Optional</sup> <a name="load_balancing_scheme" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.loadBalancingScheme"></a>

- *Type:* str

Specifies the forwarding rule type.

For more information about forwarding rules, refer to
[Forwarding rule concepts](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts). Default value: "EXTERNAL" Possible values: ["EXTERNAL", "EXTERNAL_MANAGED", "INTERNAL_MANAGED", "INTERNAL_SELF_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#load_balancing_scheme ComputeGlobalForwardingRule#load_balancing_scheme}

---

##### `metadata_filters`<sup>Optional</sup> <a name="metadata_filters" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.metadataFilters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters">ComputeGlobalForwardingRuleMetadataFilters</a>]]

metadata_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#metadata_filters ComputeGlobalForwardingRule#metadata_filters}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.network"></a>

- *Type:* str

This field is not used for external load balancing.

For Internal TCP/UDP Load Balancing, this field identifies the network that
the load balanced IP should belong to for this Forwarding Rule.
If the subnetwork is specified, the network of the subnetwork will be used.
If neither subnetwork nor this field is specified, the default network will
be used.

For Private Service Connect forwarding rules that forward traffic to Google
APIs, a network must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#network ComputeGlobalForwardingRule#network}

---

##### `no_automate_dns_zone`<sup>Optional</sup> <a name="no_automate_dns_zone" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.noAutomateDnsZone"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This is used in PSC consumer ForwardingRule to control whether it should try to auto-generate a DNS zone or not.

Non-PSC forwarding rules do not use this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#no_automate_dns_zone ComputeGlobalForwardingRule#no_automate_dns_zone}

---

##### `port_range`<sup>Optional</sup> <a name="port_range" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.portRange"></a>

- *Type:* str

The 'portRange' field has the following limitations: * It requires that the forwarding rule 'IPProtocol' be TCP, UDP, or SCTP, and * It's applicable only to the following products: external passthrough Network Load Balancers, internal and external proxy Network Load Balancers, internal and external Application Load Balancers, external protocol forwarding, and Classic VPN.

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

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#project ComputeGlobalForwardingRule#project}.

---

##### `service_directory_registrations`<sup>Optional</sup> <a name="service_directory_registrations" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.serviceDirectoryRegistrations"></a>

- *Type:* <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrations">ComputeGlobalForwardingRuleServiceDirectoryRegistrations</a>

service_directory_registrations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#service_directory_registrations ComputeGlobalForwardingRule#service_directory_registrations}

---

##### `source_ip_ranges`<sup>Optional</sup> <a name="source_ip_ranges" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.sourceIpRanges"></a>

- *Type:* typing.List[str]

If not empty, this Forwarding Rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here.

Note that a Forwarding Rule can only have up to 64 source IP ranges, and this field can only be used with a regional Forwarding Rule whose scheme is EXTERNAL. Each sourceIpRange entry should be either an IP address (for example, 1.2.3.4) or a CIDR range (for example, 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#source_ip_ranges ComputeGlobalForwardingRule#source_ip_ranges}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.subnetwork"></a>

- *Type:* str

This field identifies the subnetwork that the load balanced IP should belong to for this Forwarding Rule, used in internal load balancing and network load balancing with IPv6.

If the network specified is in auto subnet mode, this field is optional.
However, a subnetwork must be specified if the network is in custom subnet
mode or when creating external forwarding rule with IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#subnetwork ComputeGlobalForwardingRule#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts">ComputeGlobalForwardingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#timeouts ComputeGlobalForwardingRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.putMetadataFilters">put_metadata_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.putServiceDirectoryRegistrations">put_service_directory_registrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetIpProtocol">reset_ip_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetIpVersion">reset_ip_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetLoadBalancingScheme">reset_load_balancing_scheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetMetadataFilters">reset_metadata_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetNoAutomateDnsZone">reset_no_automate_dns_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetPortRange">reset_port_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetServiceDirectoryRegistrations">reset_service_directory_registrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetSourceIpRanges">reset_source_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_metadata_filters` <a name="put_metadata_filters" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.putMetadataFilters"></a>

```python
def put_metadata_filters(
  value: typing.Union[IResolvable, typing.List[ComputeGlobalForwardingRuleMetadataFilters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.putMetadataFilters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters">ComputeGlobalForwardingRuleMetadataFilters</a>]]

---

##### `put_service_directory_registrations` <a name="put_service_directory_registrations" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.putServiceDirectoryRegistrations"></a>

```python
def put_service_directory_registrations(
  namespace: str = None,
  service_directory_region: str = None
) -> None
```

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.putServiceDirectoryRegistrations.parameter.namespace"></a>

- *Type:* str

Service Directory namespace to register the forwarding rule under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#namespace ComputeGlobalForwardingRule#namespace}

---

###### `service_directory_region`<sup>Optional</sup> <a name="service_directory_region" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.putServiceDirectoryRegistrations.parameter.serviceDirectoryRegion"></a>

- *Type:* str

[Optional] Service Directory region to register this global forwarding rule under.

Default to "us-central1". Only used for PSC for Google APIs. All PSC for
Google APIs Forwarding Rules on the same network should use the same Service
Directory region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#service_directory_region ComputeGlobalForwardingRule#service_directory_region}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#create ComputeGlobalForwardingRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#delete ComputeGlobalForwardingRule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#update ComputeGlobalForwardingRule#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_ip_protocol` <a name="reset_ip_protocol" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetIpProtocol"></a>

```python
def reset_ip_protocol() -> None
```

##### `reset_ip_version` <a name="reset_ip_version" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetIpVersion"></a>

```python
def reset_ip_version() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_load_balancing_scheme` <a name="reset_load_balancing_scheme" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetLoadBalancingScheme"></a>

```python
def reset_load_balancing_scheme() -> None
```

##### `reset_metadata_filters` <a name="reset_metadata_filters" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetMetadataFilters"></a>

```python
def reset_metadata_filters() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_no_automate_dns_zone` <a name="reset_no_automate_dns_zone" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetNoAutomateDnsZone"></a>

```python
def reset_no_automate_dns_zone() -> None
```

##### `reset_port_range` <a name="reset_port_range" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetPortRange"></a>

```python
def reset_port_range() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_service_directory_registrations` <a name="reset_service_directory_registrations" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetServiceDirectoryRegistrations"></a>

```python
def reset_service_directory_registrations() -> None
```

##### `reset_source_ip_ranges` <a name="reset_source_ip_ranges" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetSourceIpRanges"></a>

```python
def reset_source_ip_ranges() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeGlobalForwardingRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_global_forwarding_rule

computeGlobalForwardingRule.ComputeGlobalForwardingRule.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_global_forwarding_rule

computeGlobalForwardingRule.ComputeGlobalForwardingRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_global_forwarding_rule

computeGlobalForwardingRule.ComputeGlobalForwardingRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_global_forwarding_rule

computeGlobalForwardingRule.ComputeGlobalForwardingRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeGlobalForwardingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeGlobalForwardingRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeGlobalForwardingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeGlobalForwardingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.baseForwardingRule">base_forwarding_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.labelFingerprint">label_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.metadataFilters">metadata_filters</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList">ComputeGlobalForwardingRuleMetadataFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.pscConnectionId">psc_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.pscConnectionStatus">psc_connection_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.serviceDirectoryRegistrations">service_directory_registrations</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference">ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference">ComputeGlobalForwardingRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.ipProtocolInput">ip_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.ipVersionInput">ip_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.loadBalancingSchemeInput">load_balancing_scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.metadataFiltersInput">metadata_filters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters">ComputeGlobalForwardingRuleMetadataFilters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.noAutomateDnsZoneInput">no_automate_dns_zone_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.portRangeInput">port_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.serviceDirectoryRegistrationsInput">service_directory_registrations_input</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrations">ComputeGlobalForwardingRuleServiceDirectoryRegistrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.sourceIpRangesInput">source_ip_ranges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts">ComputeGlobalForwardingRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.ipVersion">ip_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.noAutomateDnsZone">no_automate_dns_zone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.portRange">port_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.sourceIpRanges">source_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.target">target</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_forwarding_rule`<sup>Required</sup> <a name="base_forwarding_rule" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.baseForwardingRule"></a>

```python
base_forwarding_rule: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `label_fingerprint`<sup>Required</sup> <a name="label_fingerprint" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.labelFingerprint"></a>

```python
label_fingerprint: str
```

- *Type:* str

---

##### `metadata_filters`<sup>Required</sup> <a name="metadata_filters" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.metadataFilters"></a>

```python
metadata_filters: ComputeGlobalForwardingRuleMetadataFiltersList
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList">ComputeGlobalForwardingRuleMetadataFiltersList</a>

---

##### `psc_connection_id`<sup>Required</sup> <a name="psc_connection_id" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.pscConnectionId"></a>

```python
psc_connection_id: str
```

- *Type:* str

---

##### `psc_connection_status`<sup>Required</sup> <a name="psc_connection_status" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.pscConnectionStatus"></a>

```python
psc_connection_status: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `service_directory_registrations`<sup>Required</sup> <a name="service_directory_registrations" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.serviceDirectoryRegistrations"></a>

```python
service_directory_registrations: ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference">ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.timeouts"></a>

```python
timeouts: ComputeGlobalForwardingRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference">ComputeGlobalForwardingRuleTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `ip_protocol_input`<sup>Optional</sup> <a name="ip_protocol_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.ipProtocolInput"></a>

```python
ip_protocol_input: str
```

- *Type:* str

---

##### `ip_version_input`<sup>Optional</sup> <a name="ip_version_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.ipVersionInput"></a>

```python
ip_version_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `load_balancing_scheme_input`<sup>Optional</sup> <a name="load_balancing_scheme_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.loadBalancingSchemeInput"></a>

```python
load_balancing_scheme_input: str
```

- *Type:* str

---

##### `metadata_filters_input`<sup>Optional</sup> <a name="metadata_filters_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.metadataFiltersInput"></a>

```python
metadata_filters_input: typing.Union[IResolvable, typing.List[ComputeGlobalForwardingRuleMetadataFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters">ComputeGlobalForwardingRuleMetadataFilters</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `no_automate_dns_zone_input`<sup>Optional</sup> <a name="no_automate_dns_zone_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.noAutomateDnsZoneInput"></a>

```python
no_automate_dns_zone_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `port_range_input`<sup>Optional</sup> <a name="port_range_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.portRangeInput"></a>

```python
port_range_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_directory_registrations_input`<sup>Optional</sup> <a name="service_directory_registrations_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.serviceDirectoryRegistrationsInput"></a>

```python
service_directory_registrations_input: ComputeGlobalForwardingRuleServiceDirectoryRegistrations
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrations">ComputeGlobalForwardingRuleServiceDirectoryRegistrations</a>

---

##### `source_ip_ranges_input`<sup>Optional</sup> <a name="source_ip_ranges_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.sourceIpRangesInput"></a>

```python
source_ip_ranges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeGlobalForwardingRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts">ComputeGlobalForwardingRuleTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `ip_version`<sup>Required</sup> <a name="ip_version" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.ipVersion"></a>

```python
ip_version: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `load_balancing_scheme`<sup>Required</sup> <a name="load_balancing_scheme" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.loadBalancingScheme"></a>

```python
load_balancing_scheme: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `no_automate_dns_zone`<sup>Required</sup> <a name="no_automate_dns_zone" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.noAutomateDnsZone"></a>

```python
no_automate_dns_zone: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `port_range`<sup>Required</sup> <a name="port_range" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.portRange"></a>

```python
port_range: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `source_ip_ranges`<sup>Required</sup> <a name="source_ip_ranges" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.sourceIpRanges"></a>

```python
source_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.target"></a>

```python
target: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeGlobalForwardingRuleConfig <a name="ComputeGlobalForwardingRuleConfig" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_global_forwarding_rule

computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  target: str,
  description: str = None,
  id: str = None,
  ip_address: str = None,
  ip_protocol: str = None,
  ip_version: str = None,
  labels: typing.Mapping[str] = None,
  load_balancing_scheme: str = None,
  metadata_filters: typing.Union[IResolvable, typing.List[ComputeGlobalForwardingRuleMetadataFilters]] = None,
  network: str = None,
  no_automate_dns_zone: typing.Union[bool, IResolvable] = None,
  port_range: str = None,
  project: str = None,
  service_directory_registrations: ComputeGlobalForwardingRuleServiceDirectoryRegistrations = None,
  source_ip_ranges: typing.List[str] = None,
  subnetwork: str = None,
  timeouts: ComputeGlobalForwardingRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.name">name</a></code> | <code>str</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.target">target</a></code> | <code>str</code> | The URL of the target resource to receive the matched traffic. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#id ComputeGlobalForwardingRule#id}. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.ipAddress">ip_address</a></code> | <code>str</code> | IP address for which this forwarding rule accepts traffic. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.ipVersion">ip_version</a></code> | <code>str</code> | The IP Version that will be used by this global forwarding rule. Possible values: ["IPV4", "IPV6"]. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this forwarding rule.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | Specifies the forwarding rule type. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.metadataFilters">metadata_filters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters">ComputeGlobalForwardingRuleMetadataFilters</a>]]</code> | metadata_filters block. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.network">network</a></code> | <code>str</code> | This field is not used for external load balancing. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.noAutomateDnsZone">no_automate_dns_zone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This is used in PSC consumer ForwardingRule to control whether it should try to auto-generate a DNS zone or not. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.portRange">port_range</a></code> | <code>str</code> | The 'portRange' field has the following limitations: * It requires that the forwarding rule 'IPProtocol' be TCP, UDP, or SCTP, and * It's applicable only to the following products: external passthrough Network Load Balancers, internal and external proxy Network Load Balancers, internal and external Application Load Balancers, external protocol forwarding, and Classic VPN. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#project ComputeGlobalForwardingRule#project}. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.serviceDirectoryRegistrations">service_directory_registrations</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrations">ComputeGlobalForwardingRuleServiceDirectoryRegistrations</a></code> | service_directory_registrations block. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.sourceIpRanges">source_ip_ranges</a></code> | <code>typing.List[str]</code> | If not empty, this Forwarding Rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.subnetwork">subnetwork</a></code> | <code>str</code> | This field identifies the subnetwork that the load balanced IP should belong to for this Forwarding Rule, used in internal load balancing and network load balancing with IPv6. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts">ComputeGlobalForwardingRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#name ComputeGlobalForwardingRule#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.target"></a>

```python
target: str
```

- *Type:* str

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#target ComputeGlobalForwardingRule#target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#description ComputeGlobalForwardingRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#id ComputeGlobalForwardingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

IP address for which this forwarding rule accepts traffic.

When a client
sends traffic to this IP address, the forwarding rule directs the traffic
to the referenced 'target'.

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

The forwarding rule's 'target',
and in most cases, also the 'loadBalancingScheme', determine the
type of IP address that you can use. For detailed information, see
[IP address
specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).

When reading an 'IPAddress', the API always returns the IP
address number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#ip_address ComputeGlobalForwardingRule#ip_address}

---

##### `ip_protocol`<sup>Optional</sup> <a name="ip_protocol" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

The IP protocol to which this rule applies.

For protocol forwarding, valid
options are 'TCP', 'UDP', 'ESP',
'AH', 'SCTP', 'ICMP' and
'L3_DEFAULT'.

The valid IP protocols are different for different load balancing products
as described in [Load balancing
features](https://cloud.google.com/load-balancing/docs/features#protocols_from_the_load_balancer_to_the_backends). Possible values: ["TCP", "UDP", "ESP", "AH", "SCTP", "ICMP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#ip_protocol ComputeGlobalForwardingRule#ip_protocol}

---

##### `ip_version`<sup>Optional</sup> <a name="ip_version" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.ipVersion"></a>

```python
ip_version: str
```

- *Type:* str

The IP Version that will be used by this global forwarding rule. Possible values: ["IPV4", "IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#ip_version ComputeGlobalForwardingRule#ip_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels to apply to this forwarding rule.  A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#labels ComputeGlobalForwardingRule#labels}

---

##### `load_balancing_scheme`<sup>Optional</sup> <a name="load_balancing_scheme" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.loadBalancingScheme"></a>

```python
load_balancing_scheme: str
```

- *Type:* str

Specifies the forwarding rule type.

For more information about forwarding rules, refer to
[Forwarding rule concepts](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts). Default value: "EXTERNAL" Possible values: ["EXTERNAL", "EXTERNAL_MANAGED", "INTERNAL_MANAGED", "INTERNAL_SELF_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#load_balancing_scheme ComputeGlobalForwardingRule#load_balancing_scheme}

---

##### `metadata_filters`<sup>Optional</sup> <a name="metadata_filters" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.metadataFilters"></a>

```python
metadata_filters: typing.Union[IResolvable, typing.List[ComputeGlobalForwardingRuleMetadataFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters">ComputeGlobalForwardingRuleMetadataFilters</a>]]

metadata_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#metadata_filters ComputeGlobalForwardingRule#metadata_filters}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.network"></a>

```python
network: str
```

- *Type:* str

This field is not used for external load balancing.

For Internal TCP/UDP Load Balancing, this field identifies the network that
the load balanced IP should belong to for this Forwarding Rule.
If the subnetwork is specified, the network of the subnetwork will be used.
If neither subnetwork nor this field is specified, the default network will
be used.

For Private Service Connect forwarding rules that forward traffic to Google
APIs, a network must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#network ComputeGlobalForwardingRule#network}

---

##### `no_automate_dns_zone`<sup>Optional</sup> <a name="no_automate_dns_zone" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.noAutomateDnsZone"></a>

```python
no_automate_dns_zone: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This is used in PSC consumer ForwardingRule to control whether it should try to auto-generate a DNS zone or not.

Non-PSC forwarding rules do not use this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#no_automate_dns_zone ComputeGlobalForwardingRule#no_automate_dns_zone}

---

##### `port_range`<sup>Optional</sup> <a name="port_range" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.portRange"></a>

```python
port_range: str
```

- *Type:* str

The 'portRange' field has the following limitations: * It requires that the forwarding rule 'IPProtocol' be TCP, UDP, or SCTP, and * It's applicable only to the following products: external passthrough Network Load Balancers, internal and external proxy Network Load Balancers, internal and external Application Load Balancers, external protocol forwarding, and Classic VPN.

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

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#project ComputeGlobalForwardingRule#project}.

---

##### `service_directory_registrations`<sup>Optional</sup> <a name="service_directory_registrations" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.serviceDirectoryRegistrations"></a>

```python
service_directory_registrations: ComputeGlobalForwardingRuleServiceDirectoryRegistrations
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrations">ComputeGlobalForwardingRuleServiceDirectoryRegistrations</a>

service_directory_registrations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#service_directory_registrations ComputeGlobalForwardingRule#service_directory_registrations}

---

##### `source_ip_ranges`<sup>Optional</sup> <a name="source_ip_ranges" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.sourceIpRanges"></a>

```python
source_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

If not empty, this Forwarding Rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here.

Note that a Forwarding Rule can only have up to 64 source IP ranges, and this field can only be used with a regional Forwarding Rule whose scheme is EXTERNAL. Each sourceIpRange entry should be either an IP address (for example, 1.2.3.4) or a CIDR range (for example, 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#source_ip_ranges ComputeGlobalForwardingRule#source_ip_ranges}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

This field identifies the subnetwork that the load balanced IP should belong to for this Forwarding Rule, used in internal load balancing and network load balancing with IPv6.

If the network specified is in auto subnet mode, this field is optional.
However, a subnetwork must be specified if the network is in custom subnet
mode or when creating external forwarding rule with IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#subnetwork ComputeGlobalForwardingRule#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleConfig.property.timeouts"></a>

```python
timeouts: ComputeGlobalForwardingRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts">ComputeGlobalForwardingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#timeouts ComputeGlobalForwardingRule#timeouts}

---

### ComputeGlobalForwardingRuleMetadataFilters <a name="ComputeGlobalForwardingRuleMetadataFilters" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_global_forwarding_rule

computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters(
  filter_labels: typing.Union[IResolvable, typing.List[ComputeGlobalForwardingRuleMetadataFiltersFilterLabels]],
  filter_match_criteria: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters.property.filterLabels">filter_labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels">ComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a>]]</code> | filter_labels block. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters.property.filterMatchCriteria">filter_match_criteria</a></code> | <code>str</code> | Specifies how individual filterLabel matches within the list of filterLabels contribute towards the overall metadataFilter match. |

---

##### `filter_labels`<sup>Required</sup> <a name="filter_labels" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters.property.filterLabels"></a>

```python
filter_labels: typing.Union[IResolvable, typing.List[ComputeGlobalForwardingRuleMetadataFiltersFilterLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels">ComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a>]]

filter_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#filter_labels ComputeGlobalForwardingRule#filter_labels}

---

##### `filter_match_criteria`<sup>Required</sup> <a name="filter_match_criteria" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters.property.filterMatchCriteria"></a>

```python
filter_match_criteria: str
```

- *Type:* str

Specifies how individual filterLabel matches within the list of filterLabels contribute towards the overall metadataFilter match.

MATCH_ANY - At least one of the filterLabels must have a matching
label in the provided metadata.
MATCH_ALL - All filterLabels must have matching labels in the
provided metadata. Possible values: ["MATCH_ANY", "MATCH_ALL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#filter_match_criteria ComputeGlobalForwardingRule#filter_match_criteria}

---

### ComputeGlobalForwardingRuleMetadataFiltersFilterLabels <a name="ComputeGlobalForwardingRuleMetadataFiltersFilterLabels" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_global_forwarding_rule

computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels.property.name">name</a></code> | <code>str</code> | Name of the metadata label. The length must be between 1 and 1024 characters, inclusive. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels.property.value">value</a></code> | <code>str</code> | The value that the label must match. The value has a maximum length of 1024 characters. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the metadata label. The length must be between 1 and 1024 characters, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#name ComputeGlobalForwardingRule#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels.property.value"></a>

```python
value: str
```

- *Type:* str

The value that the label must match. The value has a maximum length of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#value ComputeGlobalForwardingRule#value}

---

### ComputeGlobalForwardingRuleServiceDirectoryRegistrations <a name="ComputeGlobalForwardingRuleServiceDirectoryRegistrations" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrations.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_global_forwarding_rule

computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrations(
  namespace: str = None,
  service_directory_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrations.property.namespace">namespace</a></code> | <code>str</code> | Service Directory namespace to register the forwarding rule under. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrations.property.serviceDirectoryRegion">service_directory_region</a></code> | <code>str</code> | [Optional] Service Directory region to register this global forwarding rule under. |

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrations.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Service Directory namespace to register the forwarding rule under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#namespace ComputeGlobalForwardingRule#namespace}

---

##### `service_directory_region`<sup>Optional</sup> <a name="service_directory_region" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrations.property.serviceDirectoryRegion"></a>

```python
service_directory_region: str
```

- *Type:* str

[Optional] Service Directory region to register this global forwarding rule under.

Default to "us-central1". Only used for PSC for Google APIs. All PSC for
Google APIs Forwarding Rules on the same network should use the same Service
Directory region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#service_directory_region ComputeGlobalForwardingRule#service_directory_region}

---

### ComputeGlobalForwardingRuleTimeouts <a name="ComputeGlobalForwardingRuleTimeouts" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_global_forwarding_rule

computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#create ComputeGlobalForwardingRule#create}. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#delete ComputeGlobalForwardingRule#delete}. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#update ComputeGlobalForwardingRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#create ComputeGlobalForwardingRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#delete ComputeGlobalForwardingRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/compute_global_forwarding_rule#update ComputeGlobalForwardingRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList <a name="ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_global_forwarding_rule

computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels">ComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeGlobalForwardingRuleMetadataFiltersFilterLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels">ComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a>]]

---


### ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference <a name="ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_global_forwarding_rule

computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels">ComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeGlobalForwardingRuleMetadataFiltersFilterLabels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels">ComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a>]

---


### ComputeGlobalForwardingRuleMetadataFiltersList <a name="ComputeGlobalForwardingRuleMetadataFiltersList" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_global_forwarding_rule

computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeGlobalForwardingRuleMetadataFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters">ComputeGlobalForwardingRuleMetadataFilters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeGlobalForwardingRuleMetadataFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters">ComputeGlobalForwardingRuleMetadataFilters</a>]]

---


### ComputeGlobalForwardingRuleMetadataFiltersOutputReference <a name="ComputeGlobalForwardingRuleMetadataFiltersOutputReference" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_global_forwarding_rule

computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.putFilterLabels">put_filter_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter_labels` <a name="put_filter_labels" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.putFilterLabels"></a>

```python
def put_filter_labels(
  value: typing.Union[IResolvable, typing.List[ComputeGlobalForwardingRuleMetadataFiltersFilterLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.putFilterLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels">ComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterLabels">filter_labels</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList">ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterLabelsInput">filter_labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels">ComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterMatchCriteriaInput">filter_match_criteria_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterMatchCriteria">filter_match_criteria</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters">ComputeGlobalForwardingRuleMetadataFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_labels`<sup>Required</sup> <a name="filter_labels" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterLabels"></a>

```python
filter_labels: ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList">ComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList</a>

---

##### `filter_labels_input`<sup>Optional</sup> <a name="filter_labels_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterLabelsInput"></a>

```python
filter_labels_input: typing.Union[IResolvable, typing.List[ComputeGlobalForwardingRuleMetadataFiltersFilterLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersFilterLabels">ComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a>]]

---

##### `filter_match_criteria_input`<sup>Optional</sup> <a name="filter_match_criteria_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterMatchCriteriaInput"></a>

```python
filter_match_criteria_input: str
```

- *Type:* str

---

##### `filter_match_criteria`<sup>Required</sup> <a name="filter_match_criteria" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterMatchCriteria"></a>

```python
filter_match_criteria: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeGlobalForwardingRuleMetadataFilters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleMetadataFilters">ComputeGlobalForwardingRuleMetadataFilters</a>]

---


### ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference <a name="ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_global_forwarding_rule

computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.resetServiceDirectoryRegion">reset_service_directory_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_service_directory_region` <a name="reset_service_directory_region" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.resetServiceDirectoryRegion"></a>

```python
def reset_service_directory_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.serviceDirectoryRegionInput">service_directory_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.serviceDirectoryRegion">service_directory_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrations">ComputeGlobalForwardingRuleServiceDirectoryRegistrations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `service_directory_region_input`<sup>Optional</sup> <a name="service_directory_region_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.serviceDirectoryRegionInput"></a>

```python
service_directory_region_input: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `service_directory_region`<sup>Required</sup> <a name="service_directory_region" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.serviceDirectoryRegion"></a>

```python
service_directory_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.internalValue"></a>

```python
internal_value: ComputeGlobalForwardingRuleServiceDirectoryRegistrations
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleServiceDirectoryRegistrations">ComputeGlobalForwardingRuleServiceDirectoryRegistrations</a>

---


### ComputeGlobalForwardingRuleTimeoutsOutputReference <a name="ComputeGlobalForwardingRuleTimeoutsOutputReference" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_global_forwarding_rule

computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts">ComputeGlobalForwardingRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeGlobalForwardingRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeGlobalForwardingRule.ComputeGlobalForwardingRuleTimeouts">ComputeGlobalForwardingRuleTimeouts</a>]

---



