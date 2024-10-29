# `computePacketMirroring` Submodule <a name="`computePacketMirroring` Submodule" id="@cdktf/provider-google.computePacketMirroring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputePacketMirroring <a name="ComputePacketMirroring" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring google_compute_packet_mirroring}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_packet_mirroring.ComputePacketMirroring;

ComputePacketMirroring.Builder.create(Construct scope, java.lang.String id)
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
    .collectorIlb(ComputePacketMirroringCollectorIlb)
    .mirroredResources(ComputePacketMirroringMirroredResources)
    .name(java.lang.String)
    .network(ComputePacketMirroringNetwork)
//  .description(java.lang.String)
//  .filter(ComputePacketMirroringFilter)
//  .id(java.lang.String)
//  .priority(java.lang.Number)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(ComputePacketMirroringTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.collectorIlb">collectorIlb</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a></code> | collector_ilb block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.mirroredResources">mirroredResources</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a></code> | mirrored_resources block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the packet mirroring rule. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.network">network</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the rule. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#id ComputePacketMirroring#id}. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Since only one rule can be active at a time, priority is used to break ties in the case of two rules that apply to the same instances. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#project ComputePacketMirroring#project}. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The Region in which the created address should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `collectorIlb`<sup>Required</sup> <a name="collectorIlb" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.collectorIlb"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a>

collector_ilb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#collector_ilb ComputePacketMirroring#collector_ilb}

---

##### `mirroredResources`<sup>Required</sup> <a name="mirroredResources" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.mirroredResources"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a>

mirrored_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#mirrored_resources ComputePacketMirroring#mirrored_resources}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the packet mirroring rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#name ComputePacketMirroring#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.network"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#network ComputePacketMirroring#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-readable description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#description ComputePacketMirroring#description}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#filter ComputePacketMirroring#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#id ComputePacketMirroring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Since only one rule can be active at a time, priority is used to break ties in the case of two rules that apply to the same instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#priority ComputePacketMirroring#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#project ComputePacketMirroring#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The Region in which the created address should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#region ComputePacketMirroring#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#timeouts ComputePacketMirroring#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putCollectorIlb">putCollectorIlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putMirroredResources">putMirroredResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCollectorIlb` <a name="putCollectorIlb" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putCollectorIlb"></a>

