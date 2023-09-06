# `google_bigquery_routine`

Refer to the Terraform Registory for docs: [`google_bigquery_routine`](https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine).

# `bigqueryRoutine` Submodule <a name="`bigqueryRoutine` Submodule" id="@cdktf/provider-google.bigqueryRoutine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryRoutine <a name="BigqueryRoutine" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine google_bigquery_routine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryRoutine(Construct Scope, string Id, BigqueryRoutineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig">BigqueryRoutineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig">BigqueryRoutineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putArguments">PutArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetDeterminismLevel">ResetDeterminismLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetImportedLibraries">ResetImportedLibraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetLanguage">ResetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetReturnTableType">ResetReturnTableType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetReturnType">ResetReturnType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetRoutineType">ResetRoutineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutArguments` <a name="PutArguments" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putArguments"></a>

```csharp
private void PutArguments(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putArguments.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putTimeouts"></a>

```csharp
private void PutTimeouts(BigqueryRoutineTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts">BigqueryRoutineTimeouts</a>

---

##### `ResetArguments` <a name="ResetArguments" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetArguments"></a>

```csharp
private void ResetArguments()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDeterminismLevel` <a name="ResetDeterminismLevel" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetDeterminismLevel"></a>

```csharp
private void ResetDeterminismLevel()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImportedLibraries` <a name="ResetImportedLibraries" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetImportedLibraries"></a>

```csharp
private void ResetImportedLibraries()
```

##### `ResetLanguage` <a name="ResetLanguage" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetLanguage"></a>

```csharp
private void ResetLanguage()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetReturnTableType` <a name="ResetReturnTableType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetReturnTableType"></a>

```csharp
private void ResetReturnTableType()
```

##### `ResetReturnType` <a name="ResetReturnType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetReturnType"></a>

```csharp
private void ResetReturnType()
```

##### `ResetRoutineType` <a name="ResetRoutineType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetRoutineType"></a>

```csharp
private void ResetRoutineType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryRoutine.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryRoutine.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryRoutine.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.arguments">Arguments</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList">BigqueryRoutineArgumentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.creationTime">CreationTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.lastModifiedTime">LastModifiedTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference">BigqueryRoutineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.argumentsInput">ArgumentsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.datasetIdInput">DatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.definitionBodyInput">DefinitionBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.determinismLevelInput">DeterminismLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.importedLibrariesInput">ImportedLibrariesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.languageInput">LanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnTableTypeInput">ReturnTableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnTypeInput">ReturnTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineIdInput">RoutineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineTypeInput">RoutineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.definitionBody">DefinitionBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.determinismLevel">DeterminismLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.importedLibraries">ImportedLibraries</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.language">Language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnTableType">ReturnTableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnType">ReturnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineId">RoutineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineType">RoutineType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.arguments"></a>

```csharp
public BigqueryRoutineArgumentsList Arguments { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList">BigqueryRoutineArgumentsList</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.creationTime"></a>

```csharp
public double CreationTime { get; }
```

- *Type:* double

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.lastModifiedTime"></a>

```csharp
public double LastModifiedTime { get; }
```

- *Type:* double

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.timeouts"></a>

```csharp
public BigqueryRoutineTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference">BigqueryRoutineTimeoutsOutputReference</a>

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.argumentsInput"></a>

```csharp
public object ArgumentsInput { get; }
```

- *Type:* object

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.datasetIdInput"></a>

```csharp
public string DatasetIdInput { get; }
```

- *Type:* string

---

##### `DefinitionBodyInput`<sup>Optional</sup> <a name="DefinitionBodyInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.definitionBodyInput"></a>

```csharp
public string DefinitionBodyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DeterminismLevelInput`<sup>Optional</sup> <a name="DeterminismLevelInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.determinismLevelInput"></a>

```csharp
public string DeterminismLevelInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImportedLibrariesInput`<sup>Optional</sup> <a name="ImportedLibrariesInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.importedLibrariesInput"></a>

```csharp
public string[] ImportedLibrariesInput { get; }
```

- *Type:* string[]

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.languageInput"></a>

```csharp
public string LanguageInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReturnTableTypeInput`<sup>Optional</sup> <a name="ReturnTableTypeInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnTableTypeInput"></a>

```csharp
public string ReturnTableTypeInput { get; }
```

- *Type:* string

---

##### `ReturnTypeInput`<sup>Optional</sup> <a name="ReturnTypeInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnTypeInput"></a>

```csharp
public string ReturnTypeInput { get; }
```

- *Type:* string

---

##### `RoutineIdInput`<sup>Optional</sup> <a name="RoutineIdInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineIdInput"></a>

```csharp
public string RoutineIdInput { get; }
```

- *Type:* string

---

##### `RoutineTypeInput`<sup>Optional</sup> <a name="RoutineTypeInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineTypeInput"></a>

```csharp
public string RoutineTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `DefinitionBody`<sup>Required</sup> <a name="DefinitionBody" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.definitionBody"></a>

```csharp
public string DefinitionBody { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DeterminismLevel`<sup>Required</sup> <a name="DeterminismLevel" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.determinismLevel"></a>

```csharp
public string DeterminismLevel { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImportedLibraries`<sup>Required</sup> <a name="ImportedLibraries" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.importedLibraries"></a>

```csharp
public string[] ImportedLibraries { get; }
```

- *Type:* string[]

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.language"></a>

```csharp
public string Language { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ReturnTableType`<sup>Required</sup> <a name="ReturnTableType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnTableType"></a>

```csharp
public string ReturnTableType { get; }
```

- *Type:* string

---

##### `ReturnType`<sup>Required</sup> <a name="ReturnType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnType"></a>

```csharp
public string ReturnType { get; }
```

- *Type:* string

---

##### `RoutineId`<sup>Required</sup> <a name="RoutineId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineId"></a>

```csharp
public string RoutineId { get; }
```

- *Type:* string

---

##### `RoutineType`<sup>Required</sup> <a name="RoutineType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineType"></a>

```csharp
public string RoutineType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryRoutineArguments <a name="BigqueryRoutineArguments" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryRoutineArguments {
    string ArgumentKind = null,
    string DataType = null,
    string Mode = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.argumentKind">ArgumentKind</a></code> | <code>string</code> | Defaults to FIXED_TYPE. Default value: "FIXED_TYPE" Possible values: ["FIXED_TYPE", "ANY_TYPE"]. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.dataType">DataType</a></code> | <code>string</code> | A JSON schema for the data type. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.mode">Mode</a></code> | <code>string</code> | Specifies whether the argument is input or output. Can be set for procedures only. Possible values: ["IN", "OUT", "INOUT"]. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.name">Name</a></code> | <code>string</code> | The name of this argument. Can be absent for function return argument. |

---

##### `ArgumentKind`<sup>Optional</sup> <a name="ArgumentKind" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.argumentKind"></a>

```csharp
public string ArgumentKind { get; set; }
```

- *Type:* string

Defaults to FIXED_TYPE. Default value: "FIXED_TYPE" Possible values: ["FIXED_TYPE", "ANY_TYPE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine#argument_kind BigqueryRoutine#argument_kind}

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.dataType"></a>

```csharp
public string DataType { get; set; }
```

- *Type:* string

A JSON schema for the data type.

Required unless argumentKind = ANY_TYPE.
~>**NOTE**: Because this field expects a JSON string, any changes to the string
will create a diff, even if the JSON itself hasn't changed. If the API returns
a different value for the same schema, e.g. it switched the order of values
or replaced STRUCT field type with RECORD field type, we currently cannot
suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine#data_type BigqueryRoutine#data_type}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Specifies whether the argument is input or output. Can be set for procedures only. Possible values: ["IN", "OUT", "INOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine#mode BigqueryRoutine#mode}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of this argument. Can be absent for function return argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine#name BigqueryRoutine#name}

---

### BigqueryRoutineConfig <a name="BigqueryRoutineConfig" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryRoutineConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatasetId,
    string DefinitionBody,
    string RoutineId,
    object Arguments = null,
    string Description = null,
    string DeterminismLevel = null,
    string Id = null,
    string[] ImportedLibraries = null,
    string Language = null,
    string Project = null,
    string ReturnTableType = null,
    string ReturnType = null,
    string RoutineType = null,
    BigqueryRoutineTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.datasetId">DatasetId</a></code> | <code>string</code> | The ID of the dataset containing this routine. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.definitionBody">DefinitionBody</a></code> | <code>string</code> | The body of the routine. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.routineId">RoutineId</a></code> | <code>string</code> | The ID of the the routine. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.arguments">Arguments</a></code> | <code>object</code> | arguments block. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.description">Description</a></code> | <code>string</code> | The description of the routine if defined. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.determinismLevel">DeterminismLevel</a></code> | <code>string</code> | The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"]. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine#id BigqueryRoutine#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.importedLibraries">ImportedLibraries</a></code> | <code>string[]</code> | Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.language">Language</a></code> | <code>string</code> | The language of the routine. Possible values: ["SQL", "JAVASCRIPT"]. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine#project BigqueryRoutine#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.returnTableType">ReturnTableType</a></code> | <code>string</code> | Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION". |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.returnType">ReturnType</a></code> | <code>string</code> | A JSON schema for the return type. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.routineType">RoutineType</a></code> | <code>string</code> | The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"]. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts">BigqueryRoutineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.datasetId"></a>

```csharp
public string DatasetId { get; set; }
```

- *Type:* string

The ID of the dataset containing this routine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine#dataset_id BigqueryRoutine#dataset_id}

---

##### `DefinitionBody`<sup>Required</sup> <a name="DefinitionBody" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.definitionBody"></a>

```csharp
public string DefinitionBody { get; set; }
```

- *Type:* string

The body of the routine.

For functions, this is the expression in the AS clause.
If language=SQL, it is the substring inside (but excluding) the parentheses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine#definition_body BigqueryRoutine#definition_body}

---

##### `RoutineId`<sup>Required</sup> <a name="RoutineId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.routineId"></a>

```csharp
public string RoutineId { get; set; }
```

- *Type:* string

The ID of the the routine.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine#routine_id BigqueryRoutine#routine_id}

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.arguments"></a>

```csharp
public object Arguments { get; set; }
```

- *Type:* object

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine#arguments BigqueryRoutine#arguments}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the routine if defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine#description BigqueryRoutine#description}

---

##### `DeterminismLevel`<sup>Optional</sup> <a name="DeterminismLevel" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.determinismLevel"></a>

```csharp
public string DeterminismLevel { get; set; }
```

- *Type:* string

The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine#determinism_level BigqueryRoutine#determinism_level}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine#id BigqueryRoutine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportedLibraries`<sup>Optional</sup> <a name="ImportedLibraries" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.importedLibraries"></a>

```csharp
public string[] ImportedLibraries { get; set; }
```

- *Type:* string[]

Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine#imported_libraries BigqueryRoutine#imported_libraries}

---

##### `Language`<sup>Optional</sup> <a name="Language" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.language"></a>

```csharp
public string Language { get; set; }
```

- *Type:* string

The language of the routine. Possible values: ["SQL", "JAVASCRIPT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine#language BigqueryRoutine#language}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine#project BigqueryRoutine#project}.

---

##### `ReturnTableType`<sup>Optional</sup> <a name="ReturnTableType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.returnTableType"></a>

```csharp
public string ReturnTableType { get; set; }
```

- *Type:* string

Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION".

If absent, the return table type is inferred from definitionBody at query time in each query
that references this routine. If present, then the columns in the evaluated table result will
be cast to match the column types specificed in return table type, at query time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine#return_table_type BigqueryRoutine#return_table_type}

---

##### `ReturnType`<sup>Optional</sup> <a name="ReturnType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.returnType"></a>

```csharp
public string ReturnType { get; set; }
```

- *Type:* string

A JSON schema for the return type.

Optional if language = "SQL"; required otherwise.
If absent, the return type is inferred from definitionBody at query time in each query
that references this routine. If present, then the evaluated result will be cast to
the specified returned type at query time. ~>**NOTE**: Because this field expects a JSON
string, any changes to the string will create a diff, even if the JSON itself hasn't
changed. If the API returns a different value for the same schema, e.g. it switche
d the order of values or replaced STRUCT field type with RECORD field type, we currently
cannot suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine#return_type BigqueryRoutine#return_type}

---

##### `RoutineType`<sup>Optional</sup> <a name="RoutineType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.routineType"></a>

```csharp
public string RoutineType { get; set; }
```

- *Type:* string

The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine#routine_type BigqueryRoutine#routine_type}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.timeouts"></a>

```csharp
public BigqueryRoutineTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts">BigqueryRoutineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine#timeouts BigqueryRoutine#timeouts}

---

### BigqueryRoutineTimeouts <a name="BigqueryRoutineTimeouts" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryRoutineTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine#create BigqueryRoutine#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine#delete BigqueryRoutine#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine#update BigqueryRoutine#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine#create BigqueryRoutine#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine#delete BigqueryRoutine#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/bigquery_routine#update BigqueryRoutine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryRoutineArgumentsList <a name="BigqueryRoutineArgumentsList" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryRoutineArgumentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.get"></a>

```csharp
private BigqueryRoutineArgumentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BigqueryRoutineArgumentsOutputReference <a name="BigqueryRoutineArgumentsOutputReference" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryRoutineArgumentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetArgumentKind">ResetArgumentKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArgumentKind` <a name="ResetArgumentKind" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetArgumentKind"></a>

```csharp
private void ResetArgumentKind()
```

##### `ResetDataType` <a name="ResetDataType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetDataType"></a>

```csharp
private void ResetDataType()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.argumentKindInput">ArgumentKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.argumentKind">ArgumentKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArgumentKindInput`<sup>Optional</sup> <a name="ArgumentKindInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.argumentKindInput"></a>

```csharp
public string ArgumentKindInput { get; }
```

- *Type:* string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.dataTypeInput"></a>

```csharp
public string DataTypeInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ArgumentKind`<sup>Required</sup> <a name="ArgumentKind" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.argumentKind"></a>

```csharp
public string ArgumentKind { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BigqueryRoutineTimeoutsOutputReference <a name="BigqueryRoutineTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryRoutineTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



