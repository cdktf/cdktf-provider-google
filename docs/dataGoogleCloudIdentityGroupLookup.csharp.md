# `dataGoogleCloudIdentityGroupLookup` Submodule <a name="`dataGoogleCloudIdentityGroupLookup` Submodule" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudIdentityGroupLookup <a name="DataGoogleCloudIdentityGroupLookup" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/cloud_identity_group_lookup google_cloud_identity_group_lookup}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupLookup(Construct Scope, string Id, DataGoogleCloudIdentityGroupLookupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig">DataGoogleCloudIdentityGroupLookupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig">DataGoogleCloudIdentityGroupLookupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.putGroupKey">PutGroupKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutGroupKey` <a name="PutGroupKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.putGroupKey"></a>

```csharp
private void PutGroupKey(DataGoogleCloudIdentityGroupLookupGroupKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.putGroupKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleCloudIdentityGroupLookup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleCloudIdentityGroupLookup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleCloudIdentityGroupLookup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleCloudIdentityGroupLookup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleCloudIdentityGroupLookup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleCloudIdentityGroupLookup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleCloudIdentityGroupLookup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleCloudIdentityGroupLookup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/cloud_identity_group_lookup#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudIdentityGroupLookup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.groupKey">GroupKey</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference">DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.groupKeyInput">GroupKeyInput</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `GroupKey`<sup>Required</sup> <a name="GroupKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.groupKey"></a>

```csharp
public DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference GroupKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference">DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `GroupKeyInput`<sup>Optional</sup> <a name="GroupKeyInput" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.groupKeyInput"></a>

```csharp
public DataGoogleCloudIdentityGroupLookupGroupKey GroupKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudIdentityGroupLookupConfig <a name="DataGoogleCloudIdentityGroupLookupConfig" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupLookupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    DataGoogleCloudIdentityGroupLookupGroupKey GroupKey,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.groupKey">GroupKey</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a></code> | group_key block. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/cloud_identity_group_lookup#id DataGoogleCloudIdentityGroupLookup#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GroupKey`<sup>Required</sup> <a name="GroupKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.groupKey"></a>

```csharp
public DataGoogleCloudIdentityGroupLookupGroupKey GroupKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a>

group_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/cloud_identity_group_lookup#group_key DataGoogleCloudIdentityGroupLookup#group_key}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/cloud_identity_group_lookup#id DataGoogleCloudIdentityGroupLookup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleCloudIdentityGroupLookupGroupKey <a name="DataGoogleCloudIdentityGroupLookupGroupKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupLookupGroupKey {
    string Id,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey.property.id">Id</a></code> | <code>string</code> | The ID of the entity. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey.property.namespace">Namespace</a></code> | <code>string</code> | The namespace in which the entity exists. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the entity.

For Google-managed entities, the id should be the email address of an existing group or user.
For external-identity-mapped entities, the id must be a string conforming to the Identity Source's requirements.
Must be unique within a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/cloud_identity_group_lookup#id DataGoogleCloudIdentityGroupLookup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The namespace in which the entity exists.

If not specified, the EntityKey represents a Google-managed entity such as a Google user or a Google Group.
If specified, the EntityKey represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of identitysources/{identity_source}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/cloud_identity_group_lookup#namespace DataGoogleCloudIdentityGroupLookup#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference <a name="DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKeyOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudIdentityGroupLookupGroupKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupLookup.DataGoogleCloudIdentityGroupLookupGroupKey">DataGoogleCloudIdentityGroupLookupGroupKey</a>

---



