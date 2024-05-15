# `computeFirewall` Submodule <a name="`computeFirewall` Submodule" id="@cdktf/provider-google.computeFirewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeFirewall <a name="ComputeFirewall" id="@cdktf/provider-google.computeFirewall.ComputeFirewall"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall google_compute_firewall}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall.ComputeFirewall;

ComputeFirewall.Builder.create(Construct scope, java.lang.String id)
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
    .network(java.lang.String)
//  .allow(IResolvable)
//  .allow(java.util.List<ComputeFirewallAllow>)
//  .deny(IResolvable)
//  .deny(java.util.List<ComputeFirewallDeny>)
//  .description(java.lang.String)
//  .destinationRanges(java.util.List<java.lang.String>)
//  .direction(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .enableLogging(java.lang.Boolean)
//  .enableLogging(IResolvable)
//  .id(java.lang.String)
//  .logConfig(ComputeFirewallLogConfig)
//  .priority(java.lang.Number)
//  .project(java.lang.String)
//  .sourceRanges(java.util.List<java.lang.String>)
//  .sourceServiceAccounts(java.util.List<java.lang.String>)
//  .sourceTags(java.util.List<java.lang.String>)
//  .targetServiceAccounts(java.util.List<java.lang.String>)
//  .targetTags(java.util.List<java.lang.String>)
//  .timeouts(ComputeFirewallTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The name or self_link of the network to attach this firewall to. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.allow">allow</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>></code> | allow block. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.deny">deny</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>></code> | deny block. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.destinationRanges">destinationRanges</a></code> | <code>java.util.List<java.lang.String></code> | If destination ranges are specified, the firewall will apply only to traffic that has destination IP address in these ranges. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.direction">direction</a></code> | <code>java.lang.String</code> | Direction of traffic to which this firewall applies; |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes whether the firewall rule is disabled, i.e not applied to the network it is associated with. When set to true, the firewall rule is not enforced and the network behaves as if it did not exist. If this is unspecified, the firewall rule will be enabled. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This field denotes whether to enable logging for a particular firewall rule. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#id ComputeFirewall#id}. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Priority for this rule. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#project ComputeFirewall#project}. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.sourceRanges">sourceRanges</a></code> | <code>java.util.List<java.lang.String></code> | If source ranges are specified, the firewall will apply only to traffic that has source IP address in these ranges. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.sourceServiceAccounts">sourceServiceAccounts</a></code> | <code>java.util.List<java.lang.String></code> | If source service accounts are specified, the firewall will apply only to traffic originating from an instance with a service account in this list. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.sourceTags">sourceTags</a></code> | <code>java.util.List<java.lang.String></code> | If source tags are specified, the firewall will apply only to traffic with source IP that belongs to a tag listed in source tags. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.targetServiceAccounts">targetServiceAccounts</a></code> | <code>java.util.List<java.lang.String></code> | A list of service accounts indicating sets of instances located in the network that may make network connections as specified in allowed[]. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.targetTags">targetTags</a></code> | <code>java.util.List<java.lang.String></code> | A list of instance tags indicating sets of instances located in the network that may make network connections as specified in allowed[]. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#name ComputeFirewall#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The name or self_link of the network to attach this firewall to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#network ComputeFirewall#network}

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.allow"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#allow ComputeFirewall#allow}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.deny"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#deny ComputeFirewall#deny}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#description ComputeFirewall#description}

---

##### `destinationRanges`<sup>Optional</sup> <a name="destinationRanges" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.destinationRanges"></a>

- *Type:* java.util.List<java.lang.String>

If destination ranges are specified, the firewall will apply only to traffic that has destination IP address in these ranges.

These ranges
must be expressed in CIDR format. IPv4 or IPv6 ranges are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#destination_ranges ComputeFirewall#destination_ranges}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.direction"></a>

- *Type:* java.lang.String

Direction of traffic to which this firewall applies;

