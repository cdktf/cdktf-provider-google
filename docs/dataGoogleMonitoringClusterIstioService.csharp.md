# `data_google_monitoring_cluster_istio_service`

Refer to the Terraform Registory for docs: [`data_google_monitoring_cluster_istio_service`](https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/monitoring_cluster_istio_service).

# `dataGoogleMonitoringClusterIstioService` Submodule <a name="`dataGoogleMonitoringClusterIstioService` Submodule" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleMonitoringClusterIstioService <a name="DataGoogleMonitoringClusterIstioService" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/monitoring_cluster_istio_service google_monitoring_cluster_istio_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMonitoringClusterIstioService(Construct Scope, string Id, DataGoogleMonitoringClusterIstioServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig">DataGoogleMonitoringClusterIstioServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig">DataGoogleMonitoringClusterIstioServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleMonitoringClusterIstioService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleMonitoringClusterIstioService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleMonitoringClusterIstioService.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.telemetry">Telemetry</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList">DataGoogleMonitoringClusterIstioServiceTelemetryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.userLabels">UserLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.serviceNamespaceInput">ServiceNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.serviceNamespace">ServiceNamespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

##### `Telemetry`<sup>Required</sup> <a name="Telemetry" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.telemetry"></a>

```csharp
public DataGoogleMonitoringClusterIstioServiceTelemetryList Telemetry { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList">DataGoogleMonitoringClusterIstioServiceTelemetryList</a>

---

##### `UserLabels`<sup>Required</sup> <a name="UserLabels" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.userLabels"></a>

```csharp
public StringMap UserLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `ServiceNamespaceInput`<sup>Optional</sup> <a name="ServiceNamespaceInput" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.serviceNamespaceInput"></a>

```csharp
public string ServiceNamespaceInput { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `ServiceNamespace`<sup>Required</sup> <a name="ServiceNamespace" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.serviceNamespace"></a>

```csharp
public string ServiceNamespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleMonitoringClusterIstioServiceConfig <a name="DataGoogleMonitoringClusterIstioServiceConfig" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMonitoringClusterIstioServiceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterName,
    string Location,
    string ServiceName,
    string ServiceNamespace,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | The name of the Kubernetes cluster in which this Istio service is defined. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.location">Location</a></code> | <code>string</code> | The location of the Kubernetes cluster in which this Istio service is defined. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.serviceName">ServiceName</a></code> | <code>string</code> | The name of the Istio service underlying this service. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.serviceNamespace">ServiceNamespace</a></code> | <code>string</code> | The namespace of the Istio service underlying this service. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/monitoring_cluster_istio_service#id DataGoogleMonitoringClusterIstioService#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/monitoring_cluster_istio_service#project DataGoogleMonitoringClusterIstioService#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

The name of the Kubernetes cluster in which this Istio service is defined.

Corresponds to the clusterName resource label in k8s_cluster resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/monitoring_cluster_istio_service#cluster_name DataGoogleMonitoringClusterIstioService#cluster_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the Kubernetes cluster in which this Istio service is defined.

Corresponds to the location resource label in k8s_cluster resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/monitoring_cluster_istio_service#location DataGoogleMonitoringClusterIstioService#location}

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

The name of the Istio service underlying this service.

Corresponds to the destination_service_name metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/monitoring_cluster_istio_service#service_name DataGoogleMonitoringClusterIstioService#service_name}

---

##### `ServiceNamespace`<sup>Required</sup> <a name="ServiceNamespace" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.serviceNamespace"></a>

```csharp
public string ServiceNamespace { get; set; }
```

- *Type:* string

The namespace of the Istio service underlying this service.

Corresponds to the destination_service_namespace metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/monitoring_cluster_istio_service#service_namespace DataGoogleMonitoringClusterIstioService#service_namespace}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/monitoring_cluster_istio_service#id DataGoogleMonitoringClusterIstioService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/monitoring_cluster_istio_service#project DataGoogleMonitoringClusterIstioService#project}.

---

### DataGoogleMonitoringClusterIstioServiceTelemetry <a name="DataGoogleMonitoringClusterIstioServiceTelemetry" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMonitoringClusterIstioServiceTelemetry {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleMonitoringClusterIstioServiceTelemetryList <a name="DataGoogleMonitoringClusterIstioServiceTelemetryList" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMonitoringClusterIstioServiceTelemetryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.get"></a>

```csharp
private DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference <a name="DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetry">DataGoogleMonitoringClusterIstioServiceTelemetry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetryOutputReference.property.internalValue"></a>

```csharp
public DataGoogleMonitoringClusterIstioServiceTelemetry InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringClusterIstioService.DataGoogleMonitoringClusterIstioServiceTelemetry">DataGoogleMonitoringClusterIstioServiceTelemetry</a>

---



