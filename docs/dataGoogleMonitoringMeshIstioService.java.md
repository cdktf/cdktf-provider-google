# `dataGoogleMonitoringMeshIstioService` Submodule <a name="`dataGoogleMonitoringMeshIstioService` Submodule" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleMonitoringMeshIstioService <a name="DataGoogleMonitoringMeshIstioService" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_mesh_istio_service google_monitoring_mesh_istio_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_mesh_istio_service.DataGoogleMonitoringMeshIstioService;

DataGoogleMonitoringMeshIstioService.Builder.create(Construct scope, java.lang.String id)
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
    .meshUid(java.lang.String)
    .serviceName(java.lang.String)
    .serviceNamespace(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.meshUid">meshUid</a></code> | <code>java.lang.String</code> | Identifier for the mesh in which this Istio service is defined. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The name of the Istio service underlying this service. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.serviceNamespace">serviceNamespace</a></code> | <code>java.lang.String</code> | The namespace of the Istio service underlying this service. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_mesh_istio_service#id DataGoogleMonitoringMeshIstioService#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_mesh_istio_service#project DataGoogleMonitoringMeshIstioService#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `meshUid`<sup>Required</sup> <a name="meshUid" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.meshUid"></a>

- *Type:* java.lang.String

Identifier for the mesh in which this Istio service is defined.

Corresponds to the meshUid metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_mesh_istio_service#mesh_uid DataGoogleMonitoringMeshIstioService#mesh_uid}

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.serviceName"></a>

- *Type:* java.lang.String

The name of the Istio service underlying this service.

Corresponds to the destination_service_name metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_mesh_istio_service#service_name DataGoogleMonitoringMeshIstioService#service_name}

---

##### `serviceNamespace`<sup>Required</sup> <a name="serviceNamespace" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.serviceNamespace"></a>

- *Type:* java.lang.String

The namespace of the Istio service underlying this service.

Corresponds to the destination_service_namespace metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_mesh_istio_service#service_namespace DataGoogleMonitoringMeshIstioService#service_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_mesh_istio_service#id DataGoogleMonitoringMeshIstioService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_mesh_istio_service#project DataGoogleMonitoringMeshIstioService#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleMonitoringMeshIstioService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_mesh_istio_service.DataGoogleMonitoringMeshIstioService;

DataGoogleMonitoringMeshIstioService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_mesh_istio_service.DataGoogleMonitoringMeshIstioService;

DataGoogleMonitoringMeshIstioService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_mesh_istio_service.DataGoogleMonitoringMeshIstioService;

DataGoogleMonitoringMeshIstioService.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_mesh_istio_service.DataGoogleMonitoringMeshIstioService;

DataGoogleMonitoringMeshIstioService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleMonitoringMeshIstioService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleMonitoringMeshIstioService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleMonitoringMeshIstioService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleMonitoringMeshIstioService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_mesh_istio_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleMonitoringMeshIstioService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.telemetry">telemetry</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList">DataGoogleMonitoringMeshIstioServiceTelemetryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.userLabels">userLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.meshUidInput">meshUidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceNamespaceInput">serviceNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.meshUid">meshUid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceNamespace">serviceNamespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

##### `telemetry`<sup>Required</sup> <a name="telemetry" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.telemetry"></a>

```java
public DataGoogleMonitoringMeshIstioServiceTelemetryList getTelemetry();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList">DataGoogleMonitoringMeshIstioServiceTelemetryList</a>

---

##### `userLabels`<sup>Required</sup> <a name="userLabels" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.userLabels"></a>

```java
public StringMap getUserLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `meshUidInput`<sup>Optional</sup> <a name="meshUidInput" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.meshUidInput"></a>

```java
public java.lang.String getMeshUidInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `serviceNamespaceInput`<sup>Optional</sup> <a name="serviceNamespaceInput" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceNamespaceInput"></a>

```java
public java.lang.String getServiceNamespaceInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `meshUid`<sup>Required</sup> <a name="meshUid" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.meshUid"></a>

```java
public java.lang.String getMeshUid();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `serviceNamespace`<sup>Required</sup> <a name="serviceNamespace" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceNamespace"></a>

```java
public java.lang.String getServiceNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleMonitoringMeshIstioServiceConfig <a name="DataGoogleMonitoringMeshIstioServiceConfig" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_mesh_istio_service.DataGoogleMonitoringMeshIstioServiceConfig;

DataGoogleMonitoringMeshIstioServiceConfig.builder()
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
    .meshUid(java.lang.String)
    .serviceName(java.lang.String)
    .serviceNamespace(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.meshUid">meshUid</a></code> | <code>java.lang.String</code> | Identifier for the mesh in which this Istio service is defined. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The name of the Istio service underlying this service. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.serviceNamespace">serviceNamespace</a></code> | <code>java.lang.String</code> | The namespace of the Istio service underlying this service. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_mesh_istio_service#id DataGoogleMonitoringMeshIstioService#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_mesh_istio_service#project DataGoogleMonitoringMeshIstioService#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `meshUid`<sup>Required</sup> <a name="meshUid" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.meshUid"></a>

```java
public java.lang.String getMeshUid();
```

- *Type:* java.lang.String

Identifier for the mesh in which this Istio service is defined.

Corresponds to the meshUid metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_mesh_istio_service#mesh_uid DataGoogleMonitoringMeshIstioService#mesh_uid}

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

The name of the Istio service underlying this service.

Corresponds to the destination_service_name metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_mesh_istio_service#service_name DataGoogleMonitoringMeshIstioService#service_name}

---

##### `serviceNamespace`<sup>Required</sup> <a name="serviceNamespace" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.serviceNamespace"></a>

```java
public java.lang.String getServiceNamespace();
```

- *Type:* java.lang.String

The namespace of the Istio service underlying this service.

Corresponds to the destination_service_namespace metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_mesh_istio_service#service_namespace DataGoogleMonitoringMeshIstioService#service_namespace}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_mesh_istio_service#id DataGoogleMonitoringMeshIstioService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_mesh_istio_service#project DataGoogleMonitoringMeshIstioService#project}.

---

### DataGoogleMonitoringMeshIstioServiceTelemetry <a name="DataGoogleMonitoringMeshIstioServiceTelemetry" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_mesh_istio_service.DataGoogleMonitoringMeshIstioServiceTelemetry;

DataGoogleMonitoringMeshIstioServiceTelemetry.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleMonitoringMeshIstioServiceTelemetryList <a name="DataGoogleMonitoringMeshIstioServiceTelemetryList" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_mesh_istio_service.DataGoogleMonitoringMeshIstioServiceTelemetryList;

new DataGoogleMonitoringMeshIstioServiceTelemetryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.get"></a>

```java
public DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference <a name="DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_mesh_istio_service.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference;

new DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetry">DataGoogleMonitoringMeshIstioServiceTelemetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.property.internalValue"></a>

```java
public DataGoogleMonitoringMeshIstioServiceTelemetry getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetry">DataGoogleMonitoringMeshIstioServiceTelemetry</a>

---



