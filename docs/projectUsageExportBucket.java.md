# `google_project_usage_export_bucket`

Refer to the Terraform Registory for docs: [`google_project_usage_export_bucket`](https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/project_usage_export_bucket).

# `projectUsageExportBucket` Submodule <a name="`projectUsageExportBucket` Submodule" id="@cdktf/provider-google.projectUsageExportBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectUsageExportBucket <a name="ProjectUsageExportBucket" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/project_usage_export_bucket google_project_usage_export_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.project_usage_export_bucket.ProjectUsageExportBucket;

ProjectUsageExportBucket.Builder.create(Construct scope, java.lang.String id)
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
    .bucketName(java.lang.String)
//  .id(java.lang.String)
//  .prefix(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ProjectUsageExportBucketTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The bucket to store reports in. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/project_usage_export_bucket#id ProjectUsageExportBucket#id}. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.prefix">prefix</a></code> | <code>java.lang.String</code> | A prefix for the reports, for instance, the project name. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The project to set the export bucket on. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeouts">ProjectUsageExportBucketTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.bucketName"></a>

- *Type:* java.lang.String

The bucket to store reports in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/project_usage_export_bucket#bucket_name ProjectUsageExportBucket#bucket_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/project_usage_export_bucket#id ProjectUsageExportBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.prefix"></a>

- *Type:* java.lang.String

A prefix for the reports, for instance, the project name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/project_usage_export_bucket#prefix ProjectUsageExportBucket#prefix}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The project to set the export bucket on. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/project_usage_export_bucket#project ProjectUsageExportBucket#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeouts">ProjectUsageExportBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/project_usage_export_bucket#timeouts ProjectUsageExportBucket#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.putTimeouts"></a>

```java
public void putTimeouts(ProjectUsageExportBucketTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeouts">ProjectUsageExportBucketTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.resetId"></a>

```java
public void resetId()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.project_usage_export_bucket.ProjectUsageExportBucket;

ProjectUsageExportBucket.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.project_usage_export_bucket.ProjectUsageExportBucket;

ProjectUsageExportBucket.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.project_usage_export_bucket.ProjectUsageExportBucket;

ProjectUsageExportBucket.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference">ProjectUsageExportBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeouts">ProjectUsageExportBucketTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.timeouts"></a>

```java
public ProjectUsageExportBucketTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference">ProjectUsageExportBucketTimeoutsOutputReference</a>

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeouts">ProjectUsageExportBucketTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucket.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectUsageExportBucketConfig <a name="ProjectUsageExportBucketConfig" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.project_usage_export_bucket.ProjectUsageExportBucketConfig;

ProjectUsageExportBucketConfig.builder()
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
    .bucketName(java.lang.String)
//  .id(java.lang.String)
//  .prefix(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ProjectUsageExportBucketTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The bucket to store reports in. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/project_usage_export_bucket#id ProjectUsageExportBucket#id}. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.prefix">prefix</a></code> | <code>java.lang.String</code> | A prefix for the reports, for instance, the project name. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.project">project</a></code> | <code>java.lang.String</code> | The project to set the export bucket on. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeouts">ProjectUsageExportBucketTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

The bucket to store reports in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/project_usage_export_bucket#bucket_name ProjectUsageExportBucket#bucket_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/project_usage_export_bucket#id ProjectUsageExportBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

A prefix for the reports, for instance, the project name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/project_usage_export_bucket#prefix ProjectUsageExportBucket#prefix}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project to set the export bucket on. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/project_usage_export_bucket#project ProjectUsageExportBucket#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketConfig.property.timeouts"></a>

```java
public ProjectUsageExportBucketTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeouts">ProjectUsageExportBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/project_usage_export_bucket#timeouts ProjectUsageExportBucket#timeouts}

---

### ProjectUsageExportBucketTimeouts <a name="ProjectUsageExportBucketTimeouts" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.project_usage_export_bucket.ProjectUsageExportBucketTimeouts;

ProjectUsageExportBucketTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/project_usage_export_bucket#create ProjectUsageExportBucket#create}. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/project_usage_export_bucket#delete ProjectUsageExportBucket#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/project_usage_export_bucket#create ProjectUsageExportBucket#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/project_usage_export_bucket#delete ProjectUsageExportBucket#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectUsageExportBucketTimeoutsOutputReference <a name="ProjectUsageExportBucketTimeoutsOutputReference" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.project_usage_export_bucket.ProjectUsageExportBucketTimeoutsOutputReference;

new ProjectUsageExportBucketTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeouts">ProjectUsageExportBucketTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.projectUsageExportBucket.ProjectUsageExportBucketTimeouts">ProjectUsageExportBucketTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



