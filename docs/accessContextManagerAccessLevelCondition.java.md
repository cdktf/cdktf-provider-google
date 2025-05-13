# `accessContextManagerAccessLevelCondition` Submodule <a name="`accessContextManagerAccessLevelCondition` Submodule" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerAccessLevelCondition <a name="AccessContextManagerAccessLevelCondition" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition google_access_context_manager_access_level_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_level_condition.AccessContextManagerAccessLevelCondition;

AccessContextManagerAccessLevelCondition.Builder.create(Construct scope, java.lang.String id)
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
    .accessLevel(java.lang.String)
//  .devicePolicy(AccessContextManagerAccessLevelConditionDevicePolicy)
//  .id(java.lang.String)
//  .ipSubnetworks(java.util.List<java.lang.String>)
//  .members(java.util.List<java.lang.String>)
//  .negate(java.lang.Boolean)
//  .negate(IResolvable)
//  .regions(java.util.List<java.lang.String>)
//  .requiredAccessLevels(java.util.List<java.lang.String>)
//  .timeouts(AccessContextManagerAccessLevelConditionTimeouts)
//  .vpcNetworkSources(IResolvable)
//  .vpcNetworkSources(java.util.List<AccessContextManagerAccessLevelConditionVpcNetworkSources>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | The name of the Access Level to add this condition to. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.devicePolicy">devicePolicy</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy">AccessContextManagerAccessLevelConditionDevicePolicy</a></code> | device_policy block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#id AccessContextManagerAccessLevelCondition#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.ipSubnetworks">ipSubnetworks</a></code> | <code>java.util.List<java.lang.String></code> | A list of CIDR block IP subnetwork specification. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.members">members</a></code> | <code>java.util.List<java.lang.String></code> | An allowed list of members (users, service accounts). Using groups is not supported yet. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.negate">negate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to negate the Condition. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.requiredAccessLevels">requiredAccessLevels</a></code> | <code>java.util.List<java.lang.String></code> | A list of other access levels defined in the same Policy, referenced by resource name. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts">AccessContextManagerAccessLevelConditionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.vpcNetworkSources">vpcNetworkSources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSources">AccessContextManagerAccessLevelConditionVpcNetworkSources</a>></code> | vpc_network_sources block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.accessLevel"></a>

- *Type:* java.lang.String

The name of the Access Level to add this condition to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#access_level AccessContextManagerAccessLevelCondition#access_level}

---

##### `devicePolicy`<sup>Optional</sup> <a name="devicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.devicePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy">AccessContextManagerAccessLevelConditionDevicePolicy</a>

device_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#device_policy AccessContextManagerAccessLevelCondition#device_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#id AccessContextManagerAccessLevelCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipSubnetworks`<sup>Optional</sup> <a name="ipSubnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.ipSubnetworks"></a>

- *Type:* java.util.List<java.lang.String>

A list of CIDR block IP subnetwork specification.

May be IPv4
or IPv6.
Note that for a CIDR IP address block, the specified IP address
portion must be properly truncated (i.e. all the host bits must
be zero) or the input is considered malformed. For example,
"192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly,
for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32"
is not. The originating IP of a request must be in one of the
listed subnets in order for this Condition to be true.
If empty, all IP addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#ip_subnetworks AccessContextManagerAccessLevelCondition#ip_subnetworks}

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.members"></a>

- *Type:* java.util.List<java.lang.String>

An allowed list of members (users, service accounts). Using groups is not supported yet.

The signed-in user originating the request must be a part of one
of the provided members. If not specified, a request may come
from any user (logged in/not logged in, not present in any
groups, etc.).
Formats: 'user:{emailid}', 'serviceAccount:{emailid}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#members AccessContextManagerAccessLevelCondition#members}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.negate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to negate the Condition.

If true, the Condition becomes
a NAND over its non-empty fields, each field must be false for
the Condition overall to be satisfied. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#negate AccessContextManagerAccessLevelCondition#negate}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.regions"></a>

