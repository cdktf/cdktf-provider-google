# `dataGoogleGkeHubScopeIamPolicy` Submodule <a name="`dataGoogleGkeHubScopeIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleGkeHubScopeIamPolicy <a name="DataGoogleGkeHubScopeIamPolicy" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/gke_hub_scope_iam_policy google_gke_hub_scope_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleGkeHubScopeIamPolicy(Construct Scope, string Id, DataGoogleGkeHubScopeIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicyConfig">DataGoogleGkeHubScopeIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicyConfig">DataGoogleGkeHubScopeIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleGkeHubScopeIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleGkeHubScopeIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleGkeHubScopeIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleGkeHubScopeIamPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleGkeHubScopeIamPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleGkeHubScopeIamPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleGkeHubScopeIamPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleGkeHubScopeIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/gke_hub_scope_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleGkeHubScopeIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.scopeIdInput">ScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.scopeId">ScopeId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ScopeIdInput`<sup>Optional</sup> <a name="ScopeIdInput" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.scopeIdInput"></a>

```csharp
public string ScopeIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.scopeId"></a>

```csharp
public string ScopeId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleGkeHubScopeIamPolicyConfig <a name="DataGoogleGkeHubScopeIamPolicyConfig" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleGkeHubScopeIamPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ScopeId,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicyConfig.property.scopeId">ScopeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/gke_hub_scope_iam_policy#scope_id DataGoogleGkeHubScopeIamPolicy#scope_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/gke_hub_scope_iam_policy#id DataGoogleGkeHubScopeIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/gke_hub_scope_iam_policy#project DataGoogleGkeHubScopeIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicyConfig.property.scopeId"></a>

```csharp
public string ScopeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/gke_hub_scope_iam_policy#scope_id DataGoogleGkeHubScopeIamPolicy#scope_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/gke_hub_scope_iam_policy#id DataGoogleGkeHubScopeIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleGkeHubScopeIamPolicy.DataGoogleGkeHubScopeIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/gke_hub_scope_iam_policy#project DataGoogleGkeHubScopeIamPolicy#project}.

---



