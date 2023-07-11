# `data_google_tpu_tensorflow_versions`

Refer to the Terraform Registory for docs: [`data_google_tpu_tensorflow_versions`](https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/tpu_tensorflow_versions).

# `dataGoogleTpuTensorflowVersions` Submodule <a name="`dataGoogleTpuTensorflowVersions` Submodule" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleTpuTensorflowVersions <a name="DataGoogleTpuTensorflowVersions" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/tpu_tensorflow_versions google_tpu_tensorflow_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleTpuTensorflowVersions(Construct Scope, string Id, DataGoogleTpuTensorflowVersionsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig">DataGoogleTpuTensorflowVersionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig">DataGoogleTpuTensorflowVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleTpuTensorflowVersions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleTpuTensorflowVersions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleTpuTensorflowVersions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.versions">Versions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.versions"></a>

```csharp
public string[] Versions { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleTpuTensorflowVersionsConfig <a name="DataGoogleTpuTensorflowVersionsConfig" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleTpuTensorflowVersionsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string Project = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/tpu_tensorflow_versions#id DataGoogleTpuTensorflowVersions#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/tpu_tensorflow_versions#project DataGoogleTpuTensorflowVersions#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.zone">Zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/tpu_tensorflow_versions#zone DataGoogleTpuTensorflowVersions#zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/tpu_tensorflow_versions#id DataGoogleTpuTensorflowVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/tpu_tensorflow_versions#project DataGoogleTpuTensorflowVersions#project}.

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.dataGoogleTpuTensorflowVersions.DataGoogleTpuTensorflowVersionsConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/data-sources/tpu_tensorflow_versions#zone DataGoogleTpuTensorflowVersions#zone}.

---



