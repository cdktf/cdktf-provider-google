# `google_certificate_manager_certificate_map`

Refer to the Terraform Registory for docs: [`google_certificate_manager_certificate_map`](https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map).

# `certificateManagerCertificateMap` Submodule <a name="`certificateManagerCertificateMap` Submodule" id="@cdktf/provider-google.certificateManagerCertificateMap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateManagerCertificateMap <a name="CertificateManagerCertificateMap" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map google_certificate_manager_certificate_map}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate_map.CertificateManagerCertificateMap;

CertificateManagerCertificateMap.Builder.create(Construct scope, java.lang.String id)
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
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(CertificateManagerCertificateMapTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A user-defined name of the Certificate Map. Certificate Map names must be unique globally and match the pattern 'projects/*\/locations/*\/certificateMaps/*'. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map#id CertificateManagerCertificateMap#id}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of labels associated with a Certificate Map resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map#project CertificateManagerCertificateMap#project}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts">CertificateManagerCertificateMapTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A user-defined name of the Certificate Map. Certificate Map names must be unique globally and match the pattern 'projects/*\/locations/*\/certificateMaps/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map#name CertificateManagerCertificateMap#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map#description CertificateManagerCertificateMap#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map#id CertificateManagerCertificateMap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of labels associated with a Certificate Map resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map#labels CertificateManagerCertificateMap#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map#project CertificateManagerCertificateMap#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts">CertificateManagerCertificateMapTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map#timeouts CertificateManagerCertificateMap#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.putTimeouts"></a>

```java
public void putTimeouts(CertificateManagerCertificateMapTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts">CertificateManagerCertificateMapTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate_map.CertificateManagerCertificateMap;

CertificateManagerCertificateMap.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate_map.CertificateManagerCertificateMap;

CertificateManagerCertificateMap.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate_map.CertificateManagerCertificateMap;

CertificateManagerCertificateMap.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.gclbTargets">gclbTargets</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList">CertificateManagerCertificateMapGclbTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference">CertificateManagerCertificateMapTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts">CertificateManagerCertificateMapTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `gclbTargets`<sup>Required</sup> <a name="gclbTargets" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.gclbTargets"></a>

```java
public CertificateManagerCertificateMapGclbTargetsList getGclbTargets();
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList">CertificateManagerCertificateMapGclbTargetsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.timeouts"></a>

```java
public CertificateManagerCertificateMapTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference">CertificateManagerCertificateMapTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts">CertificateManagerCertificateMapTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMap.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateManagerCertificateMapConfig <a name="CertificateManagerCertificateMapConfig" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate_map.CertificateManagerCertificateMapConfig;

CertificateManagerCertificateMapConfig.builder()
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
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(CertificateManagerCertificateMapTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.name">name</a></code> | <code>java.lang.String</code> | A user-defined name of the Certificate Map. Certificate Map names must be unique globally and match the pattern 'projects/*\/locations/*\/certificateMaps/*'. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map#id CertificateManagerCertificateMap#id}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of labels associated with a Certificate Map resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map#project CertificateManagerCertificateMap#project}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts">CertificateManagerCertificateMapTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A user-defined name of the Certificate Map. Certificate Map names must be unique globally and match the pattern 'projects/*\/locations/*\/certificateMaps/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map#name CertificateManagerCertificateMap#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map#description CertificateManagerCertificateMap#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map#id CertificateManagerCertificateMap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of labels associated with a Certificate Map resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map#labels CertificateManagerCertificateMap#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map#project CertificateManagerCertificateMap#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapConfig.property.timeouts"></a>

```java
public CertificateManagerCertificateMapTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts">CertificateManagerCertificateMapTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map#timeouts CertificateManagerCertificateMap#timeouts}

---

### CertificateManagerCertificateMapGclbTargets <a name="CertificateManagerCertificateMapGclbTargets" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate_map.CertificateManagerCertificateMapGclbTargets;

CertificateManagerCertificateMapGclbTargets.builder()
    .build();
```


### CertificateManagerCertificateMapGclbTargetsIpConfigs <a name="CertificateManagerCertificateMapGclbTargetsIpConfigs" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate_map.CertificateManagerCertificateMapGclbTargetsIpConfigs;

CertificateManagerCertificateMapGclbTargetsIpConfigs.builder()
    .build();
```


### CertificateManagerCertificateMapTimeouts <a name="CertificateManagerCertificateMapTimeouts" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate_map.CertificateManagerCertificateMapTimeouts;

CertificateManagerCertificateMapTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map#create CertificateManagerCertificateMap#create}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map#delete CertificateManagerCertificateMap#delete}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map#update CertificateManagerCertificateMap#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map#create CertificateManagerCertificateMap#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map#delete CertificateManagerCertificateMap#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/certificate_manager_certificate_map#update CertificateManagerCertificateMap#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateManagerCertificateMapGclbTargetsIpConfigsList <a name="CertificateManagerCertificateMapGclbTargetsIpConfigsList" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate_map.CertificateManagerCertificateMapGclbTargetsIpConfigsList;

new CertificateManagerCertificateMapGclbTargetsIpConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.get"></a>

```java
public CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference <a name="CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate_map.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference;

new CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigs">CertificateManagerCertificateMapGclbTargetsIpConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.internalValue"></a>

```java
public CertificateManagerCertificateMapGclbTargetsIpConfigs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigs">CertificateManagerCertificateMapGclbTargetsIpConfigs</a>

---


### CertificateManagerCertificateMapGclbTargetsList <a name="CertificateManagerCertificateMapGclbTargetsList" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate_map.CertificateManagerCertificateMapGclbTargetsList;

new CertificateManagerCertificateMapGclbTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.get"></a>

```java
public CertificateManagerCertificateMapGclbTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CertificateManagerCertificateMapGclbTargetsOutputReference <a name="CertificateManagerCertificateMapGclbTargetsOutputReference" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate_map.CertificateManagerCertificateMapGclbTargetsOutputReference;

new CertificateManagerCertificateMapGclbTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.property.ipConfigs">ipConfigs</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList">CertificateManagerCertificateMapGclbTargetsIpConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.property.targetHttpsProxy">targetHttpsProxy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.property.targetSslProxy">targetSslProxy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargets">CertificateManagerCertificateMapGclbTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipConfigs`<sup>Required</sup> <a name="ipConfigs" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.property.ipConfigs"></a>

```java
public CertificateManagerCertificateMapGclbTargetsIpConfigsList getIpConfigs();
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsIpConfigsList">CertificateManagerCertificateMapGclbTargetsIpConfigsList</a>

---

##### `targetHttpsProxy`<sup>Required</sup> <a name="targetHttpsProxy" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.property.targetHttpsProxy"></a>

```java
public java.lang.String getTargetHttpsProxy();
```

- *Type:* java.lang.String

---

##### `targetSslProxy`<sup>Required</sup> <a name="targetSslProxy" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.property.targetSslProxy"></a>

```java
public java.lang.String getTargetSslProxy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargetsOutputReference.property.internalValue"></a>

```java
public CertificateManagerCertificateMapGclbTargets getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapGclbTargets">CertificateManagerCertificateMapGclbTargets</a>

---


### CertificateManagerCertificateMapTimeoutsOutputReference <a name="CertificateManagerCertificateMapTimeoutsOutputReference" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.certificate_manager_certificate_map.CertificateManagerCertificateMapTimeoutsOutputReference;

new CertificateManagerCertificateMapTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts">CertificateManagerCertificateMapTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateMap.CertificateManagerCertificateMapTimeouts">CertificateManagerCertificateMapTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