default is
INGRESS. Note: For INGRESS traffic, one of 'source_ranges',
'source_tags' or 'source_service_accounts' is required. Possible values: ["INGRESS", "EGRESS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#direction ComputeFirewall#direction}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes whether the firewall rule is disabled, i.e not applied to the network it is associated with. When set to true, the firewall rule is not enforced and the network behaves as if it did not exist. If this is unspecified, the firewall rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#disabled ComputeFirewall#disabled}

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.enableLogging"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This field denotes whether to enable logging for a particular firewall rule.

If logging is enabled, logs will be exported to Stackdriver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#enable_logging ComputeFirewall#enable_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#id ComputeFirewall#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#log_config ComputeFirewall#log_config}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Priority for this rule.

This is an integer between 0 and 65535, both
inclusive. When not specified, the value assumed is 1000. Relative
priorities determine precedence of conflicting rules. Lower value of
priority implies higher precedence (eg, a rule with priority 0 has
higher precedence than a rule with priority 1). DENY rules take
precedence over ALLOW rules having equal priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#priority ComputeFirewall#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#project ComputeFirewall#project}.

---

##### `sourceRanges`<sup>Optional</sup> <a name="sourceRanges" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.sourceRanges"></a>

- *Type:* java.util.List<java.lang.String>

If source ranges are specified, the firewall will apply only to traffic that has source IP address in these ranges.

These ranges must
be expressed in CIDR format. One or both of sourceRanges and
sourceTags may be set. If both properties are set, the firewall will
apply to traffic that has source IP address within sourceRanges OR the
source IP that belongs to a tag listed in the sourceTags property. The
connection does not need to match both properties for the firewall to
apply. IPv4 or IPv6 ranges are supported. For INGRESS traffic, one of
'source_ranges', 'source_tags' or 'source_service_accounts' is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#source_ranges ComputeFirewall#source_ranges}

---

##### `sourceServiceAccounts`<sup>Optional</sup> <a name="sourceServiceAccounts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.sourceServiceAccounts"></a>

- *Type:* java.util.List<java.lang.String>

If source service accounts are specified, the firewall will apply only to traffic originating from an instance with a service account in this list.

Source service accounts cannot be used to control traffic to an
instance's external IP address because service accounts are associated
with an instance, not an IP address. sourceRanges can be set at the
same time as sourceServiceAccounts. If both are set, the firewall will
apply to traffic that has source IP address within sourceRanges OR the
source IP belongs to an instance with service account listed in
sourceServiceAccount. The connection does not need to match both
properties for the firewall to apply. sourceServiceAccounts cannot be
used at the same time as sourceTags or targetTags. For INGRESS traffic,
one of 'source_ranges', 'source_tags' or 'source_service_accounts' is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#source_service_accounts ComputeFirewall#source_service_accounts}

---

##### `sourceTags`<sup>Optional</sup> <a name="sourceTags" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.sourceTags"></a>

- *Type:* java.util.List<java.lang.String>

If source tags are specified, the firewall will apply only to traffic with source IP that belongs to a tag listed in source tags.

Source
tags cannot be used to control traffic to an instance's external IP
address. Because tags are associated with an instance, not an IP
address. One or both of sourceRanges and sourceTags may be set. If
both properties are set, the firewall will apply to traffic that has
source IP address within sourceRanges OR the source IP that belongs to
a tag listed in the sourceTags property. The connection does not need
to match both properties for the firewall to apply. For INGRESS traffic,
one of 'source_ranges', 'source_tags' or 'source_service_accounts' is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#source_tags ComputeFirewall#source_tags}

---

##### `targetServiceAccounts`<sup>Optional</sup> <a name="targetServiceAccounts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.targetServiceAccounts"></a>

- *Type:* java.util.List<java.lang.String>

A list of service accounts indicating sets of instances located in the network that may make network connections as specified in allowed[].

targetServiceAccounts cannot be used at the same time as targetTags or
sourceTags. If neither targetServiceAccounts nor targetTags are
specified, the firewall rule applies to all instances on the specified
network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#target_service_accounts ComputeFirewall#target_service_accounts}

---

##### `targetTags`<sup>Optional</sup> <a name="targetTags" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.targetTags"></a>

- *Type:* java.util.List<java.lang.String>

A list of instance tags indicating sets of instances located in the network that may make network connections as specified in allowed[].

If no targetTags are specified, the firewall rule applies to all
instances on the specified network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#target_tags ComputeFirewall#target_tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#timeouts ComputeFirewall#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.putAllow">putAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.putDeny">putDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetAllow">resetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDeny">resetDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDestinationRanges">resetDestinationRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetEnableLogging">resetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetSourceRanges">resetSourceRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetSourceServiceAccounts">resetSourceServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetSourceTags">resetSourceTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetTargetServiceAccounts">resetTargetServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetTargetTags">resetTargetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllow` <a name="putAllow" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.putAllow"></a>

```java
public void putAllow(IResolvable OR java.util.List<ComputeFirewallAllow> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.putAllow.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>>

---

##### `putDeny` <a name="putDeny" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.putDeny"></a>

```java
public void putDeny(IResolvable OR java.util.List<ComputeFirewallDeny> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.putDeny.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>>

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.putLogConfig"></a>

```java
public void putLogConfig(ComputeFirewallLogConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.putTimeouts"></a>

```java
public void putTimeouts(ComputeFirewallTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a>

---

##### `resetAllow` <a name="resetAllow" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetAllow"></a>

```java
public void resetAllow()
```

##### `resetDeny` <a name="resetDeny" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDeny"></a>

```java
public void resetDeny()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDestinationRanges` <a name="resetDestinationRanges" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDestinationRanges"></a>

```java
public void resetDestinationRanges()
```

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetEnableLogging` <a name="resetEnableLogging" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetEnableLogging"></a>

```java
public void resetEnableLogging()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetId"></a>

```java
public void resetId()
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetLogConfig"></a>

```java
public void resetLogConfig()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetProject"></a>

```java
public void resetProject()
```

##### `resetSourceRanges` <a name="resetSourceRanges" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetSourceRanges"></a>

```java
public void resetSourceRanges()
```

##### `resetSourceServiceAccounts` <a name="resetSourceServiceAccounts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetSourceServiceAccounts"></a>

```java
public void resetSourceServiceAccounts()
```

##### `resetSourceTags` <a name="resetSourceTags" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetSourceTags"></a>

```java
public void resetSourceTags()
```

##### `resetTargetServiceAccounts` <a name="resetTargetServiceAccounts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetTargetServiceAccounts"></a>

```java
public void resetTargetServiceAccounts()
```

##### `resetTargetTags` <a name="resetTargetTags" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetTargetTags"></a>

```java
public void resetTargetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeFirewall resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall.ComputeFirewall;

ComputeFirewall.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall.ComputeFirewall;

ComputeFirewall.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall.ComputeFirewall;

ComputeFirewall.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall.ComputeFirewall;

ComputeFirewall.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeFirewall.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComputeFirewall resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeFirewall to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeFirewall that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComputeFirewall to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList">ComputeFirewallAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList">ComputeFirewallDenyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference">ComputeFirewallLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference">ComputeFirewallTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.allowInput">allowInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.denyInput">denyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.destinationRangesInput">destinationRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.enableLoggingInput">enableLoggingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceRangesInput">sourceRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceServiceAccountsInput">sourceServiceAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceTagsInput">sourceTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.targetServiceAccountsInput">targetServiceAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.targetTagsInput">targetTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.destinationRanges">destinationRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceRanges">sourceRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceServiceAccounts">sourceServiceAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceTags">sourceTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.targetServiceAccounts">targetServiceAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.targetTags">targetTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.allow"></a>

```java
public ComputeFirewallAllowList getAllow();
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList">ComputeFirewallAllowList</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.deny"></a>

```java
public ComputeFirewallDenyList getDeny();
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList">ComputeFirewallDenyList</a>

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.logConfig"></a>

```java
public ComputeFirewallLogConfigOutputReference getLogConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference">ComputeFirewallLogConfigOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.timeouts"></a>

```java
public ComputeFirewallTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference">ComputeFirewallTimeoutsOutputReference</a>

---

##### `allowInput`<sup>Optional</sup> <a name="allowInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.allowInput"></a>

```java
public java.lang.Object getAllowInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>>

---

##### `denyInput`<sup>Optional</sup> <a name="denyInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.denyInput"></a>

```java
public java.lang.Object getDenyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `destinationRangesInput`<sup>Optional</sup> <a name="destinationRangesInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.destinationRangesInput"></a>

```java
public java.util.List<java.lang.String> getDestinationRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableLoggingInput`<sup>Optional</sup> <a name="enableLoggingInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.enableLoggingInput"></a>

```java
public java.lang.Object getEnableLoggingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.logConfigInput"></a>

```java
public ComputeFirewallLogConfig getLogConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `sourceRangesInput`<sup>Optional</sup> <a name="sourceRangesInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceRangesInput"></a>

```java
public java.util.List<java.lang.String> getSourceRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceServiceAccountsInput`<sup>Optional</sup> <a name="sourceServiceAccountsInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceServiceAccountsInput"></a>

```java
public java.util.List<java.lang.String> getSourceServiceAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceTagsInput`<sup>Optional</sup> <a name="sourceTagsInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceTagsInput"></a>

```java
public java.util.List<java.lang.String> getSourceTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetServiceAccountsInput`<sup>Optional</sup> <a name="targetServiceAccountsInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.targetServiceAccountsInput"></a>

```java
public java.util.List<java.lang.String> getTargetServiceAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetTagsInput`<sup>Optional</sup> <a name="targetTagsInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.targetTagsInput"></a>

```java
public java.util.List<java.lang.String> getTargetTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `destinationRanges`<sup>Required</sup> <a name="destinationRanges" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.destinationRanges"></a>

```java
public java.util.List<java.lang.String> getDestinationRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.enableLogging"></a>

```java
public java.lang.Object getEnableLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `sourceRanges`<sup>Required</sup> <a name="sourceRanges" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceRanges"></a>

```java
public java.util.List<java.lang.String> getSourceRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceServiceAccounts`<sup>Required</sup> <a name="sourceServiceAccounts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceServiceAccounts"></a>

```java
public java.util.List<java.lang.String> getSourceServiceAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceTags`<sup>Required</sup> <a name="sourceTags" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.sourceTags"></a>

```java
public java.util.List<java.lang.String> getSourceTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetServiceAccounts`<sup>Required</sup> <a name="targetServiceAccounts" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.targetServiceAccounts"></a>

```java
public java.util.List<java.lang.String> getTargetServiceAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetTags`<sup>Required</sup> <a name="targetTags" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.targetTags"></a>

```java
public java.util.List<java.lang.String> getTargetTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewall.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeFirewall.ComputeFirewall.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeFirewallAllow <a name="ComputeFirewallAllow" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall.ComputeFirewallAllow;

ComputeFirewallAllow.builder()
    .protocol(java.lang.String)
//  .ports(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow.property.protocol">protocol</a></code> | <code>java.lang.String</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow.property.ports">ports</a></code> | <code>java.util.List<java.lang.String></code> | An optional list of ports to which this rule applies. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllow.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

The IP protocol to which this rule applies.

The protocol type is
required when creating a firewall rule. This value can either be
one of the following well known protocol strings (tcp, udp,
icmp, esp, ah, sctp, ipip, all), or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#protocol ComputeFirewall#protocol}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllow.property.ports"></a>

```java
public java.util.List<java.lang.String> getPorts();
```

- *Type:* java.util.List<java.lang.String>

An optional list of ports to which this rule applies.

This field
is only applicable for UDP or TCP protocol. Each entry must be
either an integer or a range. If not specified, this rule
applies to connections through any port.

Example inputs include: ["22"], ["80","443"], and
["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#ports ComputeFirewall#ports}

---

### ComputeFirewallConfig <a name="ComputeFirewallConfig" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall.ComputeFirewallConfig;

ComputeFirewallConfig.builder()
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
    .network(java.lang.String)
//  .allow(IResolvable)
//  .allow(java.util.List<ComputeFirewallAllow>)
//  .deny(IResolvable)
//  .deny(java.util.List<ComputeFirewallDeny>)
//  .description(java.lang.String)
//  .destinationRanges(java.util.List<java.lang.String>)
//  .direction(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .enableLogging(java.lang.Boolean)
//  .enableLogging(IResolvable)
//  .id(java.lang.String)
//  .logConfig(ComputeFirewallLogConfig)
//  .priority(java.lang.Number)
//  .project(java.lang.String)
//  .sourceRanges(java.util.List<java.lang.String>)
//  .sourceServiceAccounts(java.util.List<java.lang.String>)
//  .sourceTags(java.util.List<java.lang.String>)
//  .targetServiceAccounts(java.util.List<java.lang.String>)
//  .targetTags(java.util.List<java.lang.String>)
//  .timeouts(ComputeFirewallTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.network">network</a></code> | <code>java.lang.String</code> | The name or self_link of the network to attach this firewall to. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.allow">allow</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>></code> | allow block. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.deny">deny</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>></code> | deny block. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.destinationRanges">destinationRanges</a></code> | <code>java.util.List<java.lang.String></code> | If destination ranges are specified, the firewall will apply only to traffic that has destination IP address in these ranges. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.direction">direction</a></code> | <code>java.lang.String</code> | Direction of traffic to which this firewall applies; |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes whether the firewall rule is disabled, i.e not applied to the network it is associated with. When set to true, the firewall rule is not enforced and the network behaves as if it did not exist. If this is unspecified, the firewall rule will be enabled. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This field denotes whether to enable logging for a particular firewall rule. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#id ComputeFirewall#id}. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Priority for this rule. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#project ComputeFirewall#project}. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.sourceRanges">sourceRanges</a></code> | <code>java.util.List<java.lang.String></code> | If source ranges are specified, the firewall will apply only to traffic that has source IP address in these ranges. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.sourceServiceAccounts">sourceServiceAccounts</a></code> | <code>java.util.List<java.lang.String></code> | If source service accounts are specified, the firewall will apply only to traffic originating from an instance with a service account in this list. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.sourceTags">sourceTags</a></code> | <code>java.util.List<java.lang.String></code> | If source tags are specified, the firewall will apply only to traffic with source IP that belongs to a tag listed in source tags. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.targetServiceAccounts">targetServiceAccounts</a></code> | <code>java.util.List<java.lang.String></code> | A list of service accounts indicating sets of instances located in the network that may make network connections as specified in allowed[]. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.targetTags">targetTags</a></code> | <code>java.util.List<java.lang.String></code> | A list of instance tags indicating sets of instances located in the network that may make network connections as specified in allowed[]. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#name ComputeFirewall#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The name or self_link of the network to attach this firewall to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#network ComputeFirewall#network}

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.allow"></a>

```java
public java.lang.Object getAllow();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#allow ComputeFirewall#allow}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.deny"></a>

```java
public java.lang.Object getDeny();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#deny ComputeFirewall#deny}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#description ComputeFirewall#description}

---

##### `destinationRanges`<sup>Optional</sup> <a name="destinationRanges" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.destinationRanges"></a>

```java
public java.util.List<java.lang.String> getDestinationRanges();
```

- *Type:* java.util.List<java.lang.String>

If destination ranges are specified, the firewall will apply only to traffic that has destination IP address in these ranges.

These ranges
must be expressed in CIDR format. IPv4 or IPv6 ranges are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#destination_ranges ComputeFirewall#destination_ranges}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Direction of traffic to which this firewall applies;

default is
INGRESS. Note: For INGRESS traffic, one of 'source_ranges',
'source_tags' or 'source_service_accounts' is required. Possible values: ["INGRESS", "EGRESS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#direction ComputeFirewall#direction}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes whether the firewall rule is disabled, i.e not applied to the network it is associated with. When set to true, the firewall rule is not enforced and the network behaves as if it did not exist. If this is unspecified, the firewall rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#disabled ComputeFirewall#disabled}

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.enableLogging"></a>

```java
public java.lang.Object getEnableLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This field denotes whether to enable logging for a particular firewall rule.

If logging is enabled, logs will be exported to Stackdriver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#enable_logging ComputeFirewall#enable_logging}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#id ComputeFirewall#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.logConfig"></a>

```java
public ComputeFirewallLogConfig getLogConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#log_config ComputeFirewall#log_config}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Priority for this rule.

This is an integer between 0 and 65535, both
inclusive. When not specified, the value assumed is 1000. Relative
priorities determine precedence of conflicting rules. Lower value of
priority implies higher precedence (eg, a rule with priority 0 has
higher precedence than a rule with priority 1). DENY rules take
precedence over ALLOW rules having equal priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#priority ComputeFirewall#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#project ComputeFirewall#project}.

---

##### `sourceRanges`<sup>Optional</sup> <a name="sourceRanges" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.sourceRanges"></a>

```java
public java.util.List<java.lang.String> getSourceRanges();
```

- *Type:* java.util.List<java.lang.String>

If source ranges are specified, the firewall will apply only to traffic that has source IP address in these ranges.

These ranges must
be expressed in CIDR format. One or both of sourceRanges and
sourceTags may be set. If both properties are set, the firewall will
apply to traffic that has source IP address within sourceRanges OR the
source IP that belongs to a tag listed in the sourceTags property. The
connection does not need to match both properties for the firewall to
apply. IPv4 or IPv6 ranges are supported. For INGRESS traffic, one of
'source_ranges', 'source_tags' or 'source_service_accounts' is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#source_ranges ComputeFirewall#source_ranges}

---

##### `sourceServiceAccounts`<sup>Optional</sup> <a name="sourceServiceAccounts" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.sourceServiceAccounts"></a>

```java
public java.util.List<java.lang.String> getSourceServiceAccounts();
```

- *Type:* java.util.List<java.lang.String>

If source service accounts are specified, the firewall will apply only to traffic originating from an instance with a service account in this list.

Source service accounts cannot be used to control traffic to an
instance's external IP address because service accounts are associated
with an instance, not an IP address. sourceRanges can be set at the
same time as sourceServiceAccounts. If both are set, the firewall will
apply to traffic that has source IP address within sourceRanges OR the
source IP belongs to an instance with service account listed in
sourceServiceAccount. The connection does not need to match both
properties for the firewall to apply. sourceServiceAccounts cannot be
used at the same time as sourceTags or targetTags. For INGRESS traffic,
one of 'source_ranges', 'source_tags' or 'source_service_accounts' is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#source_service_accounts ComputeFirewall#source_service_accounts}

---

##### `sourceTags`<sup>Optional</sup> <a name="sourceTags" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.sourceTags"></a>

```java
public java.util.List<java.lang.String> getSourceTags();
```

- *Type:* java.util.List<java.lang.String>

If source tags are specified, the firewall will apply only to traffic with source IP that belongs to a tag listed in source tags.

Source
tags cannot be used to control traffic to an instance's external IP
address. Because tags are associated with an instance, not an IP
address. One or both of sourceRanges and sourceTags may be set. If
both properties are set, the firewall will apply to traffic that has
source IP address within sourceRanges OR the source IP that belongs to
a tag listed in the sourceTags property. The connection does not need
to match both properties for the firewall to apply. For INGRESS traffic,
one of 'source_ranges', 'source_tags' or 'source_service_accounts' is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#source_tags ComputeFirewall#source_tags}

---

##### `targetServiceAccounts`<sup>Optional</sup> <a name="targetServiceAccounts" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.targetServiceAccounts"></a>

```java
public java.util.List<java.lang.String> getTargetServiceAccounts();
```

- *Type:* java.util.List<java.lang.String>

A list of service accounts indicating sets of instances located in the network that may make network connections as specified in allowed[].

targetServiceAccounts cannot be used at the same time as targetTags or
sourceTags. If neither targetServiceAccounts nor targetTags are
specified, the firewall rule applies to all instances on the specified
network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#target_service_accounts ComputeFirewall#target_service_accounts}

---

##### `targetTags`<sup>Optional</sup> <a name="targetTags" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.targetTags"></a>

```java
public java.util.List<java.lang.String> getTargetTags();
```

- *Type:* java.util.List<java.lang.String>

A list of instance tags indicating sets of instances located in the network that may make network connections as specified in allowed[].

If no targetTags are specified, the firewall rule applies to all
instances on the specified network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#target_tags ComputeFirewall#target_tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeFirewall.ComputeFirewallConfig.property.timeouts"></a>

```java
public ComputeFirewallTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#timeouts ComputeFirewall#timeouts}

---

### ComputeFirewallDeny <a name="ComputeFirewallDeny" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDeny.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall.ComputeFirewallDeny;

ComputeFirewallDeny.builder()
    .protocol(java.lang.String)
//  .ports(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny.property.protocol">protocol</a></code> | <code>java.lang.String</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny.property.ports">ports</a></code> | <code>java.util.List<java.lang.String></code> | An optional list of ports to which this rule applies. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDeny.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

The IP protocol to which this rule applies.

The protocol type is
required when creating a firewall rule. This value can either be
one of the following well known protocol strings (tcp, udp,
icmp, esp, ah, sctp, ipip, all), or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#protocol ComputeFirewall#protocol}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDeny.property.ports"></a>

```java
public java.util.List<java.lang.String> getPorts();
```

- *Type:* java.util.List<java.lang.String>

An optional list of ports to which this rule applies.

This field
is only applicable for UDP or TCP protocol. Each entry must be
either an integer or a range. If not specified, this rule
applies to connections through any port.

Example inputs include: ["22"], ["80","443"], and
["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#ports ComputeFirewall#ports}

---

### ComputeFirewallLogConfig <a name="ComputeFirewallLogConfig" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall.ComputeFirewallLogConfig;

ComputeFirewallLogConfig.builder()
    .metadata(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig.property.metadata">metadata</a></code> | <code>java.lang.String</code> | This field denotes whether to include or exclude metadata for firewall logs. Possible values: ["EXCLUDE_ALL_METADATA", "INCLUDE_ALL_METADATA"]. |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

This field denotes whether to include or exclude metadata for firewall logs. Possible values: ["EXCLUDE_ALL_METADATA", "INCLUDE_ALL_METADATA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#metadata ComputeFirewall#metadata}

---

### ComputeFirewallTimeouts <a name="ComputeFirewallTimeouts" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall.ComputeFirewallTimeouts;

ComputeFirewallTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#create ComputeFirewall#create}. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#delete ComputeFirewall#delete}. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#update ComputeFirewall#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#create ComputeFirewall#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#delete ComputeFirewall#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/compute_firewall#update ComputeFirewall#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeFirewallAllowList <a name="ComputeFirewallAllowList" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall.ComputeFirewallAllowList;

new ComputeFirewallAllowList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.get"></a>

```java
public ComputeFirewallAllowOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>>

---


### ComputeFirewallAllowOutputReference <a name="ComputeFirewallAllowOutputReference" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall.ComputeFirewallAllowOutputReference;

new ComputeFirewallAllowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.resetPorts">resetPorts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.resetPorts"></a>

```java
public void resetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.portsInput">portsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.portsInput"></a>

```java
public java.util.List<java.lang.String> getPortsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.ports"></a>

```java
public java.util.List<java.lang.String> getPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewall.ComputeFirewallAllowOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallAllow">ComputeFirewallAllow</a>

---


### ComputeFirewallDenyList <a name="ComputeFirewallDenyList" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall.ComputeFirewallDenyList;

new ComputeFirewallDenyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.get"></a>

```java
public ComputeFirewallDenyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>>

---


### ComputeFirewallDenyOutputReference <a name="ComputeFirewallDenyOutputReference" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall.ComputeFirewallDenyOutputReference;

new ComputeFirewallDenyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.resetPorts">resetPorts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.resetPorts"></a>

```java
public void resetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.portsInput">portsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.portsInput"></a>

```java
public java.util.List<java.lang.String> getPortsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.ports"></a>

```java
public java.util.List<java.lang.String> getPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewall.ComputeFirewallDenyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallDeny">ComputeFirewallDeny</a>

---


### ComputeFirewallLogConfigOutputReference <a name="ComputeFirewallLogConfigOutputReference" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall.ComputeFirewallLogConfigOutputReference;

new ComputeFirewallLogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.metadataInput">metadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.metadataInput"></a>

```java
public java.lang.String getMetadataInput();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfigOutputReference.property.internalValue"></a>

```java
public ComputeFirewallLogConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallLogConfig">ComputeFirewallLogConfig</a>

---


### ComputeFirewallTimeoutsOutputReference <a name="ComputeFirewallTimeoutsOutputReference" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_firewall.ComputeFirewallTimeoutsOutputReference;

new ComputeFirewallTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeFirewall.ComputeFirewallTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeFirewall.ComputeFirewallTimeouts">ComputeFirewallTimeouts</a>

---



