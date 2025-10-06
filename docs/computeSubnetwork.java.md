# `computeSubnetwork` Submodule <a name="`computeSubnetwork` Submodule" id="@cdktf/provider-google.computeSubnetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSubnetwork <a name="ComputeSubnetwork" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork google_compute_subnetwork}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_subnetwork.ComputeSubnetwork;

ComputeSubnetwork.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .network(java.lang.String)
//  .description(java.lang.String)
//  .enableFlowLogs(java.lang.Boolean|IResolvable)
//  .externalIpv6Prefix(java.lang.String)
//  .id(java.lang.String)
//  .ipCidrRange(java.lang.String)
//  .ipCollection(java.lang.String)
//  .ipv6AccessType(java.lang.String)
//  .logConfig(ComputeSubnetworkLogConfig)
//  .params(ComputeSubnetworkParams)
//  .privateIpGoogleAccess(java.lang.Boolean|IResolvable)
//  .privateIpv6GoogleAccess(java.lang.String)
//  .project(java.lang.String)
//  .purpose(java.lang.String)
//  .region(java.lang.String)
//  .reservedInternalRange(java.lang.String)
//  .role(java.lang.String)
//  .secondaryIpRange(IResolvable|java.util.List<ComputeSubnetworkSecondaryIpRange>)
//  .sendSecondaryIpRangeIfEmpty(java.lang.Boolean|IResolvable)
//  .stackType(java.lang.String)
//  .timeouts(ComputeSubnetworkTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the resource, provided by the client when initially creating the resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The network this subnet belongs to. Only networks that are in the distributed mode can have subnetworks. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.enableFlowLogs">enableFlowLogs</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to enable flow logging for this subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.externalIpv6Prefix">externalIpv6Prefix</a></code> | <code>java.lang.String</code> | The range of external IPv6 addresses that are owned by this subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#id ComputeSubnetwork#id}. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | The range of internal addresses that are owned by this subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.ipCollection">ipCollection</a></code> | <code>java.lang.String</code> | Resource reference of a PublicDelegatedPrefix. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.ipv6AccessType">ipv6AccessType</a></code> | <code>java.lang.String</code> | The access type of IPv6 address this subnet holds. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.params">params</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParams">ComputeSubnetworkParams</a></code> | params block. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.privateIpGoogleAccess">privateIpGoogleAccess</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | When enabled, VMs in this subnetwork without external IP addresses can access Google APIs and services by using Private Google Access. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.privateIpv6GoogleAccess">privateIpv6GoogleAccess</a></code> | <code>java.lang.String</code> | The private IPv6 google access type for the VMs in this subnet. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#project ComputeSubnetwork#project}. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.purpose">purpose</a></code> | <code>java.lang.String</code> | The purpose of the resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The GCP region for this subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.reservedInternalRange">reservedInternalRange</a></code> | <code>java.lang.String</code> | The ID of the reserved internal range. Must be prefixed with 'networkconnectivity.googleapis.com' E.g. 'networkconnectivity.googleapis.com/projects/{project}/locations/global/internalRanges/{rangeId}'. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | The role of subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.secondaryIpRange">secondaryIpRange</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>></code> | secondary_ip_range block. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.sendSecondaryIpRangeIfEmpty">sendSecondaryIpRangeIfEmpty</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Controls the removal behavior of secondary_ip_range. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.stackType">stackType</a></code> | <code>java.lang.String</code> | The stack type for this subnet to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the resource, provided by the client when initially creating the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#name ComputeSubnetwork#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The network this subnet belongs to. Only networks that are in the distributed mode can have subnetworks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#network ComputeSubnetwork#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Provide this property when
you create the resource. This field can be set only at resource
creation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#description ComputeSubnetwork#description}

---

##### `enableFlowLogs`<sup>Optional</sup> <a name="enableFlowLogs" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.enableFlowLogs"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to enable flow logging for this subnetwork.

If this field is not explicitly set,
it will not appear in get listings. If not set the default behavior is determined by the
org policy, if there is no org policy specified, then it will default to disabled.
This field isn't supported if the subnet purpose field is set to REGIONAL_MANAGED_PROXY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#enable_flow_logs ComputeSubnetwork#enable_flow_logs}

---

##### `externalIpv6Prefix`<sup>Optional</sup> <a name="externalIpv6Prefix" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.externalIpv6Prefix"></a>

- *Type:* java.lang.String

The range of external IPv6 addresses that are owned by this subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#external_ipv6_prefix ComputeSubnetwork#external_ipv6_prefix}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#id ComputeSubnetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipCidrRange`<sup>Optional</sup> <a name="ipCidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.ipCidrRange"></a>

- *Type:* java.lang.String

The range of internal addresses that are owned by this subnetwork.

Provide this property when you create the subnetwork. For example,
10.0.0.0/8 or 192.168.0.0/16. Ranges must be unique and
non-overlapping within a network. Only IPv4 is supported.
Field is optional when 'reserved_internal_range' is defined, otherwise required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#ip_cidr_range ComputeSubnetwork#ip_cidr_range}

---

##### `ipCollection`<sup>Optional</sup> <a name="ipCollection" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.ipCollection"></a>

- *Type:* java.lang.String

Resource reference of a PublicDelegatedPrefix.

The PDP must be a sub-PDP
in EXTERNAL_IPV6_SUBNETWORK_CREATION mode.
Use one of the following formats to specify a sub-PDP when creating an
IPv6 NetLB forwarding rule using BYOIP:
Full resource URL, as in:

* 'https://www.googleapis.com/compute/v1/projects/{{projectId}}/regions/{{region}}/publicDelegatedPrefixes/{{sub-pdp-name}}'
  Partial URL, as in:
* 'projects/{{projectId}}/regions/region/publicDelegatedPrefixes/{{sub-pdp-name}}'
* 'regions/{{region}}/publicDelegatedPrefixes/{{sub-pdp-name}}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#ip_collection ComputeSubnetwork#ip_collection}

---

