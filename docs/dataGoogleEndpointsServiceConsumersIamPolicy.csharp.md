# `dataGoogleEndpointsServiceConsumersIamPolicy` Submodule <a name="`dataGoogleEndpointsServiceConsumersIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleEndpointsServiceConsumersIamPolicy <a name="DataGoogleEndpointsServiceConsumersIamPolicy" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/data-sources/endpoints_service_consumers_iam_policy google_endpoints_service_consumers_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleEndpointsServiceConsumersIamPolicy(Construct Scope, string Id, DataGoogleEndpointsServiceConsumersIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig">DataGoogleEndpointsServiceConsumersIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig">DataGoogleEndpointsServiceConsumersIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleEndpointsServiceConsumersIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleEndpointsServiceConsumersIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleEndpointsServiceConsumersIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleEndpointsServiceConsumersIamPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleEndpointsServiceConsumersIamPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleEndpointsServiceConsumersIamPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleEndpointsServiceConsumersIamPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleEndpointsServiceConsumersIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/data-sources/endpoints_service_consumers_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleEndpointsServiceConsumersIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.consumerProjectInput">ConsumerProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.consumerProject">ConsumerProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `ConsumerProjectInput`<sup>Optional</sup> <a name="ConsumerProjectInput" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.consumerProjectInput"></a>

```csharp
public string ConsumerProjectInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `ConsumerProject`<sup>Required</sup> <a name="ConsumerProject" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.consumerProject"></a>

```csharp
public string ConsumerProject { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleEndpointsServiceConsumersIamPolicyConfig <a name="DataGoogleEndpointsServiceConsumersIamPolicyConfig" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleEndpointsServiceConsumersIamPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConsumerProject,
    string ServiceName,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.consumerProject">ConsumerProject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/data-sources/endpoints_service_consumers_iam_policy#consumer_project DataGoogleEndpointsServiceConsumersIamPolicy#consumer_project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.serviceName">ServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/data-sources/endpoints_service_consumers_iam_policy#service_name DataGoogleEndpointsServiceConsumersIamPolicy#service_name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/data-sources/endpoints_service_consumers_iam_policy#id DataGoogleEndpointsServiceConsumersIamPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConsumerProject`<sup>Required</sup> <a name="ConsumerProject" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.consumerProject"></a>

```csharp
public string ConsumerProject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/data-sources/endpoints_service_consumers_iam_policy#consumer_project DataGoogleEndpointsServiceConsumersIamPolicy#consumer_project}.

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/data-sources/endpoints_service_consumers_iam_policy#service_name DataGoogleEndpointsServiceConsumersIamPolicy#service_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleEndpointsServiceConsumersIamPolicy.DataGoogleEndpointsServiceConsumersIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/data-sources/endpoints_service_consumers_iam_policy#id DataGoogleEndpointsServiceConsumersIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



