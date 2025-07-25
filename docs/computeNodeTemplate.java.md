# `computeNodeTemplate` Submodule <a name="`computeNodeTemplate` Submodule" id="@cdktf/provider-google.computeNodeTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNodeTemplate <a name="ComputeNodeTemplate" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template google_compute_node_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_node_template.ComputeNodeTemplate;

ComputeNodeTemplate.Builder.create(Construct scope, java.lang.String id)
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
//  .accelerators(IResolvable)
//  .accelerators(java.util.List<ComputeNodeTemplateAccelerators>)
//  .cpuOvercommitType(java.lang.String)
//  .description(java.lang.String)
//  .disks(IResolvable)
//  .disks(java.util.List<ComputeNodeTemplateDisks>)
//  .id(java.lang.String)
//  .nodeAffinityLabels(java.util.Map<java.lang.String, java.lang.String>)
//  .nodeType(java.lang.String)
//  .nodeTypeFlexibility(ComputeNodeTemplateNodeTypeFlexibility)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .serverBinding(ComputeNodeTemplateServerBinding)
//  .timeouts(ComputeNodeTemplateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.accelerators">accelerators</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators">ComputeNodeTemplateAccelerators</a>></code> | accelerators block. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.cpuOvercommitType">cpuOvercommitType</a></code> | <code>java.lang.String</code> | CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"]. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional textual description of the resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.disks">disks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisks">ComputeNodeTemplateDisks</a>></code> | disks block. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#id ComputeNodeTemplate#id}. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.nodeAffinityLabels">nodeAffinityLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to use for node affinity, which will be used in instance scheduling. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.nodeType">nodeType</a></code> | <code>java.lang.String</code> | Node type to use for nodes group that are created from this template. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.nodeTypeFlexibility">nodeTypeFlexibility</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a></code> | node_type_flexibility block. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#project ComputeNodeTemplate#project}. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where nodes using the node template will be created. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.serverBinding">serverBinding</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a></code> | server_binding block. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts">ComputeNodeTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#name ComputeNodeTemplate#name}

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.accelerators"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators">ComputeNodeTemplateAccelerators</a>>

accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#accelerators ComputeNodeTemplate#accelerators}

---

##### `cpuOvercommitType`<sup>Optional</sup> <a name="cpuOvercommitType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.cpuOvercommitType"></a>

- *Type:* java.lang.String

CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#cpu_overcommit_type ComputeNodeTemplate#cpu_overcommit_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional textual description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#description ComputeNodeTemplate#description}

---

##### `disks`<sup>Optional</sup> <a name="disks" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.disks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisks">ComputeNodeTemplateDisks</a>>

disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#disks ComputeNodeTemplate#disks}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#id ComputeNodeTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nodeAffinityLabels`<sup>Optional</sup> <a name="nodeAffinityLabels" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.nodeAffinityLabels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to use for node affinity, which will be used in instance scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#node_affinity_labels ComputeNodeTemplate#node_affinity_labels}

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.nodeType"></a>

- *Type:* java.lang.String

Node type to use for nodes group that are created from this template.

Only one of nodeTypeFlexibility and nodeType can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#node_type ComputeNodeTemplate#node_type}

---

##### `nodeTypeFlexibility`<sup>Optional</sup> <a name="nodeTypeFlexibility" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.nodeTypeFlexibility"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a>

node_type_flexibility block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#node_type_flexibility ComputeNodeTemplate#node_type_flexibility}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#project ComputeNodeTemplate#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where nodes using the node template will be created. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#region ComputeNodeTemplate#region}

---

##### `serverBinding`<sup>Optional</sup> <a name="serverBinding" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.serverBinding"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a>

server_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#server_binding ComputeNodeTemplate#server_binding}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts">ComputeNodeTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#timeouts ComputeNodeTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putAccelerators">putAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putDisks">putDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putNodeTypeFlexibility">putNodeTypeFlexibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putServerBinding">putServerBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetAccelerators">resetAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetCpuOvercommitType">resetCpuOvercommitType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetDisks">resetDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetNodeAffinityLabels">resetNodeAffinityLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetNodeType">resetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetNodeTypeFlexibility">resetNodeTypeFlexibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetServerBinding">resetServerBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccelerators` <a name="putAccelerators" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putAccelerators"></a>

