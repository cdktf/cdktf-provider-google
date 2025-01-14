# `dataGoogleCloudQuotasQuotaInfo` Submodule <a name="`dataGoogleCloudQuotasQuotaInfo` Submodule" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudQuotasQuotaInfo <a name="DataGoogleCloudQuotasQuotaInfo" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/cloud_quotas_quota_info google_cloud_quotas_quota_info}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_quotas_quota_info.DataGoogleCloudQuotasQuotaInfo;

DataGoogleCloudQuotasQuotaInfo.Builder.create(Construct scope, java.lang.String id)
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
    .parent(java.lang.String)
    .quotaId(java.lang.String)
    .service(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/cloud_quotas_quota_info#parent DataGoogleCloudQuotasQuotaInfo#parent}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.quotaId">quotaId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/cloud_quotas_quota_info#quota_id DataGoogleCloudQuotasQuotaInfo#quota_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/cloud_quotas_quota_info#service DataGoogleCloudQuotasQuotaInfo#service}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/cloud_quotas_quota_info#id DataGoogleCloudQuotasQuotaInfo#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/cloud_quotas_quota_info#parent DataGoogleCloudQuotasQuotaInfo#parent}.

---

##### `quotaId`<sup>Required</sup> <a name="quotaId" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.quotaId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/cloud_quotas_quota_info#quota_id DataGoogleCloudQuotasQuotaInfo#quota_id}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.service"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/cloud_quotas_quota_info#service DataGoogleCloudQuotasQuotaInfo#service}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/cloud_quotas_quota_info#id DataGoogleCloudQuotasQuotaInfo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleCloudQuotasQuotaInfo resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_quotas_quota_info.DataGoogleCloudQuotasQuotaInfo;

DataGoogleCloudQuotasQuotaInfo.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_quotas_quota_info.DataGoogleCloudQuotasQuotaInfo;

DataGoogleCloudQuotasQuotaInfo.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_quotas_quota_info.DataGoogleCloudQuotasQuotaInfo;

DataGoogleCloudQuotasQuotaInfo.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_quotas_quota_info.DataGoogleCloudQuotasQuotaInfo;

DataGoogleCloudQuotasQuotaInfo.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleCloudQuotasQuotaInfo.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleCloudQuotasQuotaInfo resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleCloudQuotasQuotaInfo to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleCloudQuotasQuotaInfo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/cloud_quotas_quota_info#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudQuotasQuotaInfo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.containerType">containerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.dimensions">dimensions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.dimensionsInfos">dimensionsInfos</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList">DataGoogleCloudQuotasQuotaInfoDimensionsInfosList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.isConcurrent">isConcurrent</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.isFixed">isFixed</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.isPrecise">isPrecise</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.metric">metric</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.metricDisplayName">metricDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.metricUnit">metricUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.quotaDisplayName">quotaDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.quotaIncreaseEligibility">quotaIncreaseEligibility</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList">DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.refreshInterval">refreshInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.serviceRequestQuotaUri">serviceRequestQuotaUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.quotaIdInput">quotaIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.quotaId">quotaId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `containerType`<sup>Required</sup> <a name="containerType" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.containerType"></a>

```java
public java.lang.String getContainerType();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.dimensions"></a>

```java
public java.util.List<java.lang.String> getDimensions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dimensionsInfos`<sup>Required</sup> <a name="dimensionsInfos" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.dimensionsInfos"></a>

```java
public DataGoogleCloudQuotasQuotaInfoDimensionsInfosList getDimensionsInfos();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList">DataGoogleCloudQuotasQuotaInfoDimensionsInfosList</a>

---

##### `isConcurrent`<sup>Required</sup> <a name="isConcurrent" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.isConcurrent"></a>

```java
public IResolvable getIsConcurrent();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isFixed`<sup>Required</sup> <a name="isFixed" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.isFixed"></a>

```java
public IResolvable getIsFixed();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isPrecise`<sup>Required</sup> <a name="isPrecise" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.isPrecise"></a>

```java
public IResolvable getIsPrecise();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

---

##### `metricDisplayName`<sup>Required</sup> <a name="metricDisplayName" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.metricDisplayName"></a>

```java
public java.lang.String getMetricDisplayName();
```

- *Type:* java.lang.String

---

##### `metricUnit`<sup>Required</sup> <a name="metricUnit" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.metricUnit"></a>

```java
public java.lang.String getMetricUnit();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `quotaDisplayName`<sup>Required</sup> <a name="quotaDisplayName" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.quotaDisplayName"></a>

```java
public java.lang.String getQuotaDisplayName();
```

- *Type:* java.lang.String

---

##### `quotaIncreaseEligibility`<sup>Required</sup> <a name="quotaIncreaseEligibility" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.quotaIncreaseEligibility"></a>

```java
public DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList getQuotaIncreaseEligibility();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList">DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList</a>

---

##### `refreshInterval`<sup>Required</sup> <a name="refreshInterval" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.refreshInterval"></a>

```java
public java.lang.String getRefreshInterval();
```

- *Type:* java.lang.String

---

##### `serviceRequestQuotaUri`<sup>Required</sup> <a name="serviceRequestQuotaUri" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.serviceRequestQuotaUri"></a>

```java
public java.lang.String getServiceRequestQuotaUri();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `quotaIdInput`<sup>Optional</sup> <a name="quotaIdInput" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.quotaIdInput"></a>

```java
public java.lang.String getQuotaIdInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `quotaId`<sup>Required</sup> <a name="quotaId" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.quotaId"></a>

```java
public java.lang.String getQuotaId();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfo.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudQuotasQuotaInfoConfig <a name="DataGoogleCloudQuotasQuotaInfoConfig" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_quotas_quota_info.DataGoogleCloudQuotasQuotaInfoConfig;

DataGoogleCloudQuotasQuotaInfoConfig.builder()
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
    .parent(java.lang.String)
    .quotaId(java.lang.String)
    .service(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/cloud_quotas_quota_info#parent DataGoogleCloudQuotasQuotaInfo#parent}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.quotaId">quotaId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/cloud_quotas_quota_info#quota_id DataGoogleCloudQuotasQuotaInfo#quota_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/cloud_quotas_quota_info#service DataGoogleCloudQuotasQuotaInfo#service}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/cloud_quotas_quota_info#id DataGoogleCloudQuotasQuotaInfo#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/cloud_quotas_quota_info#parent DataGoogleCloudQuotasQuotaInfo#parent}.

---

##### `quotaId`<sup>Required</sup> <a name="quotaId" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.quotaId"></a>

```java
public java.lang.String getQuotaId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/cloud_quotas_quota_info#quota_id DataGoogleCloudQuotasQuotaInfo#quota_id}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/cloud_quotas_quota_info#service DataGoogleCloudQuotasQuotaInfo#service}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/cloud_quotas_quota_info#id DataGoogleCloudQuotasQuotaInfo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleCloudQuotasQuotaInfoDimensionsInfos <a name="DataGoogleCloudQuotasQuotaInfoDimensionsInfos" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfos"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfos.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_quotas_quota_info.DataGoogleCloudQuotasQuotaInfoDimensionsInfos;

DataGoogleCloudQuotasQuotaInfoDimensionsInfos.builder()
    .build();
```


### DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails <a name="DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_quotas_quota_info.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails;

DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails.builder()
    .build();
```


### DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility <a name="DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_quotas_quota_info.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility;

DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList <a name="DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_quotas_quota_info.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList;

new DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.get"></a>

```java
public DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference <a name="DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_quotas_quota_info.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference;

new DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails">DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails">DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetails</a>

---


### DataGoogleCloudQuotasQuotaInfoDimensionsInfosList <a name="DataGoogleCloudQuotasQuotaInfoDimensionsInfosList" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_quotas_quota_info.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList;

new DataGoogleCloudQuotasQuotaInfoDimensionsInfosList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.get"></a>

```java
public DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference <a name="DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_quotas_quota_info.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference;

new DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.property.applicableLocations">applicableLocations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.property.details">details</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList">DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.property.dimensions">dimensions</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfos">DataGoogleCloudQuotasQuotaInfoDimensionsInfos</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicableLocations`<sup>Required</sup> <a name="applicableLocations" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.property.applicableLocations"></a>

```java
public java.util.List<java.lang.String> getApplicableLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.property.details"></a>

```java
public DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList getDetails();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList">DataGoogleCloudQuotasQuotaInfoDimensionsInfosDetailsList</a>

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.property.dimensions"></a>

```java
public StringMap getDimensions();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfosOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudQuotasQuotaInfoDimensionsInfos getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoDimensionsInfos">DataGoogleCloudQuotasQuotaInfoDimensionsInfos</a>

---


### DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList <a name="DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_quotas_quota_info.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList;

new DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.get"></a>

```java
public DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference <a name="DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_cloud_quotas_quota_info.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference;

new DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.property.ineligibilityReason">ineligibilityReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.property.isEligible">isEligible</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility">DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ineligibilityReason`<sup>Required</sup> <a name="ineligibilityReason" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.property.ineligibilityReason"></a>

```java
public java.lang.String getIneligibilityReason();
```

- *Type:* java.lang.String

---

##### `isEligible`<sup>Required</sup> <a name="isEligible" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.property.isEligible"></a>

```java
public IResolvable getIsEligible();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibilityOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudQuotasQuotaInfo.DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility">DataGoogleCloudQuotasQuotaInfoQuotaIncreaseEligibility</a>

---



