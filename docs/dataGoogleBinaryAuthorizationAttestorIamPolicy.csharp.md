# `dataGoogleBinaryAuthorizationAttestorIamPolicy` Submodule <a name="`dataGoogleBinaryAuthorizationAttestorIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBinaryAuthorizationAttestorIamPolicy <a name="DataGoogleBinaryAuthorizationAttestorIamPolicy" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/data-sources/binary_authorization_attestor_iam_policy google_binary_authorization_attestor_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleBinaryAuthorizationAttestorIamPolicy(Construct Scope, string Id, DataGoogleBinaryAuthorizationAttestorIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig">DataGoogleBinaryAuthorizationAttestorIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig">DataGoogleBinaryAuthorizationAttestorIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleBinaryAuthorizationAttestorIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleBinaryAuthorizationAttestorIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleBinaryAuthorizationAttestorIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleBinaryAuthorizationAttestorIamPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleBinaryAuthorizationAttestorIamPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleBinaryAuthorizationAttestorIamPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleBinaryAuthorizationAttestorIamPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleBinaryAuthorizationAttestorIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/data-sources/binary_authorization_attestor_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleBinaryAuthorizationAttestorIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.attestorInput">AttestorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.attestor">Attestor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `AttestorInput`<sup>Optional</sup> <a name="AttestorInput" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.attestorInput"></a>

```csharp
public string AttestorInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Attestor`<sup>Required</sup> <a name="Attestor" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.attestor"></a>

```csharp
public string Attestor { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBinaryAuthorizationAttestorIamPolicyConfig <a name="DataGoogleBinaryAuthorizationAttestorIamPolicyConfig" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleBinaryAuthorizationAttestorIamPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Attestor,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.attestor">Attestor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/data-sources/binary_authorization_attestor_iam_policy#attestor DataGoogleBinaryAuthorizationAttestorIamPolicy#attestor}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/data-sources/binary_authorization_attestor_iam_policy#id DataGoogleBinaryAuthorizationAttestorIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/data-sources/binary_authorization_attestor_iam_policy#project DataGoogleBinaryAuthorizationAttestorIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Attestor`<sup>Required</sup> <a name="Attestor" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.attestor"></a>

```csharp
public string Attestor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/data-sources/binary_authorization_attestor_iam_policy#attestor DataGoogleBinaryAuthorizationAttestorIamPolicy#attestor}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/data-sources/binary_authorization_attestor_iam_policy#id DataGoogleBinaryAuthorizationAttestorIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleBinaryAuthorizationAttestorIamPolicy.DataGoogleBinaryAuthorizationAttestorIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/data-sources/binary_authorization_attestor_iam_policy#project DataGoogleBinaryAuthorizationAttestorIamPolicy#project}.

---



