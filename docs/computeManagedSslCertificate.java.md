# `google_compute_managed_ssl_certificate`

Refer to the Terraform Registory for docs: [`google_compute_managed_ssl_certificate`](https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate).

# `computeManagedSslCertificate` Submodule <a name="`computeManagedSslCertificate` Submodule" id="@cdktf/provider-google.computeManagedSslCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeManagedSslCertificate <a name="ComputeManagedSslCertificate" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate google_compute_managed_ssl_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_managed_ssl_certificate.ComputeManagedSslCertificate;

ComputeManagedSslCertificate.Builder.create(Construct scope, java.lang.String id)
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
//  .certificateId(java.lang.Number)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .managed(ComputeManagedSslCertificateManaged)
//  .name(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ComputeManagedSslCertificateTimeouts)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.certificateId">certificateId</a></code> | <code>java.lang.Number</code> | The unique identifier for the resource. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate#id ComputeManagedSslCertificate#id}. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.managed">managed</a></code> | <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged">ComputeManagedSslCertificateManaged</a></code> | managed block. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate#project ComputeManagedSslCertificate#project}. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts">ComputeManagedSslCertificateTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Enum field whose value is always 'MANAGED' - used to signal to the API which type this is. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.certificateId"></a>

- *Type:* java.lang.Number

The unique identifier for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate#certificate_id ComputeManagedSslCertificate#certificate_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate#description ComputeManagedSslCertificate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate#id ComputeManagedSslCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.managed"></a>

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged">ComputeManagedSslCertificateManaged</a>

managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate#managed ComputeManagedSslCertificate#managed}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

These are in the same namespace as the managed SSL certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate#name ComputeManagedSslCertificate#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate#project ComputeManagedSslCertificate#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts">ComputeManagedSslCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate#timeouts ComputeManagedSslCertificate#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Enum field whose value is always 'MANAGED' - used to signal to the API which type this is.