```java
public void putCollectorIlb(ComputePacketMirroringCollectorIlb value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putCollectorIlb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a>

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putFilter"></a>

```java
public void putFilter(ComputePacketMirroringFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a>

---

##### `putMirroredResources` <a name="putMirroredResources" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putMirroredResources"></a>

```java
public void putMirroredResources(ComputePacketMirroringMirroredResources value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putMirroredResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a>

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putNetwork"></a>

```java
public void putNetwork(ComputePacketMirroringNetwork value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putTimeouts"></a>

```java
public void putTimeouts(ComputePacketMirroringTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetId"></a>

```java
public void resetId()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputePacketMirroring resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_packet_mirroring.ComputePacketMirroring;

ComputePacketMirroring.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_packet_mirroring.ComputePacketMirroring;

ComputePacketMirroring.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_packet_mirroring.ComputePacketMirroring;

ComputePacketMirroring.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_packet_mirroring.ComputePacketMirroring;

ComputePacketMirroring.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputePacketMirroring.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComputePacketMirroring resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputePacketMirroring to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputePacketMirroring that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComputePacketMirroring to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.collectorIlb">collectorIlb</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference">ComputePacketMirroringCollectorIlbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference">ComputePacketMirroringFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.mirroredResources">mirroredResources</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference">ComputePacketMirroringMirroredResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.network">network</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference">ComputePacketMirroringNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference">ComputePacketMirroringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.collectorIlbInput">collectorIlbInput</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.mirroredResourcesInput">mirroredResourcesInput</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.networkInput">networkInput</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `collectorIlb`<sup>Required</sup> <a name="collectorIlb" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.collectorIlb"></a>

```java
public ComputePacketMirroringCollectorIlbOutputReference getCollectorIlb();
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference">ComputePacketMirroringCollectorIlbOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.filter"></a>

```java
public ComputePacketMirroringFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference">ComputePacketMirroringFilterOutputReference</a>

---

##### `mirroredResources`<sup>Required</sup> <a name="mirroredResources" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.mirroredResources"></a>

```java
public ComputePacketMirroringMirroredResourcesOutputReference getMirroredResources();
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference">ComputePacketMirroringMirroredResourcesOutputReference</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.network"></a>

```java
public ComputePacketMirroringNetworkOutputReference getNetwork();
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference">ComputePacketMirroringNetworkOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.timeouts"></a>

```java
public ComputePacketMirroringTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference">ComputePacketMirroringTimeoutsOutputReference</a>

---

##### `collectorIlbInput`<sup>Optional</sup> <a name="collectorIlbInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.collectorIlbInput"></a>

```java
public ComputePacketMirroringCollectorIlb getCollectorIlbInput();
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.filterInput"></a>

```java
public ComputePacketMirroringFilter getFilterInput();
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mirroredResourcesInput`<sup>Optional</sup> <a name="mirroredResourcesInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.mirroredResourcesInput"></a>

```java
public ComputePacketMirroringMirroredResources getMirroredResourcesInput();
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.networkInput"></a>

```java
public ComputePacketMirroringNetwork getNetworkInput();
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroring.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputePacketMirroringCollectorIlb <a name="ComputePacketMirroringCollectorIlb" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_packet_mirroring.ComputePacketMirroringCollectorIlb;

ComputePacketMirroringCollectorIlb.builder()
    .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb.property.url">url</a></code> | <code>java.lang.String</code> | The URL of the forwarding rule. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The URL of the forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#url ComputePacketMirroring#url}

---

### ComputePacketMirroringConfig <a name="ComputePacketMirroringConfig" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_packet_mirroring.ComputePacketMirroringConfig;

ComputePacketMirroringConfig.builder()
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
    .collectorIlb(ComputePacketMirroringCollectorIlb)
    .mirroredResources(ComputePacketMirroringMirroredResources)
    .name(java.lang.String)
    .network(ComputePacketMirroringNetwork)
//  .description(java.lang.String)
//  .filter(ComputePacketMirroringFilter)
//  .id(java.lang.String)
//  .priority(java.lang.Number)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(ComputePacketMirroringTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.collectorIlb">collectorIlb</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a></code> | collector_ilb block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.mirroredResources">mirroredResources</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a></code> | mirrored_resources block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the packet mirroring rule. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the rule. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#id ComputePacketMirroring#id}. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Since only one rule can be active at a time, priority is used to break ties in the case of two rules that apply to the same instances. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#project ComputePacketMirroring#project}. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.region">region</a></code> | <code>java.lang.String</code> | The Region in which the created address should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `collectorIlb`<sup>Required</sup> <a name="collectorIlb" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.collectorIlb"></a>

```java
public ComputePacketMirroringCollectorIlb getCollectorIlb();
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a>

collector_ilb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#collector_ilb ComputePacketMirroring#collector_ilb}

---

##### `mirroredResources`<sup>Required</sup> <a name="mirroredResources" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.mirroredResources"></a>

```java
public ComputePacketMirroringMirroredResources getMirroredResources();
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a>

mirrored_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#mirrored_resources ComputePacketMirroring#mirrored_resources}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the packet mirroring rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#name ComputePacketMirroring#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.network"></a>

```java
public ComputePacketMirroringNetwork getNetwork();
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#network ComputePacketMirroring#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#description ComputePacketMirroring#description}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.filter"></a>

```java
public ComputePacketMirroringFilter getFilter();
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#filter ComputePacketMirroring#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#id ComputePacketMirroring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Since only one rule can be active at a time, priority is used to break ties in the case of two rules that apply to the same instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#priority ComputePacketMirroring#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#project ComputePacketMirroring#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The Region in which the created address should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#region ComputePacketMirroring#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringConfig.property.timeouts"></a>

```java
public ComputePacketMirroringTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#timeouts ComputePacketMirroring#timeouts}

---

### ComputePacketMirroringFilter <a name="ComputePacketMirroringFilter" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_packet_mirroring.ComputePacketMirroringFilter;

ComputePacketMirroringFilter.builder()
//  .cidrRanges(java.util.List<java.lang.String>)
//  .direction(java.lang.String)
//  .ipProtocols(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.property.cidrRanges">cidrRanges</a></code> | <code>java.util.List<java.lang.String></code> | IP CIDR ranges that apply as a filter on the source (ingress) or destination (egress) IP in the IP header. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.property.direction">direction</a></code> | <code>java.lang.String</code> | Direction of traffic to mirror. Default value: "BOTH" Possible values: ["INGRESS", "EGRESS", "BOTH"]. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.property.ipProtocols">ipProtocols</a></code> | <code>java.util.List<java.lang.String></code> | Possible IP protocols including tcp, udp, icmp and esp. |

---

##### `cidrRanges`<sup>Optional</sup> <a name="cidrRanges" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.property.cidrRanges"></a>

```java
public java.util.List<java.lang.String> getCidrRanges();
```

- *Type:* java.util.List<java.lang.String>

IP CIDR ranges that apply as a filter on the source (ingress) or destination (egress) IP in the IP header.

Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#cidr_ranges ComputePacketMirroring#cidr_ranges}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Direction of traffic to mirror. Default value: "BOTH" Possible values: ["INGRESS", "EGRESS", "BOTH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#direction ComputePacketMirroring#direction}

---

##### `ipProtocols`<sup>Optional</sup> <a name="ipProtocols" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter.property.ipProtocols"></a>

```java
public java.util.List<java.lang.String> getIpProtocols();
```

- *Type:* java.util.List<java.lang.String>

Possible IP protocols including tcp, udp, icmp and esp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#ip_protocols ComputePacketMirroring#ip_protocols}

---

### ComputePacketMirroringMirroredResources <a name="ComputePacketMirroringMirroredResources" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_packet_mirroring.ComputePacketMirroringMirroredResources;

ComputePacketMirroringMirroredResources.builder()
//  .instances(IResolvable)
//  .instances(java.util.List<ComputePacketMirroringMirroredResourcesInstances>)
//  .subnetworks(IResolvable)
//  .subnetworks(java.util.List<ComputePacketMirroringMirroredResourcesSubnetworks>)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.property.instances">instances</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a>></code> | instances block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.property.subnetworks">subnetworks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a>></code> | subnetworks block. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | All instances with these tags will be mirrored. |

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.property.instances"></a>

```java
public java.lang.Object getInstances();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a>>

instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#instances ComputePacketMirroring#instances}

---

##### `subnetworks`<sup>Optional</sup> <a name="subnetworks" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.property.subnetworks"></a>

```java
public java.lang.Object getSubnetworks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a>>

subnetworks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#subnetworks ComputePacketMirroring#subnetworks}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

All instances with these tags will be mirrored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#tags ComputePacketMirroring#tags}

---

### ComputePacketMirroringMirroredResourcesInstances <a name="ComputePacketMirroringMirroredResourcesInstances" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_packet_mirroring.ComputePacketMirroringMirroredResourcesInstances;

ComputePacketMirroringMirroredResourcesInstances.builder()
    .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances.property.url">url</a></code> | <code>java.lang.String</code> | The URL of the instances where this rule should be active. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The URL of the instances where this rule should be active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#url ComputePacketMirroring#url}

---

### ComputePacketMirroringMirroredResourcesSubnetworks <a name="ComputePacketMirroringMirroredResourcesSubnetworks" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_packet_mirroring.ComputePacketMirroringMirroredResourcesSubnetworks;

ComputePacketMirroringMirroredResourcesSubnetworks.builder()
    .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks.property.url">url</a></code> | <code>java.lang.String</code> | The URL of the subnetwork where this rule should be active. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The URL of the subnetwork where this rule should be active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#url ComputePacketMirroring#url}

---

### ComputePacketMirroringNetwork <a name="ComputePacketMirroringNetwork" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_packet_mirroring.ComputePacketMirroringNetwork;

ComputePacketMirroringNetwork.builder()
    .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork.property.url">url</a></code> | <code>java.lang.String</code> | The full self_link URL of the network where this rule is active. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The full self_link URL of the network where this rule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#url ComputePacketMirroring#url}

---

### ComputePacketMirroringTimeouts <a name="ComputePacketMirroringTimeouts" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_packet_mirroring.ComputePacketMirroringTimeouts;

ComputePacketMirroringTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#create ComputePacketMirroring#create}. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#delete ComputePacketMirroring#delete}. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#update ComputePacketMirroring#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#create ComputePacketMirroring#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#delete ComputePacketMirroring#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/compute_packet_mirroring#update ComputePacketMirroring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputePacketMirroringCollectorIlbOutputReference <a name="ComputePacketMirroringCollectorIlbOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_packet_mirroring.ComputePacketMirroringCollectorIlbOutputReference;

new ComputePacketMirroringCollectorIlbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlbOutputReference.property.internalValue"></a>

```java
public ComputePacketMirroringCollectorIlb getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringCollectorIlb">ComputePacketMirroringCollectorIlb</a>

---


### ComputePacketMirroringFilterOutputReference <a name="ComputePacketMirroringFilterOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_packet_mirroring.ComputePacketMirroringFilterOutputReference;

new ComputePacketMirroringFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resetCidrRanges">resetCidrRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resetIpProtocols">resetIpProtocols</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrRanges` <a name="resetCidrRanges" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resetCidrRanges"></a>

```java
public void resetCidrRanges()
```

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetIpProtocols` <a name="resetIpProtocols" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.resetIpProtocols"></a>

```java
public void resetIpProtocols()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.cidrRangesInput">cidrRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.ipProtocolsInput">ipProtocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.cidrRanges">cidrRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.ipProtocols">ipProtocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrRangesInput`<sup>Optional</sup> <a name="cidrRangesInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.cidrRangesInput"></a>

```java
public java.util.List<java.lang.String> getCidrRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `ipProtocolsInput`<sup>Optional</sup> <a name="ipProtocolsInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.ipProtocolsInput"></a>

```java
public java.util.List<java.lang.String> getIpProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cidrRanges`<sup>Required</sup> <a name="cidrRanges" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.cidrRanges"></a>

```java
public java.util.List<java.lang.String> getCidrRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `ipProtocols`<sup>Required</sup> <a name="ipProtocols" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.ipProtocols"></a>

```java
public java.util.List<java.lang.String> getIpProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilterOutputReference.property.internalValue"></a>

```java
public ComputePacketMirroringFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringFilter">ComputePacketMirroringFilter</a>

---


### ComputePacketMirroringMirroredResourcesInstancesList <a name="ComputePacketMirroringMirroredResourcesInstancesList" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_packet_mirroring.ComputePacketMirroringMirroredResourcesInstancesList;

new ComputePacketMirroringMirroredResourcesInstancesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.get"></a>

```java
public ComputePacketMirroringMirroredResourcesInstancesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a>>

---


### ComputePacketMirroringMirroredResourcesInstancesOutputReference <a name="ComputePacketMirroringMirroredResourcesInstancesOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_packet_mirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference;

new ComputePacketMirroringMirroredResourcesInstancesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a>

---


### ComputePacketMirroringMirroredResourcesOutputReference <a name="ComputePacketMirroringMirroredResourcesOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_packet_mirroring.ComputePacketMirroringMirroredResourcesOutputReference;

new ComputePacketMirroringMirroredResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.putInstances">putInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.putSubnetworks">putSubnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resetInstances">resetInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resetSubnetworks">resetSubnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInstances` <a name="putInstances" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.putInstances"></a>

```java
public void putInstances(IResolvable OR java.util.List<ComputePacketMirroringMirroredResourcesInstances> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.putInstances.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a>>

---

##### `putSubnetworks` <a name="putSubnetworks" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.putSubnetworks"></a>

```java
public void putSubnetworks(IResolvable OR java.util.List<ComputePacketMirroringMirroredResourcesSubnetworks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.putSubnetworks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a>>

---

##### `resetInstances` <a name="resetInstances" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resetInstances"></a>

```java
public void resetInstances()
```

##### `resetSubnetworks` <a name="resetSubnetworks" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resetSubnetworks"></a>

```java
public void resetSubnetworks()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.instances">instances</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList">ComputePacketMirroringMirroredResourcesInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.subnetworks">subnetworks</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList">ComputePacketMirroringMirroredResourcesSubnetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.instancesInput">instancesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.subnetworksInput">subnetworksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.instances"></a>

```java
public ComputePacketMirroringMirroredResourcesInstancesList getInstances();
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstancesList">ComputePacketMirroringMirroredResourcesInstancesList</a>

---

##### `subnetworks`<sup>Required</sup> <a name="subnetworks" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.subnetworks"></a>

```java
public ComputePacketMirroringMirroredResourcesSubnetworksList getSubnetworks();
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList">ComputePacketMirroringMirroredResourcesSubnetworksList</a>

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.instancesInput"></a>

```java
public java.lang.Object getInstancesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesInstances">ComputePacketMirroringMirroredResourcesInstances</a>>

---

##### `subnetworksInput`<sup>Optional</sup> <a name="subnetworksInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.subnetworksInput"></a>

```java
public java.lang.Object getSubnetworksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesOutputReference.property.internalValue"></a>

```java
public ComputePacketMirroringMirroredResources getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResources">ComputePacketMirroringMirroredResources</a>

---


### ComputePacketMirroringMirroredResourcesSubnetworksList <a name="ComputePacketMirroringMirroredResourcesSubnetworksList" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_packet_mirroring.ComputePacketMirroringMirroredResourcesSubnetworksList;

new ComputePacketMirroringMirroredResourcesSubnetworksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.get"></a>

```java
public ComputePacketMirroringMirroredResourcesSubnetworksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a>>

---


### ComputePacketMirroringMirroredResourcesSubnetworksOutputReference <a name="ComputePacketMirroringMirroredResourcesSubnetworksOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_packet_mirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference;

new ComputePacketMirroringMirroredResourcesSubnetworksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringMirroredResourcesSubnetworks">ComputePacketMirroringMirroredResourcesSubnetworks</a>

---


### ComputePacketMirroringNetworkOutputReference <a name="ComputePacketMirroringNetworkOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_packet_mirroring.ComputePacketMirroringNetworkOutputReference;

new ComputePacketMirroringNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetworkOutputReference.property.internalValue"></a>

```java
public ComputePacketMirroringNetwork getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringNetwork">ComputePacketMirroringNetwork</a>

---


### ComputePacketMirroringTimeoutsOutputReference <a name="ComputePacketMirroringTimeoutsOutputReference" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_packet_mirroring.ComputePacketMirroringTimeoutsOutputReference;

new ComputePacketMirroringTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computePacketMirroring.ComputePacketMirroringTimeouts">ComputePacketMirroringTimeouts</a>

---



