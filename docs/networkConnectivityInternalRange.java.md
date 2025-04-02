# `networkConnectivityInternalRange` Submodule <a name="`networkConnectivityInternalRange` Submodule" id="@cdktf/provider-google.networkConnectivityInternalRange"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityInternalRange <a name="NetworkConnectivityInternalRange" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range google_network_connectivity_internal_range}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_internal_range.NetworkConnectivityInternalRange;

NetworkConnectivityInternalRange.Builder.create(Construct scope, java.lang.String id)
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
    .peering(java.lang.String)
    .usage(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ipCidrRange(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .migration(NetworkConnectivityInternalRangeMigration)
//  .overlaps(java.util.List<java.lang.String>)
//  .prefixLength(java.lang.Number)
//  .project(java.lang.String)
//  .targetCidrRange(java.util.List<java.lang.String>)
//  .timeouts(NetworkConnectivityInternalRangeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the policy based route. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.peering">peering</a></code> | <code>java.lang.String</code> | The type of peering set for this internal range. Possible values: ["FOR_SELF", "FOR_PEER", "NOT_SHARED"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.usage">usage</a></code> | <code>java.lang.String</code> | The type of usage set for this InternalRange. Possible values: ["FOR_VPC", "EXTERNAL_TO_VPC", "FOR_MIGRATION"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#id NetworkConnectivityInternalRange#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | The IP range that this internal range defines. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.migration">migration</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigration">NetworkConnectivityInternalRangeMigration</a></code> | migration block. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.overlaps">overlaps</a></code> | <code>java.util.List<java.lang.String></code> | Optional. Types of resources that are allowed to overlap with the current internal range. Possible values: ["OVERLAP_ROUTE_RANGE", "OVERLAP_EXISTING_SUBNET_RANGE"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.prefixLength">prefixLength</a></code> | <code>java.lang.Number</code> | An alternate to ipCidrRange. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#project NetworkConnectivityInternalRange#project}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.targetCidrRange">targetCidrRange</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the policy based route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#name NetworkConnectivityInternalRange#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.network"></a>

- *Type:* java.lang.String

Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#network NetworkConnectivityInternalRange#network}

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.peering"></a>

- *Type:* java.lang.String

The type of peering set for this internal range. Possible values: ["FOR_SELF", "FOR_PEER", "NOT_SHARED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#peering NetworkConnectivityInternalRange#peering}

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.usage"></a>

- *Type:* java.lang.String

The type of usage set for this InternalRange. Possible values: ["FOR_VPC", "EXTERNAL_TO_VPC", "FOR_MIGRATION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#usage NetworkConnectivityInternalRange#usage}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#description NetworkConnectivityInternalRange#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#id NetworkConnectivityInternalRange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipCidrRange`<sup>Optional</sup> <a name="ipCidrRange" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.ipCidrRange"></a>

- *Type:* java.lang.String

The IP range that this internal range defines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#ip_cidr_range NetworkConnectivityInternalRange#ip_cidr_range}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#labels NetworkConnectivityInternalRange#labels}

---

##### `migration`<sup>Optional</sup> <a name="migration" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.migration"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigration">NetworkConnectivityInternalRangeMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#migration NetworkConnectivityInternalRange#migration}

---

##### `overlaps`<sup>Optional</sup> <a name="overlaps" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.overlaps"></a>

- *Type:* java.util.List<java.lang.String>

Optional. Types of resources that are allowed to overlap with the current internal range. Possible values: ["OVERLAP_ROUTE_RANGE", "OVERLAP_EXISTING_SUBNET_RANGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#overlaps NetworkConnectivityInternalRange#overlaps}

---

##### `prefixLength`<sup>Optional</sup> <a name="prefixLength" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.prefixLength"></a>

- *Type:* java.lang.Number

An alternate to ipCidrRange.

Can be set when trying to create a reservation that automatically finds a free range of the given size.
If both ipCidrRange and prefixLength are set, there is an error if the range sizes do not match. Can also be used during updates to change the range size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#prefix_length NetworkConnectivityInternalRange#prefix_length}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#project NetworkConnectivityInternalRange#project}.

---

##### `targetCidrRange`<sup>Optional</sup> <a name="targetCidrRange" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.targetCidrRange"></a>

- *Type:* java.util.List<java.lang.String>

Optional.

Can be set to narrow down or pick a different address space while searching for a free range.
If not set, defaults to the "10.0.0.0/8" address space. This can be used to search in other rfc-1918 address spaces like "172.16.0.0/12" and "192.168.0.0/16" or non-rfc-1918 address spaces used in the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#target_cidr_range NetworkConnectivityInternalRange#target_cidr_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#timeouts NetworkConnectivityInternalRange#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.putMigration">putMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetIpCidrRange">resetIpCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetMigration">resetMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetOverlaps">resetOverlaps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetPrefixLength">resetPrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetTargetCidrRange">resetTargetCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMigration` <a name="putMigration" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.putMigration"></a>

```java
public void putMigration(NetworkConnectivityInternalRangeMigration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.putMigration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigration">NetworkConnectivityInternalRangeMigration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.putTimeouts"></a>

```java
public void putTimeouts(NetworkConnectivityInternalRangeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetId"></a>

```java
public void resetId()
```

##### `resetIpCidrRange` <a name="resetIpCidrRange" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetIpCidrRange"></a>

```java
public void resetIpCidrRange()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMigration` <a name="resetMigration" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetMigration"></a>

```java
public void resetMigration()
```

##### `resetOverlaps` <a name="resetOverlaps" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetOverlaps"></a>

```java
public void resetOverlaps()
```

##### `resetPrefixLength` <a name="resetPrefixLength" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetPrefixLength"></a>

```java
public void resetPrefixLength()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetProject"></a>

```java
public void resetProject()
```

##### `resetTargetCidrRange` <a name="resetTargetCidrRange" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetTargetCidrRange"></a>

```java
public void resetTargetCidrRange()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkConnectivityInternalRange resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_internal_range.NetworkConnectivityInternalRange;

NetworkConnectivityInternalRange.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_internal_range.NetworkConnectivityInternalRange;

NetworkConnectivityInternalRange.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_internal_range.NetworkConnectivityInternalRange;

NetworkConnectivityInternalRange.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_internal_range.NetworkConnectivityInternalRange;

NetworkConnectivityInternalRange.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkConnectivityInternalRange.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetworkConnectivityInternalRange resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkConnectivityInternalRange to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkConnectivityInternalRange that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityInternalRange to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.migration">migration</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference">NetworkConnectivityInternalRangeMigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference">NetworkConnectivityInternalRangeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.users">users</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.migrationInput">migrationInput</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigration">NetworkConnectivityInternalRangeMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.overlapsInput">overlapsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.peeringInput">peeringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.prefixLengthInput">prefixLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.targetCidrRangeInput">targetCidrRangeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.usageInput">usageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.overlaps">overlaps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.peering">peering</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.prefixLength">prefixLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.targetCidrRange">targetCidrRange</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.usage">usage</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `migration`<sup>Required</sup> <a name="migration" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.migration"></a>

```java
public NetworkConnectivityInternalRangeMigrationOutputReference getMigration();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference">NetworkConnectivityInternalRangeMigrationOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.timeouts"></a>

```java
public NetworkConnectivityInternalRangeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference">NetworkConnectivityInternalRangeTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.users"></a>

```java
public java.util.List<java.lang.String> getUsers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.ipCidrRangeInput"></a>

```java
public java.lang.String getIpCidrRangeInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `migrationInput`<sup>Optional</sup> <a name="migrationInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.migrationInput"></a>

```java
public NetworkConnectivityInternalRangeMigration getMigrationInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigration">NetworkConnectivityInternalRangeMigration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `overlapsInput`<sup>Optional</sup> <a name="overlapsInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.overlapsInput"></a>

```java
public java.util.List<java.lang.String> getOverlapsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `peeringInput`<sup>Optional</sup> <a name="peeringInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.peeringInput"></a>

```java
public java.lang.String getPeeringInput();
```

- *Type:* java.lang.String

---

##### `prefixLengthInput`<sup>Optional</sup> <a name="prefixLengthInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.prefixLengthInput"></a>

```java
public java.lang.Number getPrefixLengthInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `targetCidrRangeInput`<sup>Optional</sup> <a name="targetCidrRangeInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.targetCidrRangeInput"></a>

```java
public java.util.List<java.lang.String> getTargetCidrRangeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a>

---

##### `usageInput`<sup>Optional</sup> <a name="usageInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.usageInput"></a>

```java
public java.lang.String getUsageInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `overlaps`<sup>Required</sup> <a name="overlaps" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.overlaps"></a>

```java
public java.util.List<java.lang.String> getOverlaps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.peering"></a>

```java
public java.lang.String getPeering();
```

- *Type:* java.lang.String

---

##### `prefixLength`<sup>Required</sup> <a name="prefixLength" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.prefixLength"></a>

```java
public java.lang.Number getPrefixLength();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `targetCidrRange`<sup>Required</sup> <a name="targetCidrRange" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.targetCidrRange"></a>

```java
public java.util.List<java.lang.String> getTargetCidrRange();
```

- *Type:* java.util.List<java.lang.String>

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.usage"></a>

```java
public java.lang.String getUsage();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityInternalRangeConfig <a name="NetworkConnectivityInternalRangeConfig" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_internal_range.NetworkConnectivityInternalRangeConfig;

NetworkConnectivityInternalRangeConfig.builder()
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
    .peering(java.lang.String)
    .usage(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ipCidrRange(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .migration(NetworkConnectivityInternalRangeMigration)
//  .overlaps(java.util.List<java.lang.String>)
//  .prefixLength(java.lang.Number)
//  .project(java.lang.String)
//  .targetCidrRange(java.util.List<java.lang.String>)
//  .timeouts(NetworkConnectivityInternalRangeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the policy based route. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.network">network</a></code> | <code>java.lang.String</code> | Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.peering">peering</a></code> | <code>java.lang.String</code> | The type of peering set for this internal range. Possible values: ["FOR_SELF", "FOR_PEER", "NOT_SHARED"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.usage">usage</a></code> | <code>java.lang.String</code> | The type of usage set for this InternalRange. Possible values: ["FOR_VPC", "EXTERNAL_TO_VPC", "FOR_MIGRATION"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#id NetworkConnectivityInternalRange#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | The IP range that this internal range defines. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.migration">migration</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigration">NetworkConnectivityInternalRangeMigration</a></code> | migration block. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.overlaps">overlaps</a></code> | <code>java.util.List<java.lang.String></code> | Optional. Types of resources that are allowed to overlap with the current internal range. Possible values: ["OVERLAP_ROUTE_RANGE", "OVERLAP_EXISTING_SUBNET_RANGE"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.prefixLength">prefixLength</a></code> | <code>java.lang.Number</code> | An alternate to ipCidrRange. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#project NetworkConnectivityInternalRange#project}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.targetCidrRange">targetCidrRange</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the policy based route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#name NetworkConnectivityInternalRange#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#network NetworkConnectivityInternalRange#network}

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.peering"></a>

```java
public java.lang.String getPeering();
```

- *Type:* java.lang.String

The type of peering set for this internal range. Possible values: ["FOR_SELF", "FOR_PEER", "NOT_SHARED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#peering NetworkConnectivityInternalRange#peering}

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.usage"></a>

```java
public java.lang.String getUsage();
```

- *Type:* java.lang.String

The type of usage set for this InternalRange. Possible values: ["FOR_VPC", "EXTERNAL_TO_VPC", "FOR_MIGRATION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#usage NetworkConnectivityInternalRange#usage}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#description NetworkConnectivityInternalRange#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#id NetworkConnectivityInternalRange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipCidrRange`<sup>Optional</sup> <a name="ipCidrRange" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

The IP range that this internal range defines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#ip_cidr_range NetworkConnectivityInternalRange#ip_cidr_range}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#labels NetworkConnectivityInternalRange#labels}

---

##### `migration`<sup>Optional</sup> <a name="migration" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.migration"></a>

```java
public NetworkConnectivityInternalRangeMigration getMigration();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigration">NetworkConnectivityInternalRangeMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#migration NetworkConnectivityInternalRange#migration}

---

##### `overlaps`<sup>Optional</sup> <a name="overlaps" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.overlaps"></a>

```java
public java.util.List<java.lang.String> getOverlaps();
```

- *Type:* java.util.List<java.lang.String>

Optional. Types of resources that are allowed to overlap with the current internal range. Possible values: ["OVERLAP_ROUTE_RANGE", "OVERLAP_EXISTING_SUBNET_RANGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#overlaps NetworkConnectivityInternalRange#overlaps}

---

##### `prefixLength`<sup>Optional</sup> <a name="prefixLength" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.prefixLength"></a>

```java
public java.lang.Number getPrefixLength();
```

- *Type:* java.lang.Number

An alternate to ipCidrRange.

Can be set when trying to create a reservation that automatically finds a free range of the given size.
If both ipCidrRange and prefixLength are set, there is an error if the range sizes do not match. Can also be used during updates to change the range size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#prefix_length NetworkConnectivityInternalRange#prefix_length}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#project NetworkConnectivityInternalRange#project}.

---

##### `targetCidrRange`<sup>Optional</sup> <a name="targetCidrRange" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.targetCidrRange"></a>

```java
public java.util.List<java.lang.String> getTargetCidrRange();
```

- *Type:* java.util.List<java.lang.String>

Optional.

Can be set to narrow down or pick a different address space while searching for a free range.
If not set, defaults to the "10.0.0.0/8" address space. This can be used to search in other rfc-1918 address spaces like "172.16.0.0/12" and "192.168.0.0/16" or non-rfc-1918 address spaces used in the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#target_cidr_range NetworkConnectivityInternalRange#target_cidr_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.timeouts"></a>

```java
public NetworkConnectivityInternalRangeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#timeouts NetworkConnectivityInternalRange#timeouts}

---

### NetworkConnectivityInternalRangeMigration <a name="NetworkConnectivityInternalRangeMigration" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_internal_range.NetworkConnectivityInternalRangeMigration;

NetworkConnectivityInternalRangeMigration.builder()
    .source(java.lang.String)
    .target(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigration.property.source">source</a></code> | <code>java.lang.String</code> | Resource path as an URI of the source resource, for example a subnet. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigration.property.target">target</a></code> | <code>java.lang.String</code> | Resource path of the target resource. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigration.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Resource path as an URI of the source resource, for example a subnet.

The project for the source resource should match the project for the
InternalRange.
An example /projects/{project}/regions/{region}/subnetworks/{subnet}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#source NetworkConnectivityInternalRange#source}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigration.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Resource path of the target resource.

The target project can be
different, as in the cases when migrating to peer networks. The resource
may not exist yet.
For example /projects/{project}/regions/{region}/subnetworks/{subnet}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#target NetworkConnectivityInternalRange#target}

---

### NetworkConnectivityInternalRangeTimeouts <a name="NetworkConnectivityInternalRangeTimeouts" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_internal_range.NetworkConnectivityInternalRangeTimeouts;

NetworkConnectivityInternalRangeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#create NetworkConnectivityInternalRange#create}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#delete NetworkConnectivityInternalRange#delete}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#update NetworkConnectivityInternalRange#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#create NetworkConnectivityInternalRange#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#delete NetworkConnectivityInternalRange#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/network_connectivity_internal_range#update NetworkConnectivityInternalRange#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityInternalRangeMigrationOutputReference <a name="NetworkConnectivityInternalRangeMigrationOutputReference" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_internal_range.NetworkConnectivityInternalRangeMigrationOutputReference;

new NetworkConnectivityInternalRangeMigrationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigration">NetworkConnectivityInternalRangeMigration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigrationOutputReference.property.internalValue"></a>

```java
public NetworkConnectivityInternalRangeMigration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeMigration">NetworkConnectivityInternalRangeMigration</a>

---


### NetworkConnectivityInternalRangeTimeoutsOutputReference <a name="NetworkConnectivityInternalRangeTimeoutsOutputReference" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_internal_range.NetworkConnectivityInternalRangeTimeoutsOutputReference;

new NetworkConnectivityInternalRangeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a>

---