```java
public void putAccelerators(IResolvable OR java.util.List<ComputeNodeTemplateAccelerators> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putAccelerators.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators">ComputeNodeTemplateAccelerators</a>>

---

##### `putDisks` <a name="putDisks" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putDisks"></a>

```java
public void putDisks(IResolvable OR java.util.List<ComputeNodeTemplateDisks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putDisks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisks">ComputeNodeTemplateDisks</a>>

---

##### `putNodeTypeFlexibility` <a name="putNodeTypeFlexibility" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putNodeTypeFlexibility"></a>

```java
public void putNodeTypeFlexibility(ComputeNodeTemplateNodeTypeFlexibility value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putNodeTypeFlexibility.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a>

---

##### `putServerBinding` <a name="putServerBinding" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putServerBinding"></a>

```java
public void putServerBinding(ComputeNodeTemplateServerBinding value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putServerBinding.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putTimeouts"></a>

```java
public void putTimeouts(ComputeNodeTemplateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts">ComputeNodeTemplateTimeouts</a>

---

##### `resetAccelerators` <a name="resetAccelerators" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetAccelerators"></a>

```java
public void resetAccelerators()
```

##### `resetCpuOvercommitType` <a name="resetCpuOvercommitType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetCpuOvercommitType"></a>

```java
public void resetCpuOvercommitType()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisks` <a name="resetDisks" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetDisks"></a>

```java
public void resetDisks()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetId"></a>

```java
public void resetId()
```

##### `resetNodeAffinityLabels` <a name="resetNodeAffinityLabels" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetNodeAffinityLabels"></a>

```java
public void resetNodeAffinityLabels()
```

##### `resetNodeType` <a name="resetNodeType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetNodeType"></a>

```java
public void resetNodeType()
```

##### `resetNodeTypeFlexibility` <a name="resetNodeTypeFlexibility" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetNodeTypeFlexibility"></a>

```java
public void resetNodeTypeFlexibility()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetServerBinding` <a name="resetServerBinding" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetServerBinding"></a>

```java
public void resetServerBinding()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeNodeTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_node_template.ComputeNodeTemplate;

ComputeNodeTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_node_template.ComputeNodeTemplate;

ComputeNodeTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_node_template.ComputeNodeTemplate;

ComputeNodeTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_node_template.ComputeNodeTemplate;

ComputeNodeTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeNodeTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComputeNodeTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeNodeTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeNodeTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComputeNodeTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.accelerators">accelerators</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList">ComputeNodeTemplateAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.disks">disks</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList">ComputeNodeTemplateDisksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeTypeFlexibility">nodeTypeFlexibility</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference">ComputeNodeTemplateNodeTypeFlexibilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.serverBinding">serverBinding</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference">ComputeNodeTemplateServerBindingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference">ComputeNodeTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.acceleratorsInput">acceleratorsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators">ComputeNodeTemplateAccelerators</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.cpuOvercommitTypeInput">cpuOvercommitTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.disksInput">disksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisks">ComputeNodeTemplateDisks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeAffinityLabelsInput">nodeAffinityLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeTypeFlexibilityInput">nodeTypeFlexibilityInput</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeTypeInput">nodeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.serverBindingInput">serverBindingInput</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts">ComputeNodeTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.cpuOvercommitType">cpuOvercommitType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeAffinityLabels">nodeAffinityLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.accelerators"></a>

```java
public ComputeNodeTemplateAcceleratorsList getAccelerators();
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList">ComputeNodeTemplateAcceleratorsList</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `disks`<sup>Required</sup> <a name="disks" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.disks"></a>

```java
public ComputeNodeTemplateDisksList getDisks();
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList">ComputeNodeTemplateDisksList</a>

---

##### `nodeTypeFlexibility`<sup>Required</sup> <a name="nodeTypeFlexibility" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeTypeFlexibility"></a>

```java
public ComputeNodeTemplateNodeTypeFlexibilityOutputReference getNodeTypeFlexibility();
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference">ComputeNodeTemplateNodeTypeFlexibilityOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `serverBinding`<sup>Required</sup> <a name="serverBinding" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.serverBinding"></a>

```java
public ComputeNodeTemplateServerBindingOutputReference getServerBinding();
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference">ComputeNodeTemplateServerBindingOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.timeouts"></a>

```java
public ComputeNodeTemplateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference">ComputeNodeTemplateTimeoutsOutputReference</a>

---

##### `acceleratorsInput`<sup>Optional</sup> <a name="acceleratorsInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.acceleratorsInput"></a>

```java
public java.lang.Object getAcceleratorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators">ComputeNodeTemplateAccelerators</a>>

---

##### `cpuOvercommitTypeInput`<sup>Optional</sup> <a name="cpuOvercommitTypeInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.cpuOvercommitTypeInput"></a>

```java
public java.lang.String getCpuOvercommitTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disksInput`<sup>Optional</sup> <a name="disksInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.disksInput"></a>

```java
public java.lang.Object getDisksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisks">ComputeNodeTemplateDisks</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nodeAffinityLabelsInput`<sup>Optional</sup> <a name="nodeAffinityLabelsInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeAffinityLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNodeAffinityLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nodeTypeFlexibilityInput`<sup>Optional</sup> <a name="nodeTypeFlexibilityInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeTypeFlexibilityInput"></a>

```java
public ComputeNodeTemplateNodeTypeFlexibility getNodeTypeFlexibilityInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a>

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeTypeInput"></a>

```java
public java.lang.String getNodeTypeInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `serverBindingInput`<sup>Optional</sup> <a name="serverBindingInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.serverBindingInput"></a>

```java
public ComputeNodeTemplateServerBinding getServerBindingInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts">ComputeNodeTemplateTimeouts</a>

---

##### `cpuOvercommitType`<sup>Required</sup> <a name="cpuOvercommitType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.cpuOvercommitType"></a>

```java
public java.lang.String getCpuOvercommitType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeAffinityLabels`<sup>Required</sup> <a name="nodeAffinityLabels" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeAffinityLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNodeAffinityLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNodeTemplateAccelerators <a name="ComputeNodeTemplateAccelerators" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_node_template.ComputeNodeTemplateAccelerators;

ComputeNodeTemplateAccelerators.builder()
//  .acceleratorCount(java.lang.Number)
//  .acceleratorType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators.property.acceleratorCount">acceleratorCount</a></code> | <code>java.lang.Number</code> | The number of the guest accelerator cards exposed to this node template. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | Full or partial URL of the accelerator type resource to expose to this node template. |

---

##### `acceleratorCount`<sup>Optional</sup> <a name="acceleratorCount" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators.property.acceleratorCount"></a>

```java
public java.lang.Number getAcceleratorCount();
```

- *Type:* java.lang.Number

The number of the guest accelerator cards exposed to this node template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#accelerator_count ComputeNodeTemplate#accelerator_count}

---

##### `acceleratorType`<sup>Optional</sup> <a name="acceleratorType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

Full or partial URL of the accelerator type resource to expose to this node template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#accelerator_type ComputeNodeTemplate#accelerator_type}

---

### ComputeNodeTemplateConfig <a name="ComputeNodeTemplateConfig" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_node_template.ComputeNodeTemplateConfig;

ComputeNodeTemplateConfig.builder()
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
//  .accelerators(IResolvable)
//  .accelerators(java.util.List<ComputeNodeTemplateAccelerators>)
//  .cpuOvercommitType(java.lang.String)
//  .description(java.lang.String)
//  .disks(IResolvable)
//  .disks(java.util.List<ComputeNodeTemplateDisks>)
//  .id(java.lang.String)
//  .nodeAffinityLabels(java.util.Map<java.lang.String, java.lang.String>)
//  .nodeType(java.lang.String)
//  .nodeTypeFlexibility(ComputeNodeTemplateNodeTypeFlexibility)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .serverBinding(ComputeNodeTemplateServerBinding)
//  .timeouts(ComputeNodeTemplateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.accelerators">accelerators</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators">ComputeNodeTemplateAccelerators</a>></code> | accelerators block. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.cpuOvercommitType">cpuOvercommitType</a></code> | <code>java.lang.String</code> | CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"]. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional textual description of the resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.disks">disks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisks">ComputeNodeTemplateDisks</a>></code> | disks block. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#id ComputeNodeTemplate#id}. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.nodeAffinityLabels">nodeAffinityLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to use for node affinity, which will be used in instance scheduling. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | Node type to use for nodes group that are created from this template. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.nodeTypeFlexibility">nodeTypeFlexibility</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a></code> | node_type_flexibility block. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#project ComputeNodeTemplate#project}. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where nodes using the node template will be created. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.serverBinding">serverBinding</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a></code> | server_binding block. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts">ComputeNodeTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#name ComputeNodeTemplate#name}

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.accelerators"></a>

```java
public java.lang.Object getAccelerators();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators">ComputeNodeTemplateAccelerators</a>>

accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#accelerators ComputeNodeTemplate#accelerators}

---

##### `cpuOvercommitType`<sup>Optional</sup> <a name="cpuOvercommitType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.cpuOvercommitType"></a>

```java
public java.lang.String getCpuOvercommitType();
```

- *Type:* java.lang.String

CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#cpu_overcommit_type ComputeNodeTemplate#cpu_overcommit_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional textual description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#description ComputeNodeTemplate#description}

---

##### `disks`<sup>Optional</sup> <a name="disks" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.disks"></a>

```java
public java.lang.Object getDisks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisks">ComputeNodeTemplateDisks</a>>

disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#disks ComputeNodeTemplate#disks}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#id ComputeNodeTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nodeAffinityLabels`<sup>Optional</sup> <a name="nodeAffinityLabels" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.nodeAffinityLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNodeAffinityLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to use for node affinity, which will be used in instance scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#node_affinity_labels ComputeNodeTemplate#node_affinity_labels}

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

Node type to use for nodes group that are created from this template.

Only one of nodeTypeFlexibility and nodeType can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#node_type ComputeNodeTemplate#node_type}

---

##### `nodeTypeFlexibility`<sup>Optional</sup> <a name="nodeTypeFlexibility" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.nodeTypeFlexibility"></a>

```java
public ComputeNodeTemplateNodeTypeFlexibility getNodeTypeFlexibility();
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a>

node_type_flexibility block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#node_type_flexibility ComputeNodeTemplate#node_type_flexibility}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#project ComputeNodeTemplate#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where nodes using the node template will be created. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#region ComputeNodeTemplate#region}

---

##### `serverBinding`<sup>Optional</sup> <a name="serverBinding" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.serverBinding"></a>

```java
public ComputeNodeTemplateServerBinding getServerBinding();
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a>

server_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#server_binding ComputeNodeTemplate#server_binding}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.timeouts"></a>

```java
public ComputeNodeTemplateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts">ComputeNodeTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#timeouts ComputeNodeTemplate#timeouts}

---

### ComputeNodeTemplateDisks <a name="ComputeNodeTemplateDisks" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_node_template.ComputeNodeTemplateDisks;

ComputeNodeTemplateDisks.builder()
//  .diskCount(java.lang.Number)
//  .diskSizeGb(java.lang.Number)
//  .diskType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisks.property.diskCount">diskCount</a></code> | <code>java.lang.Number</code> | Specifies the number of such disks. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisks.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | Specifies the size of the disk in base-2 GB. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisks.property.diskType">diskType</a></code> | <code>java.lang.String</code> | Specifies the desired disk type on the node. |

---

##### `diskCount`<sup>Optional</sup> <a name="diskCount" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisks.property.diskCount"></a>

```java
public java.lang.Number getDiskCount();
```

- *Type:* java.lang.Number

Specifies the number of such disks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#disk_count ComputeNodeTemplate#disk_count}

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisks.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

Specifies the size of the disk in base-2 GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#disk_size_gb ComputeNodeTemplate#disk_size_gb}

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisks.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

Specifies the desired disk type on the node.

This disk type must be a local storage type (e.g.: local-ssd). Note that for nodeTemplates, this should be the name of the disk type and not its URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#disk_type ComputeNodeTemplate#disk_type}

---

### ComputeNodeTemplateNodeTypeFlexibility <a name="ComputeNodeTemplateNodeTypeFlexibility" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_node_template.ComputeNodeTemplateNodeTypeFlexibility;

ComputeNodeTemplateNodeTypeFlexibility.builder()
//  .cpus(java.lang.String)
//  .memory(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility.property.cpus">cpus</a></code> | <code>java.lang.String</code> | Number of virtual CPUs to use. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility.property.memory">memory</a></code> | <code>java.lang.String</code> | Physical memory available to the node, defined in MB. |

---

##### `cpus`<sup>Optional</sup> <a name="cpus" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility.property.cpus"></a>

```java
public java.lang.String getCpus();
```

- *Type:* java.lang.String

Number of virtual CPUs to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#cpus ComputeNodeTemplate#cpus}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

Physical memory available to the node, defined in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#memory ComputeNodeTemplate#memory}

---

### ComputeNodeTemplateServerBinding <a name="ComputeNodeTemplateServerBinding" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_node_template.ComputeNodeTemplateServerBinding;

ComputeNodeTemplateServerBinding.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding.property.type">type</a></code> | <code>java.lang.String</code> | Type of server binding policy. If 'RESTART_NODE_ON_ANY_SERVER', nodes using this template will restart on any physical server following a maintenance event. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of server binding policy. If 'RESTART_NODE_ON_ANY_SERVER', nodes using this template will restart on any physical server following a maintenance event.

If 'RESTART_NODE_ON_MINIMAL_SERVER', nodes using this template
will restart on the same physical server following a maintenance
event, instead of being live migrated to or restarted on a new
physical server. This option may be useful if you are using
software licenses tied to the underlying server characteristics
such as physical sockets or cores, to avoid the need for
additional licenses when maintenance occurs. However, VMs on such
nodes will experience outages while maintenance is applied. Possible values: ["RESTART_NODE_ON_ANY_SERVER", "RESTART_NODE_ON_MINIMAL_SERVERS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#type ComputeNodeTemplate#type}

---

### ComputeNodeTemplateTimeouts <a name="ComputeNodeTemplateTimeouts" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_node_template.ComputeNodeTemplateTimeouts;

ComputeNodeTemplateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#create ComputeNodeTemplate#create}. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#delete ComputeNodeTemplate#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#create ComputeNodeTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_node_template#delete ComputeNodeTemplate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNodeTemplateAcceleratorsList <a name="ComputeNodeTemplateAcceleratorsList" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_node_template.ComputeNodeTemplateAcceleratorsList;

new ComputeNodeTemplateAcceleratorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.get"></a>

```java
public ComputeNodeTemplateAcceleratorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators">ComputeNodeTemplateAccelerators</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators">ComputeNodeTemplateAccelerators</a>>

---


### ComputeNodeTemplateAcceleratorsOutputReference <a name="ComputeNodeTemplateAcceleratorsOutputReference" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_node_template.ComputeNodeTemplateAcceleratorsOutputReference;

new ComputeNodeTemplateAcceleratorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.resetAcceleratorCount">resetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.resetAcceleratorType">resetAcceleratorType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcceleratorCount` <a name="resetAcceleratorCount" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.resetAcceleratorCount"></a>

```java
public void resetAcceleratorCount()
```

##### `resetAcceleratorType` <a name="resetAcceleratorType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.resetAcceleratorType"></a>

```java
public void resetAcceleratorType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.acceleratorCountInput">acceleratorCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators">ComputeNodeTemplateAccelerators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceleratorCountInput`<sup>Optional</sup> <a name="acceleratorCountInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.acceleratorCountInput"></a>

```java
public java.lang.Number getAcceleratorCountInput();
```

- *Type:* java.lang.Number

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.acceleratorTypeInput"></a>

```java
public java.lang.String getAcceleratorTypeInput();
```

- *Type:* java.lang.String

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.acceleratorCount"></a>

```java
public java.lang.Number getAcceleratorCount();
```

- *Type:* java.lang.Number

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators">ComputeNodeTemplateAccelerators</a>

---


### ComputeNodeTemplateDisksList <a name="ComputeNodeTemplateDisksList" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_node_template.ComputeNodeTemplateDisksList;

new ComputeNodeTemplateDisksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList.get"></a>

```java
public ComputeNodeTemplateDisksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisks">ComputeNodeTemplateDisks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisks">ComputeNodeTemplateDisks</a>>

---


### ComputeNodeTemplateDisksOutputReference <a name="ComputeNodeTemplateDisksOutputReference" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_node_template.ComputeNodeTemplateDisksOutputReference;

new ComputeNodeTemplateDisksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.resetDiskCount">resetDiskCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskCount` <a name="resetDiskCount" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.resetDiskCount"></a>

```java
public void resetDiskCount()
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.resetDiskSizeGb"></a>

```java
public void resetDiskSizeGb()
```

##### `resetDiskType` <a name="resetDiskType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.resetDiskType"></a>

```java
public void resetDiskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.property.diskCountInput">diskCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.property.diskCount">diskCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.property.diskType">diskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisks">ComputeNodeTemplateDisks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskCountInput`<sup>Optional</sup> <a name="diskCountInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.property.diskCountInput"></a>

```java
public java.lang.Number getDiskCountInput();
```

- *Type:* java.lang.Number

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.property.diskSizeGbInput"></a>

```java
public java.lang.Number getDiskSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.property.diskTypeInput"></a>

```java
public java.lang.String getDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `diskCount`<sup>Required</sup> <a name="diskCount" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.property.diskCount"></a>

```java
public java.lang.Number getDiskCount();
```

- *Type:* java.lang.Number

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.property.diskSizeGb"></a>

```java
public java.lang.Number getDiskSizeGb();
```

- *Type:* java.lang.Number

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateDisks">ComputeNodeTemplateDisks</a>

---


### ComputeNodeTemplateNodeTypeFlexibilityOutputReference <a name="ComputeNodeTemplateNodeTypeFlexibilityOutputReference" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_node_template.ComputeNodeTemplateNodeTypeFlexibilityOutputReference;

new ComputeNodeTemplateNodeTypeFlexibilityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetCpus">resetCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetMemory">resetMemory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpus` <a name="resetCpus" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetCpus"></a>

```java
public void resetCpus()
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetMemory"></a>

```java
public void resetMemory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.localSsd">localSsd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpusInput">cpusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memoryInput">memoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpus">cpus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memory">memory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localSsd`<sup>Required</sup> <a name="localSsd" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.localSsd"></a>

```java
public java.lang.String getLocalSsd();
```

- *Type:* java.lang.String

---

##### `cpusInput`<sup>Optional</sup> <a name="cpusInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpusInput"></a>

```java
public java.lang.String getCpusInput();
```

- *Type:* java.lang.String

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memoryInput"></a>

```java
public java.lang.String getMemoryInput();
```

- *Type:* java.lang.String

---

##### `cpus`<sup>Required</sup> <a name="cpus" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpus"></a>

```java
public java.lang.String getCpus();
```

- *Type:* java.lang.String

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.internalValue"></a>

```java
public ComputeNodeTemplateNodeTypeFlexibility getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a>

---


### ComputeNodeTemplateServerBindingOutputReference <a name="ComputeNodeTemplateServerBindingOutputReference" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_node_template.ComputeNodeTemplateServerBindingOutputReference;

new ComputeNodeTemplateServerBindingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.internalValue"></a>

```java
public ComputeNodeTemplateServerBinding getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a>

---


### ComputeNodeTemplateTimeoutsOutputReference <a name="ComputeNodeTemplateTimeoutsOutputReference" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_node_template.ComputeNodeTemplateTimeoutsOutputReference;

new ComputeNodeTemplateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts">ComputeNodeTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts">ComputeNodeTemplateTimeouts</a>

---



