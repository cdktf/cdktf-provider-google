# `dataGoogleComputeGlobalForwardingRule` Submodule <a name="`dataGoogleComputeGlobalForwardingRule` Submodule" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeGlobalForwardingRule <a name="DataGoogleComputeGlobalForwardingRule" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/compute_global_forwarding_rule google_compute_global_forwarding_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeGlobalForwardingRule(Construct Scope, string Id, DataGoogleComputeGlobalForwardingRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig">DataGoogleComputeGlobalForwardingRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig">DataGoogleComputeGlobalForwardingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeGlobalForwardingRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleComputeGlobalForwardingRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleComputeGlobalForwardingRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleComputeGlobalForwardingRule.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleComputeGlobalForwardingRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleComputeGlobalForwardingRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeGlobalForwardingRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeGlobalForwardingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/compute_global_forwarding_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeGlobalForwardingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.baseForwardingRule">BaseForwardingRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.ipVersion">IpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.labelFingerprint">LabelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.labels">Labels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.metadataFilters">MetadataFilters</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList">DataGoogleComputeGlobalForwardingRuleMetadataFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.noAutomateDnsZone">NoAutomateDnsZone</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.portRange">PortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.pscConnectionId">PscConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.pscConnectionStatus">PscConnectionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.serviceDirectoryRegistrations">ServiceDirectoryRegistrations</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList">DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.sourceIpRanges">SourceIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.subnetwork">Subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BaseForwardingRule`<sup>Required</sup> <a name="BaseForwardingRule" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.baseForwardingRule"></a>

```csharp
public string BaseForwardingRule { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; }
```

- *Type:* string

---

##### `IpVersion`<sup>Required</sup> <a name="IpVersion" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.ipVersion"></a>

```csharp
public string IpVersion { get; }
```

- *Type:* string

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.labelFingerprint"></a>

```csharp
public string LabelFingerprint { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `LoadBalancingScheme`<sup>Required</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.loadBalancingScheme"></a>

```csharp
public string LoadBalancingScheme { get; }
```

- *Type:* string

---

##### `MetadataFilters`<sup>Required</sup> <a name="MetadataFilters" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.metadataFilters"></a>

```csharp
public DataGoogleComputeGlobalForwardingRuleMetadataFiltersList MetadataFilters { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList">DataGoogleComputeGlobalForwardingRuleMetadataFiltersList</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `NoAutomateDnsZone`<sup>Required</sup> <a name="NoAutomateDnsZone" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.noAutomateDnsZone"></a>

```csharp
public IResolvable NoAutomateDnsZone { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.portRange"></a>

```csharp
public string PortRange { get; }
```

- *Type:* string

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.pscConnectionId"></a>

```csharp
public string PscConnectionId { get; }
```

- *Type:* string

---

##### `PscConnectionStatus`<sup>Required</sup> <a name="PscConnectionStatus" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.pscConnectionStatus"></a>

```csharp
public string PscConnectionStatus { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `ServiceDirectoryRegistrations`<sup>Required</sup> <a name="ServiceDirectoryRegistrations" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.serviceDirectoryRegistrations"></a>

```csharp
public DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList ServiceDirectoryRegistrations { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList">DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList</a>

---

##### `SourceIpRanges`<sup>Required</sup> <a name="SourceIpRanges" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.sourceIpRanges"></a>

```csharp
public string[] SourceIpRanges { get; }
```

- *Type:* string[]

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.subnetwork"></a>

```csharp
public string Subnetwork { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeGlobalForwardingRuleConfig <a name="DataGoogleComputeGlobalForwardingRuleConfig" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeGlobalForwardingRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/compute_global_forwarding_rule#id DataGoogleComputeGlobalForwardingRule#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/compute_global_forwarding_rule#project DataGoogleComputeGlobalForwardingRule#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource;

provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).

Specifically, the name must be 1-63 characters long and match the regular
expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit, except the last character, which
cannot be a dash.

For Private Service Connect forwarding rules that forward traffic to Google
APIs, the forwarding rule name must be a 1-20 characters string with
lowercase letters and numbers and must start with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/compute_global_forwarding_rule#name DataGoogleComputeGlobalForwardingRule#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/compute_global_forwarding_rule#id DataGoogleComputeGlobalForwardingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/data-sources/compute_global_forwarding_rule#project DataGoogleComputeGlobalForwardingRule#project}.

---

### DataGoogleComputeGlobalForwardingRuleMetadataFilters <a name="DataGoogleComputeGlobalForwardingRuleMetadataFilters" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeGlobalForwardingRuleMetadataFilters {

};
```


### DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels <a name="DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels {

};
```


### DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrations <a name="DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrations" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrations {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList <a name="DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.get"></a>

```csharp
private DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference <a name="DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels">DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels">DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabels</a>

---


### DataGoogleComputeGlobalForwardingRuleMetadataFiltersList <a name="DataGoogleComputeGlobalForwardingRuleMetadataFiltersList" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeGlobalForwardingRuleMetadataFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.get"></a>

```csharp
private DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference <a name="DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterLabels">FilterLabels</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList">DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterMatchCriteria">FilterMatchCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFilters">DataGoogleComputeGlobalForwardingRuleMetadataFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterLabels`<sup>Required</sup> <a name="FilterLabels" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterLabels"></a>

```csharp
public DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList FilterLabels { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList">DataGoogleComputeGlobalForwardingRuleMetadataFiltersFilterLabelsList</a>

---

##### `FilterMatchCriteria`<sup>Required</sup> <a name="FilterMatchCriteria" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.filterMatchCriteria"></a>

```csharp
public string FilterMatchCriteria { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFiltersOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeGlobalForwardingRuleMetadataFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleMetadataFilters">DataGoogleComputeGlobalForwardingRuleMetadataFilters</a>

---


### DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList <a name="DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.get"></a>

```csharp
private DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference <a name="DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.serviceDirectoryRegion">ServiceDirectoryRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrations">DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ServiceDirectoryRegion`<sup>Required</sup> <a name="ServiceDirectoryRegion" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.serviceDirectoryRegion"></a>

```csharp
public string ServiceDirectoryRegion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrationsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeGlobalForwardingRule.DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrations">DataGoogleComputeGlobalForwardingRuleServiceDirectoryRegistrations</a>

---



