# `data_google_monitoring_mesh_istio_service`

Refer to the Terraform Registory for docs: [`data_google_monitoring_mesh_istio_service`](https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/monitoring_mesh_istio_service).

# `dataGoogleMonitoringMeshIstioService` Submodule <a name="`dataGoogleMonitoringMeshIstioService` Submodule" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleMonitoringMeshIstioService <a name="DataGoogleMonitoringMeshIstioService" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/monitoring_mesh_istio_service google_monitoring_mesh_istio_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMonitoringMeshIstioService(Construct Scope, string Id, DataGoogleMonitoringMeshIstioServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig">DataGoogleMonitoringMeshIstioServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig">DataGoogleMonitoringMeshIstioServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleMonitoringMeshIstioService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleMonitoringMeshIstioService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleMonitoringMeshIstioService.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.telemetry">Telemetry</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList">DataGoogleMonitoringMeshIstioServiceTelemetryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.userLabels">UserLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.meshUidInput">MeshUidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceNamespaceInput">ServiceNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.meshUid">MeshUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceNamespace">ServiceNamespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

##### `Telemetry`<sup>Required</sup> <a name="Telemetry" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.telemetry"></a>

```csharp
public DataGoogleMonitoringMeshIstioServiceTelemetryList Telemetry { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList">DataGoogleMonitoringMeshIstioServiceTelemetryList</a>

---

##### `UserLabels`<sup>Required</sup> <a name="UserLabels" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.userLabels"></a>

```csharp
public StringMap UserLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MeshUidInput`<sup>Optional</sup> <a name="MeshUidInput" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.meshUidInput"></a>

```csharp
public string MeshUidInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `ServiceNamespaceInput`<sup>Optional</sup> <a name="ServiceNamespaceInput" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceNamespaceInput"></a>

```csharp
public string ServiceNamespaceInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MeshUid`<sup>Required</sup> <a name="MeshUid" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.meshUid"></a>

```csharp
public string MeshUid { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `ServiceNamespace`<sup>Required</sup> <a name="ServiceNamespace" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.serviceNamespace"></a>

```csharp
public string ServiceNamespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleMonitoringMeshIstioServiceConfig <a name="DataGoogleMonitoringMeshIstioServiceConfig" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMonitoringMeshIstioServiceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MeshUid,
    string ServiceName,
    string ServiceNamespace,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.meshUid">MeshUid</a></code> | <code>string</code> | Identifier for the mesh in which this Istio service is defined. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.serviceName">ServiceName</a></code> | <code>string</code> | The name of the Istio service underlying this service. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.serviceNamespace">ServiceNamespace</a></code> | <code>string</code> | The namespace of the Istio service underlying this service. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/monitoring_mesh_istio_service#id DataGoogleMonitoringMeshIstioService#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/monitoring_mesh_istio_service#project DataGoogleMonitoringMeshIstioService#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MeshUid`<sup>Required</sup> <a name="MeshUid" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.meshUid"></a>

```csharp
public string MeshUid { get; set; }
```

- *Type:* string

Identifier for the mesh in which this Istio service is defined.

Corresponds to the meshUid metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/monitoring_mesh_istio_service#mesh_uid DataGoogleMonitoringMeshIstioService#mesh_uid}

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

The name of the Istio service underlying this service.

Corresponds to the destination_service_name metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/monitoring_mesh_istio_service#service_name DataGoogleMonitoringMeshIstioService#service_name}

---

##### `ServiceNamespace`<sup>Required</sup> <a name="ServiceNamespace" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.serviceNamespace"></a>

```csharp
public string ServiceNamespace { get; set; }
```

- *Type:* string

The namespace of the Istio service underlying this service.

Corresponds to the destination_service_namespace metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/monitoring_mesh_istio_service#service_namespace DataGoogleMonitoringMeshIstioService#service_namespace}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/monitoring_mesh_istio_service#id DataGoogleMonitoringMeshIstioService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/monitoring_mesh_istio_service#project DataGoogleMonitoringMeshIstioService#project}.

---

### DataGoogleMonitoringMeshIstioServiceTelemetry <a name="DataGoogleMonitoringMeshIstioServiceTelemetry" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMonitoringMeshIstioServiceTelemetry {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleMonitoringMeshIstioServiceTelemetryList <a name="DataGoogleMonitoringMeshIstioServiceTelemetryList" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMonitoringMeshIstioServiceTelemetryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.get"></a>

```csharp
private DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference <a name="DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetry">DataGoogleMonitoringMeshIstioServiceTelemetry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetryOutputReference.property.internalValue"></a>

```csharp
public DataGoogleMonitoringMeshIstioServiceTelemetry InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringMeshIstioService.DataGoogleMonitoringMeshIstioServiceTelemetry">DataGoogleMonitoringMeshIstioServiceTelemetry</a>

---



