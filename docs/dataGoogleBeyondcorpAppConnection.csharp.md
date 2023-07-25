# `data_google_beyondcorp_app_connection`

Refer to the Terraform Registory for docs: [`data_google_beyondcorp_app_connection`](https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/beyondcorp_app_connection).

# `dataGoogleBeyondcorpAppConnection` Submodule <a name="`dataGoogleBeyondcorpAppConnection` Submodule" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBeyondcorpAppConnection <a name="DataGoogleBeyondcorpAppConnection" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/beyondcorp_app_connection google_beyondcorp_app_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleBeyondcorpAppConnection(Construct Scope, string Id, DataGoogleBeyondcorpAppConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig">DataGoogleBeyondcorpAppConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig">DataGoogleBeyondcorpAppConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleBeyondcorpAppConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleBeyondcorpAppConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleBeyondcorpAppConnection.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.applicationEndpoint">ApplicationEndpoint</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList">DataGoogleBeyondcorpAppConnectionApplicationEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.connectors">Connectors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.gateway">Gateway</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList">DataGoogleBeyondcorpAppConnectionGatewayList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.labels">Labels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ApplicationEndpoint`<sup>Required</sup> <a name="ApplicationEndpoint" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.applicationEndpoint"></a>

```csharp
public DataGoogleBeyondcorpAppConnectionApplicationEndpointList ApplicationEndpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList">DataGoogleBeyondcorpAppConnectionApplicationEndpointList</a>

---

##### `Connectors`<sup>Required</sup> <a name="Connectors" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.connectors"></a>

```csharp
public string[] Connectors { get; }
```

- *Type:* string[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.gateway"></a>

```csharp
public DataGoogleBeyondcorpAppConnectionGatewayList Gateway { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList">DataGoogleBeyondcorpAppConnectionGatewayList</a>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBeyondcorpAppConnectionApplicationEndpoint <a name="DataGoogleBeyondcorpAppConnectionApplicationEndpoint" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleBeyondcorpAppConnectionApplicationEndpoint {

};
```


### DataGoogleBeyondcorpAppConnectionConfig <a name="DataGoogleBeyondcorpAppConnectionConfig" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleBeyondcorpAppConnectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null,
    string Project = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.name">Name</a></code> | <code>string</code> | ID of the AppConnection. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/beyondcorp_app_connection#id DataGoogleBeyondcorpAppConnection#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/beyondcorp_app_connection#project DataGoogleBeyondcorpAppConnection#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.region">Region</a></code> | <code>string</code> | The region of the AppConnection. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

ID of the AppConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/beyondcorp_app_connection#name DataGoogleBeyondcorpAppConnection#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/beyondcorp_app_connection#id DataGoogleBeyondcorpAppConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/beyondcorp_app_connection#project DataGoogleBeyondcorpAppConnection#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the AppConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/data-sources/beyondcorp_app_connection#region DataGoogleBeyondcorpAppConnection#region}

---

### DataGoogleBeyondcorpAppConnectionGateway <a name="DataGoogleBeyondcorpAppConnectionGateway" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGateway.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleBeyondcorpAppConnectionGateway {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBeyondcorpAppConnectionApplicationEndpointList <a name="DataGoogleBeyondcorpAppConnectionApplicationEndpointList" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleBeyondcorpAppConnectionApplicationEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.get"></a>

```csharp
private DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference <a name="DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpoint">DataGoogleBeyondcorpAppConnectionApplicationEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpointOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBeyondcorpAppConnectionApplicationEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionApplicationEndpoint">DataGoogleBeyondcorpAppConnectionApplicationEndpoint</a>

---


### DataGoogleBeyondcorpAppConnectionGatewayList <a name="DataGoogleBeyondcorpAppConnectionGatewayList" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleBeyondcorpAppConnectionGatewayList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.get"></a>

```csharp
private DataGoogleBeyondcorpAppConnectionGatewayOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBeyondcorpAppConnectionGatewayOutputReference <a name="DataGoogleBeyondcorpAppConnectionGatewayOutputReference" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleBeyondcorpAppConnectionGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.appGateway">AppGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.ingressPort">IngressPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGateway">DataGoogleBeyondcorpAppConnectionGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppGateway`<sup>Required</sup> <a name="AppGateway" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.appGateway"></a>

```csharp
public string AppGateway { get; }
```

- *Type:* string

---

##### `IngressPort`<sup>Required</sup> <a name="IngressPort" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.ingressPort"></a>

```csharp
public double IngressPort { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGatewayOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBeyondcorpAppConnectionGateway InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBeyondcorpAppConnection.DataGoogleBeyondcorpAppConnectionGateway">DataGoogleBeyondcorpAppConnectionGateway</a>

---