##### `ipv6AccessType`<sup>Optional</sup> <a name="ipv6AccessType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.ipv6AccessType"></a>

- *Type:* java.lang.String

The access type of IPv6 address this subnet holds.

It's immutable and can only be specified during creation
or the first time the subnet is updated into IPV4_IPV6 dual stack. If the ipv6_type is EXTERNAL then this subnet
cannot enable direct path. Possible values: ["EXTERNAL", "INTERNAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#ipv6_access_type ComputeSubnetwork#ipv6_access_type}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#log_config ComputeSubnetwork#log_config}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.params"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParams">ComputeSubnetworkParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#params ComputeSubnetwork#params}

---

##### `privateIpGoogleAccess`<sup>Optional</sup> <a name="privateIpGoogleAccess" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.privateIpGoogleAccess"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

When enabled, VMs in this subnetwork without external IP addresses can access Google APIs and services by using Private Google Access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#private_ip_google_access ComputeSubnetwork#private_ip_google_access}

---

##### `privateIpv6GoogleAccess`<sup>Optional</sup> <a name="privateIpv6GoogleAccess" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.privateIpv6GoogleAccess"></a>

- *Type:* java.lang.String

The private IPv6 google access type for the VMs in this subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#private_ipv6_google_access ComputeSubnetwork#private_ipv6_google_access}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#project ComputeSubnetwork#project}.

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.purpose"></a>

- *Type:* java.lang.String

The purpose of the resource.

This field can be either 'PRIVATE', 'REGIONAL_MANAGED_PROXY', 'GLOBAL_MANAGED_PROXY', 'PRIVATE_SERVICE_CONNECT', 'PEER_MIGRATION' or 'PRIVATE_NAT'([Beta](https://terraform.io/docs/providers/google/guides/provider_versions.html)).
A subnet with purpose set to 'REGIONAL_MANAGED_PROXY' is a user-created subnetwork that is reserved for regional Envoy-based load balancers.
A subnetwork in a given region with purpose set to 'GLOBAL_MANAGED_PROXY' is a proxy-only subnet and is shared between all the cross-regional Envoy-based load balancers.
A subnetwork with purpose set to 'PRIVATE_SERVICE_CONNECT' reserves the subnet for hosting a Private Service Connect published service.
A subnetwork with purpose set to 'PEER_MIGRATION' is a user created subnetwork that is reserved for migrating resources from one peered network to another.
A subnetwork with purpose set to 'PRIVATE_NAT' is used as source range for Private NAT gateways.
Note that 'REGIONAL_MANAGED_PROXY' is the preferred setting for all regional Envoy load balancers.
If unspecified, the purpose defaults to 'PRIVATE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#purpose ComputeSubnetwork#purpose}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The GCP region for this subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#region ComputeSubnetwork#region}

---

##### `reservedInternalRange`<sup>Optional</sup> <a name="reservedInternalRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.reservedInternalRange"></a>

- *Type:* java.lang.String

The ID of the reserved internal range. Must be prefixed with 'networkconnectivity.googleapis.com' E.g. 'networkconnectivity.googleapis.com/projects/{project}/locations/global/internalRanges/{rangeId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#reserved_internal_range ComputeSubnetwork#reserved_internal_range}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.role"></a>

- *Type:* java.lang.String

The role of subnetwork.

Currently, this field is only used when 'purpose' is 'REGIONAL_MANAGED_PROXY'.
The value can be set to 'ACTIVE' or 'BACKUP'.
An 'ACTIVE' subnetwork is one that is currently being used for Envoy-based load balancers in a region.
A 'BACKUP' subnetwork is one that is ready to be promoted to 'ACTIVE' or is currently draining. Possible values: ["ACTIVE", "BACKUP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#role ComputeSubnetwork#role}

---

##### `secondaryIpRange`<sup>Optional</sup> <a name="secondaryIpRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.secondaryIpRange"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>>

secondary_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#secondary_ip_range ComputeSubnetwork#secondary_ip_range}

---

##### `sendSecondaryIpRangeIfEmpty`<sup>Optional</sup> <a name="sendSecondaryIpRangeIfEmpty" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.sendSecondaryIpRangeIfEmpty"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Controls the removal behavior of secondary_ip_range.

When false, removing secondary_ip_range from config will not produce a diff as
the provider will default to the API's value.
When true, the provider will treat removing secondary_ip_range as sending an
empty list of secondary IP ranges to the API.
Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#send_secondary_ip_range_if_empty ComputeSubnetwork#send_secondary_ip_range_if_empty}

---

##### `stackType`<sup>Optional</sup> <a name="stackType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.stackType"></a>

- *Type:* java.lang.String

The stack type for this subnet to identify whether the IPv6 feature is enabled or not.

If not specified IPV4_ONLY will be used. Possible values: ["IPV4_ONLY", "IPV4_IPV6", "IPV6_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#stack_type ComputeSubnetwork#stack_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#timeouts ComputeSubnetwork#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putParams">putParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putSecondaryIpRange">putSecondaryIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetEnableFlowLogs">resetEnableFlowLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetExternalIpv6Prefix">resetExternalIpv6Prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetIpCidrRange">resetIpCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetIpCollection">resetIpCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetIpv6AccessType">resetIpv6AccessType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetParams">resetParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPrivateIpGoogleAccess">resetPrivateIpGoogleAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPrivateIpv6GoogleAccess">resetPrivateIpv6GoogleAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPurpose">resetPurpose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetReservedInternalRange">resetReservedInternalRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetSecondaryIpRange">resetSecondaryIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetSendSecondaryIpRangeIfEmpty">resetSendSecondaryIpRangeIfEmpty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetStackType">resetStackType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putLogConfig"></a>

```java
public void putLogConfig(ComputeSubnetworkLogConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a>

---

##### `putParams` <a name="putParams" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putParams"></a>

```java
public void putParams(ComputeSubnetworkParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParams">ComputeSubnetworkParams</a>

---

##### `putSecondaryIpRange` <a name="putSecondaryIpRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putSecondaryIpRange"></a>

```java
public void putSecondaryIpRange(IResolvable|java.util.List<ComputeSubnetworkSecondaryIpRange> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putSecondaryIpRange.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putTimeouts"></a>

```java
public void putTimeouts(ComputeSubnetworkTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnableFlowLogs` <a name="resetEnableFlowLogs" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetEnableFlowLogs"></a>

```java
public void resetEnableFlowLogs()
```

##### `resetExternalIpv6Prefix` <a name="resetExternalIpv6Prefix" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetExternalIpv6Prefix"></a>

```java
public void resetExternalIpv6Prefix()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetId"></a>

```java
public void resetId()
```

##### `resetIpCidrRange` <a name="resetIpCidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetIpCidrRange"></a>

```java
public void resetIpCidrRange()
```

##### `resetIpCollection` <a name="resetIpCollection" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetIpCollection"></a>

```java
public void resetIpCollection()
```

##### `resetIpv6AccessType` <a name="resetIpv6AccessType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetIpv6AccessType"></a>

```java
public void resetIpv6AccessType()
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetLogConfig"></a>

```java
public void resetLogConfig()
```

##### `resetParams` <a name="resetParams" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetParams"></a>

```java
public void resetParams()
```

##### `resetPrivateIpGoogleAccess` <a name="resetPrivateIpGoogleAccess" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPrivateIpGoogleAccess"></a>

```java
public void resetPrivateIpGoogleAccess()
```

##### `resetPrivateIpv6GoogleAccess` <a name="resetPrivateIpv6GoogleAccess" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPrivateIpv6GoogleAccess"></a>

```java
public void resetPrivateIpv6GoogleAccess()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetProject"></a>

```java
public void resetProject()
```

##### `resetPurpose` <a name="resetPurpose" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetPurpose"></a>

```java
public void resetPurpose()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetReservedInternalRange` <a name="resetReservedInternalRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetReservedInternalRange"></a>

```java
public void resetReservedInternalRange()
```

##### `resetRole` <a name="resetRole" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetRole"></a>

```java
public void resetRole()
```

##### `resetSecondaryIpRange` <a name="resetSecondaryIpRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetSecondaryIpRange"></a>

```java
public void resetSecondaryIpRange()
```

##### `resetSendSecondaryIpRangeIfEmpty` <a name="resetSendSecondaryIpRangeIfEmpty" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetSendSecondaryIpRangeIfEmpty"></a>

```java
public void resetSendSecondaryIpRangeIfEmpty()
```

##### `resetStackType` <a name="resetStackType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetStackType"></a>

```java
public void resetStackType()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeSubnetwork resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_subnetwork.ComputeSubnetwork;

ComputeSubnetwork.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_subnetwork.ComputeSubnetwork;

ComputeSubnetwork.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_subnetwork.ComputeSubnetwork;

ComputeSubnetwork.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_subnetwork.ComputeSubnetwork;

ComputeSubnetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeSubnetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComputeSubnetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeSubnetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeSubnetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComputeSubnetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.gatewayAddress">gatewayAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.internalIpv6Prefix">internalIpv6Prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6CidrRange">ipv6CidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6GceEndpoint">ipv6GceEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference">ComputeSubnetworkLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.params">params</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference">ComputeSubnetworkParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.secondaryIpRange">secondaryIpRange</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList">ComputeSubnetworkSecondaryIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.subnetworkId">subnetworkId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference">ComputeSubnetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.enableFlowLogsInput">enableFlowLogsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.externalIpv6PrefixInput">externalIpv6PrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCollectionInput">ipCollectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6AccessTypeInput">ipv6AccessTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.paramsInput">paramsInput</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParams">ComputeSubnetworkParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpGoogleAccessInput">privateIpGoogleAccessInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpv6GoogleAccessInput">privateIpv6GoogleAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.purposeInput">purposeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.reservedInternalRangeInput">reservedInternalRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.secondaryIpRangeInput">secondaryIpRangeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.sendSecondaryIpRangeIfEmptyInput">sendSecondaryIpRangeIfEmptyInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.stackTypeInput">stackTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.enableFlowLogs">enableFlowLogs</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.externalIpv6Prefix">externalIpv6Prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCollection">ipCollection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6AccessType">ipv6AccessType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpGoogleAccess">privateIpGoogleAccess</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpv6GoogleAccess">privateIpv6GoogleAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.purpose">purpose</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.reservedInternalRange">reservedInternalRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.sendSecondaryIpRangeIfEmpty">sendSecondaryIpRangeIfEmpty</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.stackType">stackType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `gatewayAddress`<sup>Required</sup> <a name="gatewayAddress" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.gatewayAddress"></a>

```java
public java.lang.String getGatewayAddress();
```

- *Type:* java.lang.String

---

##### `internalIpv6Prefix`<sup>Required</sup> <a name="internalIpv6Prefix" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.internalIpv6Prefix"></a>

```java
public java.lang.String getInternalIpv6Prefix();
```

- *Type:* java.lang.String

---

##### `ipv6CidrRange`<sup>Required</sup> <a name="ipv6CidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6CidrRange"></a>

```java
public java.lang.String getIpv6CidrRange();
```

- *Type:* java.lang.String

---

##### `ipv6GceEndpoint`<sup>Required</sup> <a name="ipv6GceEndpoint" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6GceEndpoint"></a>

```java
public java.lang.String getIpv6GceEndpoint();
```

- *Type:* java.lang.String

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.logConfig"></a>

```java
public ComputeSubnetworkLogConfigOutputReference getLogConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference">ComputeSubnetworkLogConfigOutputReference</a>

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.params"></a>

```java
public ComputeSubnetworkParamsOutputReference getParams();
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference">ComputeSubnetworkParamsOutputReference</a>

---

##### `secondaryIpRange`<sup>Required</sup> <a name="secondaryIpRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.secondaryIpRange"></a>

```java
public ComputeSubnetworkSecondaryIpRangeList getSecondaryIpRange();
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList">ComputeSubnetworkSecondaryIpRangeList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subnetworkId`<sup>Required</sup> <a name="subnetworkId" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.subnetworkId"></a>

```java
public java.lang.Number getSubnetworkId();
```

- *Type:* java.lang.Number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.timeouts"></a>

```java
public ComputeSubnetworkTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference">ComputeSubnetworkTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enableFlowLogsInput`<sup>Optional</sup> <a name="enableFlowLogsInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.enableFlowLogsInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableFlowLogsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `externalIpv6PrefixInput`<sup>Optional</sup> <a name="externalIpv6PrefixInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.externalIpv6PrefixInput"></a>

```java
public java.lang.String getExternalIpv6PrefixInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCidrRangeInput"></a>

```java
public java.lang.String getIpCidrRangeInput();
```

- *Type:* java.lang.String

---

##### `ipCollectionInput`<sup>Optional</sup> <a name="ipCollectionInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCollectionInput"></a>

```java
public java.lang.String getIpCollectionInput();
```

- *Type:* java.lang.String

---

##### `ipv6AccessTypeInput`<sup>Optional</sup> <a name="ipv6AccessTypeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6AccessTypeInput"></a>

```java
public java.lang.String getIpv6AccessTypeInput();
```

- *Type:* java.lang.String

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.logConfigInput"></a>

```java
public ComputeSubnetworkLogConfig getLogConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.paramsInput"></a>

```java
public ComputeSubnetworkParams getParamsInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParams">ComputeSubnetworkParams</a>

---

##### `privateIpGoogleAccessInput`<sup>Optional</sup> <a name="privateIpGoogleAccessInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpGoogleAccessInput"></a>

```java
public java.lang.Boolean|IResolvable getPrivateIpGoogleAccessInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `privateIpv6GoogleAccessInput`<sup>Optional</sup> <a name="privateIpv6GoogleAccessInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpv6GoogleAccessInput"></a>

```java
public java.lang.String getPrivateIpv6GoogleAccessInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `purposeInput`<sup>Optional</sup> <a name="purposeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.purposeInput"></a>

```java
public java.lang.String getPurposeInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `reservedInternalRangeInput`<sup>Optional</sup> <a name="reservedInternalRangeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.reservedInternalRangeInput"></a>

```java
public java.lang.String getReservedInternalRangeInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `secondaryIpRangeInput`<sup>Optional</sup> <a name="secondaryIpRangeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.secondaryIpRangeInput"></a>

```java
public IResolvable|java.util.List<ComputeSubnetworkSecondaryIpRange> getSecondaryIpRangeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>>

---

##### `sendSecondaryIpRangeIfEmptyInput`<sup>Optional</sup> <a name="sendSecondaryIpRangeIfEmptyInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.sendSecondaryIpRangeIfEmptyInput"></a>

```java
public java.lang.Boolean|IResolvable getSendSecondaryIpRangeIfEmptyInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `stackTypeInput`<sup>Optional</sup> <a name="stackTypeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.stackTypeInput"></a>

```java
public java.lang.String getStackTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.timeoutsInput"></a>

```java
public IResolvable|ComputeSubnetworkTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enableFlowLogs`<sup>Required</sup> <a name="enableFlowLogs" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.enableFlowLogs"></a>

```java
public java.lang.Boolean|IResolvable getEnableFlowLogs();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `externalIpv6Prefix`<sup>Required</sup> <a name="externalIpv6Prefix" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.externalIpv6Prefix"></a>

```java
public java.lang.String getExternalIpv6Prefix();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

---

##### `ipCollection`<sup>Required</sup> <a name="ipCollection" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipCollection"></a>

```java
public java.lang.String getIpCollection();
```

- *Type:* java.lang.String

---

##### `ipv6AccessType`<sup>Required</sup> <a name="ipv6AccessType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.ipv6AccessType"></a>

```java
public java.lang.String getIpv6AccessType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `privateIpGoogleAccess`<sup>Required</sup> <a name="privateIpGoogleAccess" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpGoogleAccess"></a>

```java
public java.lang.Boolean|IResolvable getPrivateIpGoogleAccess();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `privateIpv6GoogleAccess`<sup>Required</sup> <a name="privateIpv6GoogleAccess" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.privateIpv6GoogleAccess"></a>

```java
public java.lang.String getPrivateIpv6GoogleAccess();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.purpose"></a>

```java
public java.lang.String getPurpose();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `reservedInternalRange`<sup>Required</sup> <a name="reservedInternalRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.reservedInternalRange"></a>

```java
public java.lang.String getReservedInternalRange();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `sendSecondaryIpRangeIfEmpty`<sup>Required</sup> <a name="sendSecondaryIpRangeIfEmpty" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.sendSecondaryIpRangeIfEmpty"></a>

```java
public java.lang.Boolean|IResolvable getSendSecondaryIpRangeIfEmpty();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `stackType`<sup>Required</sup> <a name="stackType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.stackType"></a>

```java
public java.lang.String getStackType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetwork.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSubnetworkConfig <a name="ComputeSubnetworkConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_subnetwork.ComputeSubnetworkConfig;

ComputeSubnetworkConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .network(java.lang.String)
//  .description(java.lang.String)
//  .enableFlowLogs(java.lang.Boolean|IResolvable)
//  .externalIpv6Prefix(java.lang.String)
//  .id(java.lang.String)
//  .ipCidrRange(java.lang.String)
//  .ipCollection(java.lang.String)
//  .ipv6AccessType(java.lang.String)
//  .logConfig(ComputeSubnetworkLogConfig)
//  .params(ComputeSubnetworkParams)
//  .privateIpGoogleAccess(java.lang.Boolean|IResolvable)
//  .privateIpv6GoogleAccess(java.lang.String)
//  .project(java.lang.String)
//  .purpose(java.lang.String)
//  .region(java.lang.String)
//  .reservedInternalRange(java.lang.String)
//  .role(java.lang.String)
//  .secondaryIpRange(IResolvable|java.util.List<ComputeSubnetworkSecondaryIpRange>)
//  .sendSecondaryIpRangeIfEmpty(java.lang.Boolean|IResolvable)
//  .stackType(java.lang.String)
//  .timeouts(ComputeSubnetworkTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the resource, provided by the client when initially creating the resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.network">network</a></code> | <code>java.lang.String</code> | The network this subnet belongs to. Only networks that are in the distributed mode can have subnetworks. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.enableFlowLogs">enableFlowLogs</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to enable flow logging for this subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.externalIpv6Prefix">externalIpv6Prefix</a></code> | <code>java.lang.String</code> | The range of external IPv6 addresses that are owned by this subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#id ComputeSubnetwork#id}. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | The range of internal addresses that are owned by this subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.ipCollection">ipCollection</a></code> | <code>java.lang.String</code> | Resource reference of a PublicDelegatedPrefix. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.ipv6AccessType">ipv6AccessType</a></code> | <code>java.lang.String</code> | The access type of IPv6 address this subnet holds. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.params">params</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParams">ComputeSubnetworkParams</a></code> | params block. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.privateIpGoogleAccess">privateIpGoogleAccess</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | When enabled, VMs in this subnetwork without external IP addresses can access Google APIs and services by using Private Google Access. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.privateIpv6GoogleAccess">privateIpv6GoogleAccess</a></code> | <code>java.lang.String</code> | The private IPv6 google access type for the VMs in this subnet. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#project ComputeSubnetwork#project}. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.purpose">purpose</a></code> | <code>java.lang.String</code> | The purpose of the resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.region">region</a></code> | <code>java.lang.String</code> | The GCP region for this subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.reservedInternalRange">reservedInternalRange</a></code> | <code>java.lang.String</code> | The ID of the reserved internal range. Must be prefixed with 'networkconnectivity.googleapis.com' E.g. 'networkconnectivity.googleapis.com/projects/{project}/locations/global/internalRanges/{rangeId}'. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.role">role</a></code> | <code>java.lang.String</code> | The role of subnetwork. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.secondaryIpRange">secondaryIpRange</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>></code> | secondary_ip_range block. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.sendSecondaryIpRangeIfEmpty">sendSecondaryIpRangeIfEmpty</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Controls the removal behavior of secondary_ip_range. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.stackType">stackType</a></code> | <code>java.lang.String</code> | The stack type for this subnet to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the resource, provided by the client when initially creating the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#name ComputeSubnetwork#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The network this subnet belongs to. Only networks that are in the distributed mode can have subnetworks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#network ComputeSubnetwork#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Provide this property when
you create the resource. This field can be set only at resource
creation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#description ComputeSubnetwork#description}

---

##### `enableFlowLogs`<sup>Optional</sup> <a name="enableFlowLogs" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.enableFlowLogs"></a>

```java
public java.lang.Boolean|IResolvable getEnableFlowLogs();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to enable flow logging for this subnetwork.

If this field is not explicitly set,
it will not appear in get listings. If not set the default behavior is determined by the
org policy, if there is no org policy specified, then it will default to disabled.
This field isn't supported if the subnet purpose field is set to REGIONAL_MANAGED_PROXY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#enable_flow_logs ComputeSubnetwork#enable_flow_logs}

---

##### `externalIpv6Prefix`<sup>Optional</sup> <a name="externalIpv6Prefix" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.externalIpv6Prefix"></a>

```java
public java.lang.String getExternalIpv6Prefix();
```

- *Type:* java.lang.String

The range of external IPv6 addresses that are owned by this subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#external_ipv6_prefix ComputeSubnetwork#external_ipv6_prefix}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#id ComputeSubnetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipCidrRange`<sup>Optional</sup> <a name="ipCidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

The range of internal addresses that are owned by this subnetwork.

Provide this property when you create the subnetwork. For example,
10.0.0.0/8 or 192.168.0.0/16. Ranges must be unique and
non-overlapping within a network. Only IPv4 is supported.
Field is optional when 'reserved_internal_range' is defined, otherwise required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#ip_cidr_range ComputeSubnetwork#ip_cidr_range}

---

##### `ipCollection`<sup>Optional</sup> <a name="ipCollection" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.ipCollection"></a>

```java
public java.lang.String getIpCollection();
```

- *Type:* java.lang.String

Resource reference of a PublicDelegatedPrefix.

The PDP must be a sub-PDP
in EXTERNAL_IPV6_SUBNETWORK_CREATION mode.
Use one of the following formats to specify a sub-PDP when creating an
IPv6 NetLB forwarding rule using BYOIP:
Full resource URL, as in:

* 'https://www.googleapis.com/compute/v1/projects/{{projectId}}/regions/{{region}}/publicDelegatedPrefixes/{{sub-pdp-name}}'
  Partial URL, as in:
* 'projects/{{projectId}}/regions/region/publicDelegatedPrefixes/{{sub-pdp-name}}'
* 'regions/{{region}}/publicDelegatedPrefixes/{{sub-pdp-name}}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#ip_collection ComputeSubnetwork#ip_collection}

---

##### `ipv6AccessType`<sup>Optional</sup> <a name="ipv6AccessType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.ipv6AccessType"></a>

```java
public java.lang.String getIpv6AccessType();
```

- *Type:* java.lang.String

The access type of IPv6 address this subnet holds.

It's immutable and can only be specified during creation
or the first time the subnet is updated into IPV4_IPV6 dual stack. If the ipv6_type is EXTERNAL then this subnet
cannot enable direct path. Possible values: ["EXTERNAL", "INTERNAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#ipv6_access_type ComputeSubnetwork#ipv6_access_type}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.logConfig"></a>

```java
public ComputeSubnetworkLogConfig getLogConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#log_config ComputeSubnetwork#log_config}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.params"></a>

```java
public ComputeSubnetworkParams getParams();
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParams">ComputeSubnetworkParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#params ComputeSubnetwork#params}

---

##### `privateIpGoogleAccess`<sup>Optional</sup> <a name="privateIpGoogleAccess" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.privateIpGoogleAccess"></a>

```java
public java.lang.Boolean|IResolvable getPrivateIpGoogleAccess();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

When enabled, VMs in this subnetwork without external IP addresses can access Google APIs and services by using Private Google Access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#private_ip_google_access ComputeSubnetwork#private_ip_google_access}

---

##### `privateIpv6GoogleAccess`<sup>Optional</sup> <a name="privateIpv6GoogleAccess" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.privateIpv6GoogleAccess"></a>

```java
public java.lang.String getPrivateIpv6GoogleAccess();
```

- *Type:* java.lang.String

The private IPv6 google access type for the VMs in this subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#private_ipv6_google_access ComputeSubnetwork#private_ipv6_google_access}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#project ComputeSubnetwork#project}.

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.purpose"></a>

```java
public java.lang.String getPurpose();
```

- *Type:* java.lang.String

The purpose of the resource.

This field can be either 'PRIVATE', 'REGIONAL_MANAGED_PROXY', 'GLOBAL_MANAGED_PROXY', 'PRIVATE_SERVICE_CONNECT', 'PEER_MIGRATION' or 'PRIVATE_NAT'([Beta](https://terraform.io/docs/providers/google/guides/provider_versions.html)).
A subnet with purpose set to 'REGIONAL_MANAGED_PROXY' is a user-created subnetwork that is reserved for regional Envoy-based load balancers.
A subnetwork in a given region with purpose set to 'GLOBAL_MANAGED_PROXY' is a proxy-only subnet and is shared between all the cross-regional Envoy-based load balancers.
A subnetwork with purpose set to 'PRIVATE_SERVICE_CONNECT' reserves the subnet for hosting a Private Service Connect published service.
A subnetwork with purpose set to 'PEER_MIGRATION' is a user created subnetwork that is reserved for migrating resources from one peered network to another.
A subnetwork with purpose set to 'PRIVATE_NAT' is used as source range for Private NAT gateways.
Note that 'REGIONAL_MANAGED_PROXY' is the preferred setting for all regional Envoy load balancers.
If unspecified, the purpose defaults to 'PRIVATE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#purpose ComputeSubnetwork#purpose}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The GCP region for this subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#region ComputeSubnetwork#region}

---

##### `reservedInternalRange`<sup>Optional</sup> <a name="reservedInternalRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.reservedInternalRange"></a>

```java
public java.lang.String getReservedInternalRange();
```

- *Type:* java.lang.String

The ID of the reserved internal range. Must be prefixed with 'networkconnectivity.googleapis.com' E.g. 'networkconnectivity.googleapis.com/projects/{project}/locations/global/internalRanges/{rangeId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#reserved_internal_range ComputeSubnetwork#reserved_internal_range}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

The role of subnetwork.

Currently, this field is only used when 'purpose' is 'REGIONAL_MANAGED_PROXY'.
The value can be set to 'ACTIVE' or 'BACKUP'.
An 'ACTIVE' subnetwork is one that is currently being used for Envoy-based load balancers in a region.
A 'BACKUP' subnetwork is one that is ready to be promoted to 'ACTIVE' or is currently draining. Possible values: ["ACTIVE", "BACKUP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#role ComputeSubnetwork#role}

---

##### `secondaryIpRange`<sup>Optional</sup> <a name="secondaryIpRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.secondaryIpRange"></a>

```java
public IResolvable|java.util.List<ComputeSubnetworkSecondaryIpRange> getSecondaryIpRange();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>>

secondary_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#secondary_ip_range ComputeSubnetwork#secondary_ip_range}

---

##### `sendSecondaryIpRangeIfEmpty`<sup>Optional</sup> <a name="sendSecondaryIpRangeIfEmpty" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.sendSecondaryIpRangeIfEmpty"></a>

```java
public java.lang.Boolean|IResolvable getSendSecondaryIpRangeIfEmpty();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Controls the removal behavior of secondary_ip_range.

When false, removing secondary_ip_range from config will not produce a diff as
the provider will default to the API's value.
When true, the provider will treat removing secondary_ip_range as sending an
empty list of secondary IP ranges to the API.
Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#send_secondary_ip_range_if_empty ComputeSubnetwork#send_secondary_ip_range_if_empty}

---

##### `stackType`<sup>Optional</sup> <a name="stackType" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.stackType"></a>

```java
public java.lang.String getStackType();
```

- *Type:* java.lang.String

The stack type for this subnet to identify whether the IPv6 feature is enabled or not.

If not specified IPV4_ONLY will be used. Possible values: ["IPV4_ONLY", "IPV4_IPV6", "IPV6_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#stack_type ComputeSubnetwork#stack_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkConfig.property.timeouts"></a>

```java
public ComputeSubnetworkTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#timeouts ComputeSubnetwork#timeouts}

---

### ComputeSubnetworkLogConfig <a name="ComputeSubnetworkLogConfig" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_subnetwork.ComputeSubnetworkLogConfig;

ComputeSubnetworkLogConfig.builder()
//  .aggregationInterval(java.lang.String)
//  .filterExpr(java.lang.String)
//  .flowSampling(java.lang.Number)
//  .metadata(java.lang.String)
//  .metadataFields(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.aggregationInterval">aggregationInterval</a></code> | <code>java.lang.String</code> | Can only be specified if VPC flow logging for this subnetwork is enabled. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.filterExpr">filterExpr</a></code> | <code>java.lang.String</code> | Export filter used to define which VPC flow logs should be logged, as as CEL expression. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.flowSampling">flowSampling</a></code> | <code>java.lang.Number</code> | Can only be specified if VPC flow logging for this subnetwork is enabled. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.metadata">metadata</a></code> | <code>java.lang.String</code> | Can only be specified if VPC flow logging for this subnetwork is enabled. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.metadataFields">metadataFields</a></code> | <code>java.util.List<java.lang.String></code> | List of metadata fields that should be added to reported logs. |

---

##### `aggregationInterval`<sup>Optional</sup> <a name="aggregationInterval" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.aggregationInterval"></a>

```java
public java.lang.String getAggregationInterval();
```

- *Type:* java.lang.String

Can only be specified if VPC flow logging for this subnetwork is enabled.

Toggles the aggregation interval for collecting flow logs. Increasing the
interval time will reduce the amount of generated flow logs for long
lasting connections. Default is an interval of 5 seconds per connection. Default value: "INTERVAL_5_SEC" Possible values: ["INTERVAL_5_SEC", "INTERVAL_30_SEC", "INTERVAL_1_MIN", "INTERVAL_5_MIN", "INTERVAL_10_MIN", "INTERVAL_15_MIN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#aggregation_interval ComputeSubnetwork#aggregation_interval}

---

##### `filterExpr`<sup>Optional</sup> <a name="filterExpr" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.filterExpr"></a>

```java
public java.lang.String getFilterExpr();
```

- *Type:* java.lang.String

Export filter used to define which VPC flow logs should be logged, as as CEL expression.

See
https://cloud.google.com/vpc/docs/flow-logs#filtering for details on how to format this field.
The default value is 'true', which evaluates to include everything.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#filter_expr ComputeSubnetwork#filter_expr}

---

##### `flowSampling`<sup>Optional</sup> <a name="flowSampling" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.flowSampling"></a>

```java
public java.lang.Number getFlowSampling();
```

- *Type:* java.lang.Number

Can only be specified if VPC flow logging for this subnetwork is enabled.

The value of the field must be in [0, 1]. Set the sampling rate of VPC
flow logs within the subnetwork where 1.0 means all collected logs are
reported and 0.0 means no logs are reported. Default is 0.5 which means
half of all collected logs are reported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#flow_sampling ComputeSubnetwork#flow_sampling}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

Can only be specified if VPC flow logging for this subnetwork is enabled.

Configures whether metadata fields should be added to the reported VPC
flow logs. Default value: "INCLUDE_ALL_METADATA" Possible values: ["EXCLUDE_ALL_METADATA", "INCLUDE_ALL_METADATA", "CUSTOM_METADATA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#metadata ComputeSubnetwork#metadata}

---

##### `metadataFields`<sup>Optional</sup> <a name="metadataFields" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig.property.metadataFields"></a>

```java
public java.util.List<java.lang.String> getMetadataFields();
```

- *Type:* java.util.List<java.lang.String>

List of metadata fields that should be added to reported logs.

Can only be specified if VPC flow logs for this subnetwork is enabled and "metadata" is set to CUSTOM_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#metadata_fields ComputeSubnetwork#metadata_fields}

---

### ComputeSubnetworkParams <a name="ComputeSubnetworkParams" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_subnetwork.ComputeSubnetworkParams;

ComputeSubnetworkParams.builder()
//  .resourceManagerTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParams.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource manager tags to be bound to the subnetwork. |

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParams.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource manager tags to be bound to the subnetwork.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456. The field is ignored when empty.
The field is immutable and causes resource replacement when mutated. This field is only
set at create time and modifying this field after creation will trigger recreation.
To apply tags to an existing resource, see the google_tags_tag_binding resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#resource_manager_tags ComputeSubnetwork#resource_manager_tags}

---

### ComputeSubnetworkSecondaryIpRange <a name="ComputeSubnetworkSecondaryIpRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_subnetwork.ComputeSubnetworkSecondaryIpRange;

ComputeSubnetworkSecondaryIpRange.builder()
    .rangeName(java.lang.String)
//  .ipCidrRange(java.lang.String)
//  .reservedInternalRange(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.property.rangeName">rangeName</a></code> | <code>java.lang.String</code> | The name associated with this subnetwork secondary range, used when adding an alias IP range to a VM instance. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | The range of IP addresses belonging to this subnetwork secondary range. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.property.reservedInternalRange">reservedInternalRange</a></code> | <code>java.lang.String</code> | The ID of the reserved internal range. Must be prefixed with 'networkconnectivity.googleapis.com' E.g. 'networkconnectivity.googleapis.com/projects/{project}/locations/global/internalRanges/{rangeId}'. |

---

##### `rangeName`<sup>Required</sup> <a name="rangeName" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.property.rangeName"></a>

```java
public java.lang.String getRangeName();
```

- *Type:* java.lang.String

The name associated with this subnetwork secondary range, used when adding an alias IP range to a VM instance.

The name must
be 1-63 characters long, and comply with RFC1035. The name
must be unique within the subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#range_name ComputeSubnetwork#range_name}

---

##### `ipCidrRange`<sup>Optional</sup> <a name="ipCidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

The range of IP addresses belonging to this subnetwork secondary range.

Provide this property when you create the subnetwork.
Ranges must be unique and non-overlapping with all primary and
secondary IP ranges within a network. Only IPv4 is supported.
Field is optional when 'reserved_internal_range' is defined, otherwise required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#ip_cidr_range ComputeSubnetwork#ip_cidr_range}

---

##### `reservedInternalRange`<sup>Optional</sup> <a name="reservedInternalRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange.property.reservedInternalRange"></a>

```java
public java.lang.String getReservedInternalRange();
```

- *Type:* java.lang.String

The ID of the reserved internal range. Must be prefixed with 'networkconnectivity.googleapis.com' E.g. 'networkconnectivity.googleapis.com/projects/{project}/locations/global/internalRanges/{rangeId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#reserved_internal_range ComputeSubnetwork#reserved_internal_range}

---

### ComputeSubnetworkTimeouts <a name="ComputeSubnetworkTimeouts" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_subnetwork.ComputeSubnetworkTimeouts;

ComputeSubnetworkTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#create ComputeSubnetwork#create}. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#delete ComputeSubnetwork#delete}. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#update ComputeSubnetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#create ComputeSubnetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#delete ComputeSubnetwork#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_subnetwork#update ComputeSubnetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeSubnetworkLogConfigOutputReference <a name="ComputeSubnetworkLogConfigOutputReference" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_subnetwork.ComputeSubnetworkLogConfigOutputReference;

new ComputeSubnetworkLogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetAggregationInterval">resetAggregationInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetFilterExpr">resetFilterExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetFlowSampling">resetFlowSampling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetMetadataFields">resetMetadataFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggregationInterval` <a name="resetAggregationInterval" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetAggregationInterval"></a>

```java
public void resetAggregationInterval()
```

##### `resetFilterExpr` <a name="resetFilterExpr" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetFilterExpr"></a>

```java
public void resetFilterExpr()
```

##### `resetFlowSampling` <a name="resetFlowSampling" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetFlowSampling"></a>

```java
public void resetFlowSampling()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetMetadataFields` <a name="resetMetadataFields" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.resetMetadataFields"></a>

```java
public void resetMetadataFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.aggregationIntervalInput">aggregationIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.filterExprInput">filterExprInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.flowSamplingInput">flowSamplingInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataFieldsInput">metadataFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataInput">metadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.aggregationInterval">aggregationInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.filterExpr">filterExpr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.flowSampling">flowSampling</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataFields">metadataFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregationIntervalInput`<sup>Optional</sup> <a name="aggregationIntervalInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.aggregationIntervalInput"></a>

```java
public java.lang.String getAggregationIntervalInput();
```

- *Type:* java.lang.String

---

##### `filterExprInput`<sup>Optional</sup> <a name="filterExprInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.filterExprInput"></a>

```java
public java.lang.String getFilterExprInput();
```

- *Type:* java.lang.String

---

##### `flowSamplingInput`<sup>Optional</sup> <a name="flowSamplingInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.flowSamplingInput"></a>

```java
public java.lang.Number getFlowSamplingInput();
```

- *Type:* java.lang.Number

---

##### `metadataFieldsInput`<sup>Optional</sup> <a name="metadataFieldsInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataFieldsInput"></a>

```java
public java.util.List<java.lang.String> getMetadataFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataInput"></a>

```java
public java.lang.String getMetadataInput();
```

- *Type:* java.lang.String

---

##### `aggregationInterval`<sup>Required</sup> <a name="aggregationInterval" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.aggregationInterval"></a>

```java
public java.lang.String getAggregationInterval();
```

- *Type:* java.lang.String

---

##### `filterExpr`<sup>Required</sup> <a name="filterExpr" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.filterExpr"></a>

```java
public java.lang.String getFilterExpr();
```

- *Type:* java.lang.String

---

##### `flowSampling`<sup>Required</sup> <a name="flowSampling" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.flowSampling"></a>

```java
public java.lang.Number getFlowSampling();
```

- *Type:* java.lang.Number

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `metadataFields`<sup>Required</sup> <a name="metadataFields" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.metadataFields"></a>

```java
public java.util.List<java.lang.String> getMetadataFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfigOutputReference.property.internalValue"></a>

```java
public ComputeSubnetworkLogConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkLogConfig">ComputeSubnetworkLogConfig</a>

---


### ComputeSubnetworkParamsOutputReference <a name="ComputeSubnetworkParamsOutputReference" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_subnetwork.ComputeSubnetworkParamsOutputReference;

new ComputeSubnetworkParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.resetResourceManagerTags"></a>

```java
public void resetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParams">ComputeSubnetworkParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.property.resourceManagerTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.property.resourceManagerTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceManagerTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParamsOutputReference.property.internalValue"></a>

```java
public ComputeSubnetworkParams getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkParams">ComputeSubnetworkParams</a>

---


### ComputeSubnetworkSecondaryIpRangeList <a name="ComputeSubnetworkSecondaryIpRangeList" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_subnetwork.ComputeSubnetworkSecondaryIpRangeList;

new ComputeSubnetworkSecondaryIpRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.get"></a>

```java
public ComputeSubnetworkSecondaryIpRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComputeSubnetworkSecondaryIpRange> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>>

---


### ComputeSubnetworkSecondaryIpRangeOutputReference <a name="ComputeSubnetworkSecondaryIpRangeOutputReference" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_subnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference;

new ComputeSubnetworkSecondaryIpRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resetIpCidrRange">resetIpCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resetReservedInternalRange">resetReservedInternalRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpCidrRange` <a name="resetIpCidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resetIpCidrRange"></a>

```java
public void resetIpCidrRange()
```

##### `resetReservedInternalRange` <a name="resetReservedInternalRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.resetReservedInternalRange"></a>

```java
public void resetReservedInternalRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.rangeNameInput">rangeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.reservedInternalRangeInput">reservedInternalRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.rangeName">rangeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.reservedInternalRange">reservedInternalRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.ipCidrRangeInput"></a>

```java
public java.lang.String getIpCidrRangeInput();
```

- *Type:* java.lang.String

---

##### `rangeNameInput`<sup>Optional</sup> <a name="rangeNameInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.rangeNameInput"></a>

```java
public java.lang.String getRangeNameInput();
```

- *Type:* java.lang.String

---

##### `reservedInternalRangeInput`<sup>Optional</sup> <a name="reservedInternalRangeInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.reservedInternalRangeInput"></a>

```java
public java.lang.String getReservedInternalRangeInput();
```

- *Type:* java.lang.String

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

---

##### `rangeName`<sup>Required</sup> <a name="rangeName" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.rangeName"></a>

```java
public java.lang.String getRangeName();
```

- *Type:* java.lang.String

---

##### `reservedInternalRange`<sup>Required</sup> <a name="reservedInternalRange" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.reservedInternalRange"></a>

```java
public java.lang.String getReservedInternalRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRangeOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeSubnetworkSecondaryIpRange getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkSecondaryIpRange">ComputeSubnetworkSecondaryIpRange</a>

---


### ComputeSubnetworkTimeoutsOutputReference <a name="ComputeSubnetworkTimeoutsOutputReference" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_subnetwork.ComputeSubnetworkTimeoutsOutputReference;

new ComputeSubnetworkTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeSubnetworkTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-google.computeSubnetwork.ComputeSubnetworkTimeouts">ComputeSubnetworkTimeouts</a>

---