- *Type:* java.util.List<java.lang.String>

The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#regions AccessContextManagerAccessLevelCondition#regions}

---

##### `requiredAccessLevels`<sup>Optional</sup> <a name="requiredAccessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.requiredAccessLevels"></a>

- *Type:* java.util.List<java.lang.String>

A list of other access levels defined in the same Policy, referenced by resource name.

Referencing an AccessLevel which
does not exist is an error. All access levels listed must be
granted for the Condition to be true.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#required_access_levels AccessContextManagerAccessLevelCondition#required_access_levels}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts">AccessContextManagerAccessLevelConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#timeouts AccessContextManagerAccessLevelCondition#timeouts}

---

##### `vpcNetworkSources`<sup>Optional</sup> <a name="vpcNetworkSources" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.Initializer.parameter.vpcNetworkSources"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSources">AccessContextManagerAccessLevelConditionVpcNetworkSources</a>>

vpc_network_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#vpc_network_sources AccessContextManagerAccessLevelCondition#vpc_network_sources}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putDevicePolicy">putDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putVpcNetworkSources">putVpcNetworkSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetDevicePolicy">resetDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetIpSubnetworks">resetIpSubnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetMembers">resetMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetNegate">resetNegate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetRequiredAccessLevels">resetRequiredAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetVpcNetworkSources">resetVpcNetworkSources</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDevicePolicy` <a name="putDevicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putDevicePolicy"></a>