Default value: "MANAGED" Possible values: ["MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate#type ComputeManagedSslCertificate#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.putManaged">putManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetCertificateId">resetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetManaged">resetManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putManaged` <a name="putManaged" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.putManaged"></a>

```java
public void putManaged(ComputeManagedSslCertificateManaged value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.putManaged.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged">ComputeManagedSslCertificateManaged</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.putTimeouts"></a>

```java
public void putTimeouts(ComputeManagedSslCertificateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts">ComputeManagedSslCertificateTimeouts</a>

---

##### `resetCertificateId` <a name="resetCertificateId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetCertificateId"></a>

```java
public void resetCertificateId()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetId"></a>

```java
public void resetId()
```

##### `resetManaged` <a name="resetManaged" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetManaged"></a>

```java
public void resetManaged()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetName"></a>

```java
public void resetName()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_managed_ssl_certificate.ComputeManagedSslCertificate;

ComputeManagedSslCertificate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_managed_ssl_certificate.ComputeManagedSslCertificate;

ComputeManagedSslCertificate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_managed_ssl_certificate.ComputeManagedSslCertificate;

ComputeManagedSslCertificate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.managed">managed</a></code> | <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference">ComputeManagedSslCertificateManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference">ComputeManagedSslCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.certificateIdInput">certificateIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.managedInput">managedInput</a></code> | <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged">ComputeManagedSslCertificateManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts">ComputeManagedSslCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.certificateId">certificateId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.managed"></a>

```java
public ComputeManagedSslCertificateManagedOutputReference getManaged();
```

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference">ComputeManagedSslCertificateManagedOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="subjectAlternativeNames" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.subjectAlternativeNames"></a>

```java
public java.util.List<java.lang.String> getSubjectAlternativeNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.timeouts"></a>

```java
public ComputeManagedSslCertificateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference">ComputeManagedSslCertificateTimeoutsOutputReference</a>

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.certificateIdInput"></a>

```java
public java.lang.Number getCertificateIdInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedInput`<sup>Optional</sup> <a name="managedInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.managedInput"></a>

```java
public ComputeManagedSslCertificateManaged getManagedInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged">ComputeManagedSslCertificateManaged</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts">ComputeManagedSslCertificateTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.certificateId"></a>

```java
public java.lang.Number getCertificateId();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeManagedSslCertificateConfig <a name="ComputeManagedSslCertificateConfig" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_managed_ssl_certificate.ComputeManagedSslCertificateConfig;

ComputeManagedSslCertificateConfig.builder()
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
//  .certificateId(java.lang.Number)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .managed(ComputeManagedSslCertificateManaged)
//  .name(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ComputeManagedSslCertificateTimeouts)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.certificateId">certificateId</a></code> | <code>java.lang.Number</code> | The unique identifier for the resource. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate#id ComputeManagedSslCertificate#id}. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.managed">managed</a></code> | <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged">ComputeManagedSslCertificateManaged</a></code> | managed block. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate#project ComputeManagedSslCertificate#project}. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts">ComputeManagedSslCertificateTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.type">type</a></code> | <code>java.lang.String</code> | Enum field whose value is always 'MANAGED' - used to signal to the API which type this is. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.certificateId"></a>

```java
public java.lang.Number getCertificateId();
```

- *Type:* java.lang.Number

The unique identifier for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate#certificate_id ComputeManagedSslCertificate#certificate_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate#description ComputeManagedSslCertificate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate#id ComputeManagedSslCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.managed"></a>

```java
public ComputeManagedSslCertificateManaged getManaged();
```

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged">ComputeManagedSslCertificateManaged</a>

managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate#managed ComputeManagedSslCertificate#managed}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.name"></a>

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

These are in the same namespace as the managed SSL certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate#name ComputeManagedSslCertificate#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate#project ComputeManagedSslCertificate#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.timeouts"></a>

```java
public ComputeManagedSslCertificateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts">ComputeManagedSslCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate#timeouts ComputeManagedSslCertificate#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Enum field whose value is always 'MANAGED' - used to signal to the API which type this is.

Default value: "MANAGED" Possible values: ["MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate#type ComputeManagedSslCertificate#type}

---

### ComputeManagedSslCertificateManaged <a name="ComputeManagedSslCertificateManaged" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_managed_ssl_certificate.ComputeManagedSslCertificateManaged;

ComputeManagedSslCertificateManaged.builder()
    .domains(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | Domains for which a managed SSL certificate will be valid. |

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

Domains for which a managed SSL certificate will be valid.

Currently,
there can be up to 100 domains in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate#domains ComputeManagedSslCertificate#domains}

---

### ComputeManagedSslCertificateTimeouts <a name="ComputeManagedSslCertificateTimeouts" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_managed_ssl_certificate.ComputeManagedSslCertificateTimeouts;

ComputeManagedSslCertificateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate#create ComputeManagedSslCertificate#create}. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate#delete ComputeManagedSslCertificate#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate#create ComputeManagedSslCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_managed_ssl_certificate#delete ComputeManagedSslCertificate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeManagedSslCertificateManagedOutputReference <a name="ComputeManagedSslCertificateManagedOutputReference" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_managed_ssl_certificate.ComputeManagedSslCertificateManagedOutputReference;

new ComputeManagedSslCertificateManagedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.domainsInput">domainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged">ComputeManagedSslCertificateManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.domainsInput"></a>

```java
public java.util.List<java.lang.String> getDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManagedOutputReference.property.internalValue"></a>

```java
public ComputeManagedSslCertificateManaged getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateManaged">ComputeManagedSslCertificateManaged</a>

---


### ComputeManagedSslCertificateTimeoutsOutputReference <a name="ComputeManagedSslCertificateTimeoutsOutputReference" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_managed_ssl_certificate.ComputeManagedSslCertificateTimeoutsOutputReference;

new ComputeManagedSslCertificateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts">ComputeManagedSslCertificateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeManagedSslCertificate.ComputeManagedSslCertificateTimeouts">ComputeManagedSslCertificateTimeouts</a>

---



