# `google_compute_disk_resource_policy_attachment`

Refer to the Terraform Registory for docs: [`google_compute_disk_resource_policy_attachment`](https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_disk_resource_policy_attachment).

# `computeDiskResourcePolicyAttachment` Submodule <a name="`computeDiskResourcePolicyAttachment` Submodule" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeDiskResourcePolicyAttachment <a name="ComputeDiskResourcePolicyAttachment" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_disk_resource_policy_attachment google_compute_disk_resource_policy_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_disk_resource_policy_attachment.ComputeDiskResourcePolicyAttachment;

ComputeDiskResourcePolicyAttachment.Builder.create(Construct scope, java.lang.String id)
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
    .disk(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ComputeDiskResourcePolicyAttachmentTimeouts)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.disk">disk</a></code> | <code>java.lang.String</code> | The name of the disk in which the resource policies are attached to. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource policy to be attached to the disk for scheduling snapshot creation. Do not specify the self link. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_disk_resource_policy_attachment#id ComputeDiskResourcePolicyAttachment#id}. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_disk_resource_policy_attachment#project ComputeDiskResourcePolicyAttachment#project}. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts">ComputeDiskResourcePolicyAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | A reference to the zone where the disk resides. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.disk"></a>

- *Type:* java.lang.String

The name of the disk in which the resource policies are attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_disk_resource_policy_attachment#disk ComputeDiskResourcePolicyAttachment#disk}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource policy to be attached to the disk for scheduling snapshot creation. Do not specify the self link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_disk_resource_policy_attachment#name ComputeDiskResourcePolicyAttachment#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_disk_resource_policy_attachment#id ComputeDiskResourcePolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_disk_resource_policy_attachment#project ComputeDiskResourcePolicyAttachment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts">ComputeDiskResourcePolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_disk_resource_policy_attachment#timeouts ComputeDiskResourcePolicyAttachment#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

A reference to the zone where the disk resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_disk_resource_policy_attachment#zone ComputeDiskResourcePolicyAttachment#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.putTimeouts"></a>

```java
public void putTimeouts(ComputeDiskResourcePolicyAttachmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts">ComputeDiskResourcePolicyAttachmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_disk_resource_policy_attachment.ComputeDiskResourcePolicyAttachment;

ComputeDiskResourcePolicyAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_disk_resource_policy_attachment.ComputeDiskResourcePolicyAttachment;

ComputeDiskResourcePolicyAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_disk_resource_policy_attachment.ComputeDiskResourcePolicyAttachment;

ComputeDiskResourcePolicyAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference">ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.diskInput">diskInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts">ComputeDiskResourcePolicyAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.disk">disk</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.timeouts"></a>

```java
public ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference">ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference</a>

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.diskInput"></a>

```java
public java.lang.String getDiskInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts">ComputeDiskResourcePolicyAttachmentTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.disk"></a>

```java
public java.lang.String getDisk();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeDiskResourcePolicyAttachmentConfig <a name="ComputeDiskResourcePolicyAttachmentConfig" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_disk_resource_policy_attachment.ComputeDiskResourcePolicyAttachmentConfig;

ComputeDiskResourcePolicyAttachmentConfig.builder()
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
    .disk(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ComputeDiskResourcePolicyAttachmentTimeouts)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.disk">disk</a></code> | <code>java.lang.String</code> | The name of the disk in which the resource policies are attached to. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource policy to be attached to the disk for scheduling snapshot creation. Do not specify the self link. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_disk_resource_policy_attachment#id ComputeDiskResourcePolicyAttachment#id}. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_disk_resource_policy_attachment#project ComputeDiskResourcePolicyAttachment#project}. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts">ComputeDiskResourcePolicyAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | A reference to the zone where the disk resides. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.disk"></a>

```java
public java.lang.String getDisk();
```

- *Type:* java.lang.String

The name of the disk in which the resource policies are attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_disk_resource_policy_attachment#disk ComputeDiskResourcePolicyAttachment#disk}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource policy to be attached to the disk for scheduling snapshot creation. Do not specify the self link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_disk_resource_policy_attachment#name ComputeDiskResourcePolicyAttachment#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_disk_resource_policy_attachment#id ComputeDiskResourcePolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_disk_resource_policy_attachment#project ComputeDiskResourcePolicyAttachment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.timeouts"></a>

```java
public ComputeDiskResourcePolicyAttachmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts">ComputeDiskResourcePolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_disk_resource_policy_attachment#timeouts ComputeDiskResourcePolicyAttachment#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

A reference to the zone where the disk resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_disk_resource_policy_attachment#zone ComputeDiskResourcePolicyAttachment#zone}

---

### ComputeDiskResourcePolicyAttachmentTimeouts <a name="ComputeDiskResourcePolicyAttachmentTimeouts" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_disk_resource_policy_attachment.ComputeDiskResourcePolicyAttachmentTimeouts;

ComputeDiskResourcePolicyAttachmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_disk_resource_policy_attachment#create ComputeDiskResourcePolicyAttachment#create}. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_disk_resource_policy_attachment#delete ComputeDiskResourcePolicyAttachment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_disk_resource_policy_attachment#create ComputeDiskResourcePolicyAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/compute_disk_resource_policy_attachment#delete ComputeDiskResourcePolicyAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference <a name="ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_disk_resource_policy_attachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference;

new ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts">ComputeDiskResourcePolicyAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeDiskResourcePolicyAttachment.ComputeDiskResourcePolicyAttachmentTimeouts">ComputeDiskResourcePolicyAttachmentTimeouts</a>

---



