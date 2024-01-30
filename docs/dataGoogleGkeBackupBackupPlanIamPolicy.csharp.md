# `dataGoogleGkeBackupBackupPlanIamPolicy` Submodule <a name="`dataGoogleGkeBackupBackupPlanIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleGkeBackupBackupPlanIamPolicy <a name="DataGoogleGkeBackupBackupPlanIamPolicy" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/data-sources/gke_backup_backup_plan_iam_policy google_gke_backup_backup_plan_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleGkeBackupBackupPlanIamPolicy(Construct Scope, string Id, DataGoogleGkeBackupBackupPlanIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig">DataGoogleGkeBackupBackupPlanIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig">DataGoogleGkeBackupBackupPlanIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleGkeBackupBackupPlanIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleGkeBackupBackupPlanIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleGkeBackupBackupPlanIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleGkeBackupBackupPlanIamPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleGkeBackupBackupPlanIamPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleGkeBackupBackupPlanIamPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleGkeBackupBackupPlanIamPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleGkeBackupBackupPlanIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/data-sources/gke_backup_backup_plan_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleGkeBackupBackupPlanIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleGkeBackupBackupPlanIamPolicyConfig <a name="DataGoogleGkeBackupBackupPlanIamPolicyConfig" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleGkeBackupBackupPlanIamPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/data-sources/gke_backup_backup_plan_iam_policy#name DataGoogleGkeBackupBackupPlanIamPolicy#name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/data-sources/gke_backup_backup_plan_iam_policy#id DataGoogleGkeBackupBackupPlanIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/data-sources/gke_backup_backup_plan_iam_policy#location DataGoogleGkeBackupBackupPlanIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/data-sources/gke_backup_backup_plan_iam_policy#project DataGoogleGkeBackupBackupPlanIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/data-sources/gke_backup_backup_plan_iam_policy#name DataGoogleGkeBackupBackupPlanIamPolicy#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/data-sources/gke_backup_backup_plan_iam_policy#id DataGoogleGkeBackupBackupPlanIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/data-sources/gke_backup_backup_plan_iam_policy#location DataGoogleGkeBackupBackupPlanIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleGkeBackupBackupPlanIamPolicy.DataGoogleGkeBackupBackupPlanIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/data-sources/gke_backup_backup_plan_iam_policy#project DataGoogleGkeBackupBackupPlanIamPolicy#project}.

---