```java
public void putDevicePolicy(AccessContextManagerAccessLevelConditionDevicePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putDevicePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy">AccessContextManagerAccessLevelConditionDevicePolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putTimeouts"></a>

```java
public void putTimeouts(AccessContextManagerAccessLevelConditionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts">AccessContextManagerAccessLevelConditionTimeouts</a>

---

##### `putVpcNetworkSources` <a name="putVpcNetworkSources" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putVpcNetworkSources"></a>

```java
public void putVpcNetworkSources(IResolvable OR java.util.List<AccessContextManagerAccessLevelConditionVpcNetworkSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.putVpcNetworkSources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSources">AccessContextManagerAccessLevelConditionVpcNetworkSources</a>>

---

##### `resetDevicePolicy` <a name="resetDevicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetDevicePolicy"></a>

```java
public void resetDevicePolicy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetId"></a>

```java
public void resetId()
```

##### `resetIpSubnetworks` <a name="resetIpSubnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetIpSubnetworks"></a>

```java
public void resetIpSubnetworks()
```

##### `resetMembers` <a name="resetMembers" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetMembers"></a>

```java
public void resetMembers()
```

##### `resetNegate` <a name="resetNegate" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetNegate"></a>

```java
public void resetNegate()
```

##### `resetRegions` <a name="resetRegions" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetRegions"></a>

```java
public void resetRegions()
```

##### `resetRequiredAccessLevels` <a name="resetRequiredAccessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetRequiredAccessLevels"></a>

```java
public void resetRequiredAccessLevels()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpcNetworkSources` <a name="resetVpcNetworkSources" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.resetVpcNetworkSources"></a>

```java
public void resetVpcNetworkSources()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccessContextManagerAccessLevelCondition resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_level_condition.AccessContextManagerAccessLevelCondition;

AccessContextManagerAccessLevelCondition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_level_condition.AccessContextManagerAccessLevelCondition;

AccessContextManagerAccessLevelCondition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_level_condition.AccessContextManagerAccessLevelCondition;

AccessContextManagerAccessLevelCondition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_level_condition.AccessContextManagerAccessLevelCondition;

AccessContextManagerAccessLevelCondition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AccessContextManagerAccessLevelCondition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AccessContextManagerAccessLevelCondition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AccessContextManagerAccessLevelCondition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AccessContextManagerAccessLevelCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AccessContextManagerAccessLevelCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.accessPolicyId">accessPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.devicePolicy">devicePolicy</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference">AccessContextManagerAccessLevelConditionDevicePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference">AccessContextManagerAccessLevelConditionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.vpcNetworkSources">vpcNetworkSources</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList">AccessContextManagerAccessLevelConditionVpcNetworkSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.devicePolicyInput">devicePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy">AccessContextManagerAccessLevelConditionDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.ipSubnetworksInput">ipSubnetworksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.membersInput">membersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.negateInput">negateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.regionsInput">regionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.requiredAccessLevelsInput">requiredAccessLevelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts">AccessContextManagerAccessLevelConditionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.vpcNetworkSourcesInput">vpcNetworkSourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSources">AccessContextManagerAccessLevelConditionVpcNetworkSources</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.ipSubnetworks">ipSubnetworks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.negate">negate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.requiredAccessLevels">requiredAccessLevels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessPolicyId`<sup>Required</sup> <a name="accessPolicyId" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.accessPolicyId"></a>

```java
public java.lang.String getAccessPolicyId();
```

- *Type:* java.lang.String

---

##### `devicePolicy`<sup>Required</sup> <a name="devicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.devicePolicy"></a>

```java
public AccessContextManagerAccessLevelConditionDevicePolicyOutputReference getDevicePolicy();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference">AccessContextManagerAccessLevelConditionDevicePolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.timeouts"></a>

```java
public AccessContextManagerAccessLevelConditionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference">AccessContextManagerAccessLevelConditionTimeoutsOutputReference</a>

---

##### `vpcNetworkSources`<sup>Required</sup> <a name="vpcNetworkSources" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.vpcNetworkSources"></a>

```java
public AccessContextManagerAccessLevelConditionVpcNetworkSourcesList getVpcNetworkSources();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList">AccessContextManagerAccessLevelConditionVpcNetworkSourcesList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `devicePolicyInput`<sup>Optional</sup> <a name="devicePolicyInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.devicePolicyInput"></a>

```java
public AccessContextManagerAccessLevelConditionDevicePolicy getDevicePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy">AccessContextManagerAccessLevelConditionDevicePolicy</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipSubnetworksInput`<sup>Optional</sup> <a name="ipSubnetworksInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.ipSubnetworksInput"></a>

```java
public java.util.List<java.lang.String> getIpSubnetworksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.membersInput"></a>

```java
public java.util.List<java.lang.String> getMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negateInput`<sup>Optional</sup> <a name="negateInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.negateInput"></a>

```java
public java.lang.Object getNegateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.regionsInput"></a>

```java
public java.util.List<java.lang.String> getRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requiredAccessLevelsInput`<sup>Optional</sup> <a name="requiredAccessLevelsInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.requiredAccessLevelsInput"></a>

```java
public java.util.List<java.lang.String> getRequiredAccessLevelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts">AccessContextManagerAccessLevelConditionTimeouts</a>

---

##### `vpcNetworkSourcesInput`<sup>Optional</sup> <a name="vpcNetworkSourcesInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.vpcNetworkSourcesInput"></a>

```java
public java.lang.Object getVpcNetworkSourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSources">AccessContextManagerAccessLevelConditionVpcNetworkSources</a>>

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipSubnetworks`<sup>Required</sup> <a name="ipSubnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.ipSubnetworks"></a>

```java
public java.util.List<java.lang.String> getIpSubnetworks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.negate"></a>

```java
public java.lang.Object getNegate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requiredAccessLevels`<sup>Required</sup> <a name="requiredAccessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.requiredAccessLevels"></a>

```java
public java.util.List<java.lang.String> getRequiredAccessLevels();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelCondition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerAccessLevelConditionConfig <a name="AccessContextManagerAccessLevelConditionConfig" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_level_condition.AccessContextManagerAccessLevelConditionConfig;

AccessContextManagerAccessLevelConditionConfig.builder()
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
    .accessLevel(java.lang.String)
//  .devicePolicy(AccessContextManagerAccessLevelConditionDevicePolicy)
//  .id(java.lang.String)
//  .ipSubnetworks(java.util.List<java.lang.String>)
//  .members(java.util.List<java.lang.String>)
//  .negate(java.lang.Boolean)
//  .negate(IResolvable)
//  .regions(java.util.List<java.lang.String>)
//  .requiredAccessLevels(java.util.List<java.lang.String>)
//  .timeouts(AccessContextManagerAccessLevelConditionTimeouts)
//  .vpcNetworkSources(IResolvable)
//  .vpcNetworkSources(java.util.List<AccessContextManagerAccessLevelConditionVpcNetworkSources>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | The name of the Access Level to add this condition to. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.devicePolicy">devicePolicy</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy">AccessContextManagerAccessLevelConditionDevicePolicy</a></code> | device_policy block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#id AccessContextManagerAccessLevelCondition#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.ipSubnetworks">ipSubnetworks</a></code> | <code>java.util.List<java.lang.String></code> | A list of CIDR block IP subnetwork specification. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | An allowed list of members (users, service accounts). Using groups is not supported yet. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.negate">negate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to negate the Condition. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.requiredAccessLevels">requiredAccessLevels</a></code> | <code>java.util.List<java.lang.String></code> | A list of other access levels defined in the same Policy, referenced by resource name. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts">AccessContextManagerAccessLevelConditionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.vpcNetworkSources">vpcNetworkSources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSources">AccessContextManagerAccessLevelConditionVpcNetworkSources</a>></code> | vpc_network_sources block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

The name of the Access Level to add this condition to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#access_level AccessContextManagerAccessLevelCondition#access_level}

---

##### `devicePolicy`<sup>Optional</sup> <a name="devicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.devicePolicy"></a>

```java
public AccessContextManagerAccessLevelConditionDevicePolicy getDevicePolicy();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy">AccessContextManagerAccessLevelConditionDevicePolicy</a>

device_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#device_policy AccessContextManagerAccessLevelCondition#device_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#id AccessContextManagerAccessLevelCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipSubnetworks`<sup>Optional</sup> <a name="ipSubnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.ipSubnetworks"></a>

```java
public java.util.List<java.lang.String> getIpSubnetworks();
```

- *Type:* java.util.List<java.lang.String>

A list of CIDR block IP subnetwork specification.

May be IPv4
or IPv6.
Note that for a CIDR IP address block, the specified IP address
portion must be properly truncated (i.e. all the host bits must
be zero) or the input is considered malformed. For example,
"192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly,
for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32"
is not. The originating IP of a request must be in one of the
listed subnets in order for this Condition to be true.
If empty, all IP addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#ip_subnetworks AccessContextManagerAccessLevelCondition#ip_subnetworks}

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

An allowed list of members (users, service accounts). Using groups is not supported yet.

The signed-in user originating the request must be a part of one
of the provided members. If not specified, a request may come
from any user (logged in/not logged in, not present in any
groups, etc.).
Formats: 'user:{emailid}', 'serviceAccount:{emailid}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#members AccessContextManagerAccessLevelCondition#members}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.negate"></a>

```java
public java.lang.Object getNegate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to negate the Condition.

If true, the Condition becomes
a NAND over its non-empty fields, each field must be false for
the Condition overall to be satisfied. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#negate AccessContextManagerAccessLevelCondition#negate}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#regions AccessContextManagerAccessLevelCondition#regions}

---

##### `requiredAccessLevels`<sup>Optional</sup> <a name="requiredAccessLevels" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.requiredAccessLevels"></a>

```java
public java.util.List<java.lang.String> getRequiredAccessLevels();
```

- *Type:* java.util.List<java.lang.String>

A list of other access levels defined in the same Policy, referenced by resource name.

Referencing an AccessLevel which
does not exist is an error. All access levels listed must be
granted for the Condition to be true.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#required_access_levels AccessContextManagerAccessLevelCondition#required_access_levels}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.timeouts"></a>

```java
public AccessContextManagerAccessLevelConditionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts">AccessContextManagerAccessLevelConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#timeouts AccessContextManagerAccessLevelCondition#timeouts}

---

##### `vpcNetworkSources`<sup>Optional</sup> <a name="vpcNetworkSources" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionConfig.property.vpcNetworkSources"></a>

```java
public java.lang.Object getVpcNetworkSources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSources">AccessContextManagerAccessLevelConditionVpcNetworkSources</a>>

vpc_network_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#vpc_network_sources AccessContextManagerAccessLevelCondition#vpc_network_sources}

---

### AccessContextManagerAccessLevelConditionDevicePolicy <a name="AccessContextManagerAccessLevelConditionDevicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_level_condition.AccessContextManagerAccessLevelConditionDevicePolicy;

AccessContextManagerAccessLevelConditionDevicePolicy.builder()
//  .allowedDeviceManagementLevels(java.util.List<java.lang.String>)
//  .allowedEncryptionStatuses(java.util.List<java.lang.String>)
//  .osConstraints(IResolvable)
//  .osConstraints(java.util.List<AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints>)
//  .requireAdminApproval(java.lang.Boolean)
//  .requireAdminApproval(IResolvable)
//  .requireCorpOwned(java.lang.Boolean)
//  .requireCorpOwned(IResolvable)
//  .requireScreenLock(java.lang.Boolean)
//  .requireScreenLock(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.allowedDeviceManagementLevels">allowedDeviceManagementLevels</a></code> | <code>java.util.List<java.lang.String></code> | A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"]. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.allowedEncryptionStatuses">allowedEncryptionStatuses</a></code> | <code>java.util.List<java.lang.String></code> | A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"]. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.osConstraints">osConstraints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>></code> | os_constraints block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.requireAdminApproval">requireAdminApproval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the device needs to be approved by the customer admin. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.requireCorpOwned">requireCorpOwned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the device needs to be corp owned. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.requireScreenLock">requireScreenLock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false. |

---

##### `allowedDeviceManagementLevels`<sup>Optional</sup> <a name="allowedDeviceManagementLevels" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.allowedDeviceManagementLevels"></a>

```java
public java.util.List<java.lang.String> getAllowedDeviceManagementLevels();
```

- *Type:* java.util.List<java.lang.String>

A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#allowed_device_management_levels AccessContextManagerAccessLevelCondition#allowed_device_management_levels}

---

##### `allowedEncryptionStatuses`<sup>Optional</sup> <a name="allowedEncryptionStatuses" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.allowedEncryptionStatuses"></a>

```java
public java.util.List<java.lang.String> getAllowedEncryptionStatuses();
```

- *Type:* java.util.List<java.lang.String>

A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#allowed_encryption_statuses AccessContextManagerAccessLevelCondition#allowed_encryption_statuses}

---

##### `osConstraints`<sup>Optional</sup> <a name="osConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.osConstraints"></a>

```java
public java.lang.Object getOsConstraints();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>>

os_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#os_constraints AccessContextManagerAccessLevelCondition#os_constraints}

---

##### `requireAdminApproval`<sup>Optional</sup> <a name="requireAdminApproval" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.requireAdminApproval"></a>

```java
public java.lang.Object getRequireAdminApproval();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the device needs to be approved by the customer admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#require_admin_approval AccessContextManagerAccessLevelCondition#require_admin_approval}

---

##### `requireCorpOwned`<sup>Optional</sup> <a name="requireCorpOwned" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.requireCorpOwned"></a>

```java
public java.lang.Object getRequireCorpOwned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the device needs to be corp owned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#require_corp_owned AccessContextManagerAccessLevelCondition#require_corp_owned}

---

##### `requireScreenLock`<sup>Optional</sup> <a name="requireScreenLock" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy.property.requireScreenLock"></a>

```java
public java.lang.Object getRequireScreenLock();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#require_screen_lock AccessContextManagerAccessLevelCondition#require_screen_lock}

---

### AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints <a name="AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_level_condition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints;

AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.builder()
    .osType(java.lang.String)
//  .minimumVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.property.osType">osType</a></code> | <code>java.lang.String</code> | The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"]. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.property.minimumVersion">minimumVersion</a></code> | <code>java.lang.String</code> | The minimum allowed OS version. |

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#os_type AccessContextManagerAccessLevelCondition#os_type}

---

##### `minimumVersion`<sup>Optional</sup> <a name="minimumVersion" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints.property.minimumVersion"></a>

```java
public java.lang.String getMinimumVersion();
```

- *Type:* java.lang.String

The minimum allowed OS version.

If not set, any version
of this OS satisfies the constraint.
Format: "major.minor.patch" such as "10.5.301", "9.2.1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#minimum_version AccessContextManagerAccessLevelCondition#minimum_version}

---

### AccessContextManagerAccessLevelConditionTimeouts <a name="AccessContextManagerAccessLevelConditionTimeouts" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_level_condition.AccessContextManagerAccessLevelConditionTimeouts;

AccessContextManagerAccessLevelConditionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#create AccessContextManagerAccessLevelCondition#create}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#delete AccessContextManagerAccessLevelCondition#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#create AccessContextManagerAccessLevelCondition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#delete AccessContextManagerAccessLevelCondition#delete}.

---

### AccessContextManagerAccessLevelConditionVpcNetworkSources <a name="AccessContextManagerAccessLevelConditionVpcNetworkSources" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_level_condition.AccessContextManagerAccessLevelConditionVpcNetworkSources;

AccessContextManagerAccessLevelConditionVpcNetworkSources.builder()
//  .vpcSubnetwork(AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSources.property.vpcSubnetwork">vpcSubnetwork</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork</a></code> | vpc_subnetwork block. |

---

##### `vpcSubnetwork`<sup>Optional</sup> <a name="vpcSubnetwork" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSources.property.vpcSubnetwork"></a>

```java
public AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork getVpcSubnetwork();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork</a>

vpc_subnetwork block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#vpc_subnetwork AccessContextManagerAccessLevelCondition#vpc_subnetwork}

---

### AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork <a name="AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_level_condition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork;

AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork.builder()
    .network(java.lang.String)
//  .vpcIpSubnetworks(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork.property.network">network</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork.property.vpcIpSubnetworks">vpcIpSubnetworks</a></code> | <code>java.util.List<java.lang.String></code> | CIDR block IP subnetwork specification. Must be IPv4. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

Required.

Network name to be allowed by this Access Level. Networks of foreign organizations requires 'compute.network.get' permission to be granted to caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#network AccessContextManagerAccessLevelCondition#network}

---

##### `vpcIpSubnetworks`<sup>Optional</sup> <a name="vpcIpSubnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork.property.vpcIpSubnetworks"></a>

```java
public java.util.List<java.lang.String> getVpcIpSubnetworks();
```

- *Type:* java.util.List<java.lang.String>

CIDR block IP subnetwork specification. Must be IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/access_context_manager_access_level_condition#vpc_ip_subnetworks AccessContextManagerAccessLevelCondition#vpc_ip_subnetworks}

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList <a name="AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_level_condition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList;

new AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.get"></a>

```java
public AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>>

---


### AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference <a name="AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_level_condition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference;

new AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.resetMinimumVersion">resetMinimumVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinimumVersion` <a name="resetMinimumVersion" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.resetMinimumVersion"></a>

```java
public void resetMinimumVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput">minimumVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.osTypeInput">osTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.minimumVersion">minimumVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.osType">osType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `minimumVersionInput`<sup>Optional</sup> <a name="minimumVersionInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput"></a>

```java
public java.lang.String getMinimumVersionInput();
```

- *Type:* java.lang.String

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.osTypeInput"></a>

```java
public java.lang.String getOsTypeInput();
```

- *Type:* java.lang.String

---

##### `minimumVersion`<sup>Required</sup> <a name="minimumVersion" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.minimumVersion"></a>

```java
public java.lang.String getMinimumVersion();
```

- *Type:* java.lang.String

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>

---


### AccessContextManagerAccessLevelConditionDevicePolicyOutputReference <a name="AccessContextManagerAccessLevelConditionDevicePolicyOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_level_condition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference;

new AccessContextManagerAccessLevelConditionDevicePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.putOsConstraints">putOsConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetAllowedDeviceManagementLevels">resetAllowedDeviceManagementLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetAllowedEncryptionStatuses">resetAllowedEncryptionStatuses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetOsConstraints">resetOsConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireAdminApproval">resetRequireAdminApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireCorpOwned">resetRequireCorpOwned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireScreenLock">resetRequireScreenLock</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOsConstraints` <a name="putOsConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.putOsConstraints"></a>

```java
public void putOsConstraints(IResolvable OR java.util.List<AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.putOsConstraints.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>>

---

##### `resetAllowedDeviceManagementLevels` <a name="resetAllowedDeviceManagementLevels" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetAllowedDeviceManagementLevels"></a>

```java
public void resetAllowedDeviceManagementLevels()
```

##### `resetAllowedEncryptionStatuses` <a name="resetAllowedEncryptionStatuses" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetAllowedEncryptionStatuses"></a>

```java
public void resetAllowedEncryptionStatuses()
```

##### `resetOsConstraints` <a name="resetOsConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetOsConstraints"></a>

```java
public void resetOsConstraints()
```

##### `resetRequireAdminApproval` <a name="resetRequireAdminApproval" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireAdminApproval"></a>

```java
public void resetRequireAdminApproval()
```

##### `resetRequireCorpOwned` <a name="resetRequireCorpOwned" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireCorpOwned"></a>

```java
public void resetRequireCorpOwned()
```

##### `resetRequireScreenLock` <a name="resetRequireScreenLock" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.resetRequireScreenLock"></a>

```java
public void resetRequireScreenLock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.osConstraints">osConstraints</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList">AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput">allowedDeviceManagementLevelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedEncryptionStatusesInput">allowedEncryptionStatusesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.osConstraintsInput">osConstraintsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireAdminApprovalInput">requireAdminApprovalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireCorpOwnedInput">requireCorpOwnedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireScreenLockInput">requireScreenLockInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedDeviceManagementLevels">allowedDeviceManagementLevels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedEncryptionStatuses">allowedEncryptionStatuses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireAdminApproval">requireAdminApproval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireCorpOwned">requireCorpOwned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireScreenLock">requireScreenLock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy">AccessContextManagerAccessLevelConditionDevicePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `osConstraints`<sup>Required</sup> <a name="osConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.osConstraints"></a>

```java
public AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList getOsConstraints();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList">AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList</a>

---

##### `allowedDeviceManagementLevelsInput`<sup>Optional</sup> <a name="allowedDeviceManagementLevelsInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedDeviceManagementLevelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedEncryptionStatusesInput`<sup>Optional</sup> <a name="allowedEncryptionStatusesInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedEncryptionStatusesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedEncryptionStatusesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `osConstraintsInput`<sup>Optional</sup> <a name="osConstraintsInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.osConstraintsInput"></a>

```java
public java.lang.Object getOsConstraintsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints">AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints</a>>

---

##### `requireAdminApprovalInput`<sup>Optional</sup> <a name="requireAdminApprovalInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireAdminApprovalInput"></a>

```java
public java.lang.Object getRequireAdminApprovalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireCorpOwnedInput`<sup>Optional</sup> <a name="requireCorpOwnedInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireCorpOwnedInput"></a>

```java
public java.lang.Object getRequireCorpOwnedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireScreenLockInput`<sup>Optional</sup> <a name="requireScreenLockInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireScreenLockInput"></a>

```java
public java.lang.Object getRequireScreenLockInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedDeviceManagementLevels`<sup>Required</sup> <a name="allowedDeviceManagementLevels" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedDeviceManagementLevels"></a>

```java
public java.util.List<java.lang.String> getAllowedDeviceManagementLevels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedEncryptionStatuses`<sup>Required</sup> <a name="allowedEncryptionStatuses" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.allowedEncryptionStatuses"></a>

```java
public java.util.List<java.lang.String> getAllowedEncryptionStatuses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requireAdminApproval`<sup>Required</sup> <a name="requireAdminApproval" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireAdminApproval"></a>

```java
public java.lang.Object getRequireAdminApproval();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireCorpOwned`<sup>Required</sup> <a name="requireCorpOwned" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireCorpOwned"></a>

```java
public java.lang.Object getRequireCorpOwned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireScreenLock`<sup>Required</sup> <a name="requireScreenLock" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.requireScreenLock"></a>

```java
public java.lang.Object getRequireScreenLock();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicyOutputReference.property.internalValue"></a>

```java
public AccessContextManagerAccessLevelConditionDevicePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionDevicePolicy">AccessContextManagerAccessLevelConditionDevicePolicy</a>

---


### AccessContextManagerAccessLevelConditionTimeoutsOutputReference <a name="AccessContextManagerAccessLevelConditionTimeoutsOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_level_condition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference;

new AccessContextManagerAccessLevelConditionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts">AccessContextManagerAccessLevelConditionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionTimeouts">AccessContextManagerAccessLevelConditionTimeouts</a>

---


### AccessContextManagerAccessLevelConditionVpcNetworkSourcesList <a name="AccessContextManagerAccessLevelConditionVpcNetworkSourcesList" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_level_condition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList;

new AccessContextManagerAccessLevelConditionVpcNetworkSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList.get"></a>

```java
public AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSources">AccessContextManagerAccessLevelConditionVpcNetworkSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSources">AccessContextManagerAccessLevelConditionVpcNetworkSources</a>>

---


### AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference <a name="AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_level_condition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference;

new AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.putVpcSubnetwork">putVpcSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.resetVpcSubnetwork">resetVpcSubnetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcSubnetwork` <a name="putVpcSubnetwork" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.putVpcSubnetwork"></a>

```java
public void putVpcSubnetwork(AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.putVpcSubnetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork</a>

---

##### `resetVpcSubnetwork` <a name="resetVpcSubnetwork" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.resetVpcSubnetwork"></a>

```java
public void resetVpcSubnetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.vpcSubnetwork">vpcSubnetwork</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference">AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.vpcSubnetworkInput">vpcSubnetworkInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSources">AccessContextManagerAccessLevelConditionVpcNetworkSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcSubnetwork`<sup>Required</sup> <a name="vpcSubnetwork" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.vpcSubnetwork"></a>

```java
public AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference getVpcSubnetwork();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference">AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference</a>

---

##### `vpcSubnetworkInput`<sup>Optional</sup> <a name="vpcSubnetworkInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.vpcSubnetworkInput"></a>

```java
public AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork getVpcSubnetworkInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSources">AccessContextManagerAccessLevelConditionVpcNetworkSources</a>

---


### AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference <a name="AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_access_level_condition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference;

new AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.resetVpcIpSubnetworks">resetVpcIpSubnetworks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpcIpSubnetworks` <a name="resetVpcIpSubnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.resetVpcIpSubnetworks"></a>

```java
public void resetVpcIpSubnetworks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworksInput">vpcIpSubnetworksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworks">vpcIpSubnetworks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `vpcIpSubnetworksInput`<sup>Optional</sup> <a name="vpcIpSubnetworksInput" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworksInput"></a>

```java
public java.util.List<java.lang.String> getVpcIpSubnetworksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `vpcIpSubnetworks`<sup>Required</sup> <a name="vpcIpSubnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworks"></a>

```java
public java.util.List<java.lang.String> getVpcIpSubnetworks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference.property.internalValue"></a>

```java
public AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevelCondition.AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork</a>

---



