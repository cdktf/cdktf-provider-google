# `dataGoogleMonitoringIstioCanonicalService` Submodule <a name="`dataGoogleMonitoringIstioCanonicalService` Submodule" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleMonitoringIstioCanonicalService <a name="DataGoogleMonitoringIstioCanonicalService" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/monitoring_istio_canonical_service google_monitoring_istio_canonical_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_istio_canonical_service.DataGoogleMonitoringIstioCanonicalService;

DataGoogleMonitoringIstioCanonicalService.Builder.create(Construct scope, java.lang.String id)
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
    .canonicalService(java.lang.String)
    .canonicalServiceNamespace(java.lang.String)
    .meshUid(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.canonicalService">canonicalService</a></code> | <code>java.lang.String</code> | The name of the canonical service underlying this service..                          Corresponds to the destination_service_name metric label in Istio metrics. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.canonicalServiceNamespace">canonicalServiceNamespace</a></code> | <code>java.lang.String</code> | The namespace of the canonical service underlying this service. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.meshUid">meshUid</a></code> | <code>java.lang.String</code> | Identifier for the Istio mesh in which this canonical service is defined. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/monitoring_istio_canonical_service#id DataGoogleMonitoringIstioCanonicalService#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/monitoring_istio_canonical_service#project DataGoogleMonitoringIstioCanonicalService#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `canonicalService`<sup>Required</sup> <a name="canonicalService" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.canonicalService"></a>

- *Type:* java.lang.String

The name of the canonical service underlying this service..                          Corresponds to the destination_service_name metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/monitoring_istio_canonical_service#canonical_service DataGoogleMonitoringIstioCanonicalService#canonical_service}

---

##### `canonicalServiceNamespace`<sup>Required</sup> <a name="canonicalServiceNamespace" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.canonicalServiceNamespace"></a>

- *Type:* java.lang.String

The namespace of the canonical service underlying this service.

Corresponds to the destination_service_namespace metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/monitoring_istio_canonical_service#canonical_service_namespace DataGoogleMonitoringIstioCanonicalService#canonical_service_namespace}

---

##### `meshUid`<sup>Required</sup> <a name="meshUid" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.meshUid"></a>

- *Type:* java.lang.String

Identifier for the Istio mesh in which this canonical service is defined.

Corresponds to the meshUid metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/monitoring_istio_canonical_service#mesh_uid DataGoogleMonitoringIstioCanonicalService#mesh_uid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/monitoring_istio_canonical_service#id DataGoogleMonitoringIstioCanonicalService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/monitoring_istio_canonical_service#project DataGoogleMonitoringIstioCanonicalService#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleMonitoringIstioCanonicalService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_istio_canonical_service.DataGoogleMonitoringIstioCanonicalService;

DataGoogleMonitoringIstioCanonicalService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_istio_canonical_service.DataGoogleMonitoringIstioCanonicalService;

DataGoogleMonitoringIstioCanonicalService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_istio_canonical_service.DataGoogleMonitoringIstioCanonicalService;

DataGoogleMonitoringIstioCanonicalService.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_istio_canonical_service.DataGoogleMonitoringIstioCanonicalService;

DataGoogleMonitoringIstioCanonicalService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleMonitoringIstioCanonicalService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleMonitoringIstioCanonicalService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleMonitoringIstioCanonicalService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleMonitoringIstioCanonicalService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/monitoring_istio_canonical_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleMonitoringIstioCanonicalService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.telemetry">telemetry</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList">DataGoogleMonitoringIstioCanonicalServiceTelemetryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.userLabels">userLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.canonicalServiceInput">canonicalServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.canonicalServiceNamespaceInput">canonicalServiceNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.meshUidInput">meshUidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.canonicalService">canonicalService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.canonicalServiceNamespace">canonicalServiceNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.meshUid">meshUid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

##### `telemetry`<sup>Required</sup> <a name="telemetry" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.telemetry"></a>

```java
public DataGoogleMonitoringIstioCanonicalServiceTelemetryList getTelemetry();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList">DataGoogleMonitoringIstioCanonicalServiceTelemetryList</a>

---

##### `userLabels`<sup>Required</sup> <a name="userLabels" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.userLabels"></a>

```java
public StringMap getUserLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `canonicalServiceInput`<sup>Optional</sup> <a name="canonicalServiceInput" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.canonicalServiceInput"></a>

```java
public java.lang.String getCanonicalServiceInput();
```

- *Type:* java.lang.String

---

##### `canonicalServiceNamespaceInput`<sup>Optional</sup> <a name="canonicalServiceNamespaceInput" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.canonicalServiceNamespaceInput"></a>

```java
public java.lang.String getCanonicalServiceNamespaceInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `meshUidInput`<sup>Optional</sup> <a name="meshUidInput" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.meshUidInput"></a>

```java
public java.lang.String getMeshUidInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `canonicalService`<sup>Required</sup> <a name="canonicalService" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.canonicalService"></a>

```java
public java.lang.String getCanonicalService();
```

- *Type:* java.lang.String

---

##### `canonicalServiceNamespace`<sup>Required</sup> <a name="canonicalServiceNamespace" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.canonicalServiceNamespace"></a>

```java
public java.lang.String getCanonicalServiceNamespace();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `meshUid`<sup>Required</sup> <a name="meshUid" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.meshUid"></a>

```java
public java.lang.String getMeshUid();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleMonitoringIstioCanonicalServiceConfig <a name="DataGoogleMonitoringIstioCanonicalServiceConfig" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_istio_canonical_service.DataGoogleMonitoringIstioCanonicalServiceConfig;

DataGoogleMonitoringIstioCanonicalServiceConfig.builder()
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
    .canonicalService(java.lang.String)
    .canonicalServiceNamespace(java.lang.String)
    .meshUid(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.canonicalService">canonicalService</a></code> | <code>java.lang.String</code> | The name of the canonical service underlying this service..                          Corresponds to the destination_service_name metric label in Istio metrics. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.canonicalServiceNamespace">canonicalServiceNamespace</a></code> | <code>java.lang.String</code> | The namespace of the canonical service underlying this service. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.meshUid">meshUid</a></code> | <code>java.lang.String</code> | Identifier for the Istio mesh in which this canonical service is defined. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/monitoring_istio_canonical_service#id DataGoogleMonitoringIstioCanonicalService#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/monitoring_istio_canonical_service#project DataGoogleMonitoringIstioCanonicalService#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `canonicalService`<sup>Required</sup> <a name="canonicalService" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.canonicalService"></a>

```java
public java.lang.String getCanonicalService();
```

- *Type:* java.lang.String

The name of the canonical service underlying this service..                          Corresponds to the destination_service_name metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/monitoring_istio_canonical_service#canonical_service DataGoogleMonitoringIstioCanonicalService#canonical_service}

---

##### `canonicalServiceNamespace`<sup>Required</sup> <a name="canonicalServiceNamespace" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.canonicalServiceNamespace"></a>

```java
public java.lang.String getCanonicalServiceNamespace();
```

- *Type:* java.lang.String

The namespace of the canonical service underlying this service.

Corresponds to the destination_service_namespace metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/monitoring_istio_canonical_service#canonical_service_namespace DataGoogleMonitoringIstioCanonicalService#canonical_service_namespace}

---

##### `meshUid`<sup>Required</sup> <a name="meshUid" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.meshUid"></a>

```java
public java.lang.String getMeshUid();
```

- *Type:* java.lang.String

Identifier for the Istio mesh in which this canonical service is defined.

Corresponds to the meshUid metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/monitoring_istio_canonical_service#mesh_uid DataGoogleMonitoringIstioCanonicalService#mesh_uid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/monitoring_istio_canonical_service#id DataGoogleMonitoringIstioCanonicalService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/monitoring_istio_canonical_service#project DataGoogleMonitoringIstioCanonicalService#project}.

---

### DataGoogleMonitoringIstioCanonicalServiceTelemetry <a name="DataGoogleMonitoringIstioCanonicalServiceTelemetry" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_istio_canonical_service.DataGoogleMonitoringIstioCanonicalServiceTelemetry;

DataGoogleMonitoringIstioCanonicalServiceTelemetry.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleMonitoringIstioCanonicalServiceTelemetryList <a name="DataGoogleMonitoringIstioCanonicalServiceTelemetryList" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_istio_canonical_service.DataGoogleMonitoringIstioCanonicalServiceTelemetryList;

new DataGoogleMonitoringIstioCanonicalServiceTelemetryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.get"></a>

```java
public DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference <a name="DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_istio_canonical_service.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference;

new DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetry">DataGoogleMonitoringIstioCanonicalServiceTelemetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.property.internalValue"></a>

```java
public DataGoogleMonitoringIstioCanonicalServiceTelemetry getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetry">DataGoogleMonitoringIstioCanonicalServiceTelemetry</a>

---



