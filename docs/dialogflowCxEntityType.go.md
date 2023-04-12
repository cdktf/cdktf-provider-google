# `dialogflowCxEntityType` Submodule <a name="`dialogflowCxEntityType` Submodule" id="@cdktf/provider-google.dialogflowCxEntityType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxEntityType <a name="DialogflowCxEntityType" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type google_dialogflow_cx_entity_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxentitytype"

dialogflowcxentitytype.NewDialogflowCxEntityType(scope Construct, id *string, config DialogflowCxEntityTypeConfig) DialogflowCxEntityType
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig">DialogflowCxEntityTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig">DialogflowCxEntityTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putEntities">PutEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putExcludedPhrases">PutExcludedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetAutoExpansionMode">ResetAutoExpansionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetEnableFuzzyExtraction">ResetEnableFuzzyExtraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetExcludedPhrases">ResetExcludedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetLanguageCode">ResetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetRedact">ResetRedact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutEntities` <a name="PutEntities" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putEntities"></a>

```go
func PutEntities(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putEntities.parameter.value"></a>

- *Type:* interface{}

---

##### `PutExcludedPhrases` <a name="PutExcludedPhrases" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putExcludedPhrases"></a>

```go
func PutExcludedPhrases(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putExcludedPhrases.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putTimeouts"></a>

```go
func PutTimeouts(value DialogflowCxEntityTypeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts">DialogflowCxEntityTypeTimeouts</a>

---

##### `ResetAutoExpansionMode` <a name="ResetAutoExpansionMode" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetAutoExpansionMode"></a>

```go
func ResetAutoExpansionMode()
```

##### `ResetEnableFuzzyExtraction` <a name="ResetEnableFuzzyExtraction" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetEnableFuzzyExtraction"></a>

```go
func ResetEnableFuzzyExtraction()
```

##### `ResetExcludedPhrases` <a name="ResetExcludedPhrases" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetExcludedPhrases"></a>

```go
func ResetExcludedPhrases()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetId"></a>

```go
func ResetId()
```

##### `ResetLanguageCode` <a name="ResetLanguageCode" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetLanguageCode"></a>

```go
func ResetLanguageCode()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetParent"></a>

```go
func ResetParent()
```

##### `ResetRedact` <a name="ResetRedact" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetRedact"></a>

```go
func ResetRedact()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxentitytype"

dialogflowcxentitytype.DialogflowCxEntityType_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxentitytype"

dialogflowcxentitytype.DialogflowCxEntityType_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxentitytype"

dialogflowcxentitytype.DialogflowCxEntityType_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.entities">Entities</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList">DialogflowCxEntityTypeEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.excludedPhrases">ExcludedPhrases</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList">DialogflowCxEntityTypeExcludedPhrasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference">DialogflowCxEntityTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.autoExpansionModeInput">AutoExpansionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.enableFuzzyExtractionInput">EnableFuzzyExtractionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.entitiesInput">EntitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.excludedPhrasesInput">ExcludedPhrasesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.languageCodeInput">LanguageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.redactInput">RedactInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.autoExpansionMode">AutoExpansionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.enableFuzzyExtraction">EnableFuzzyExtraction</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.redact">Redact</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Entities`<sup>Required</sup> <a name="Entities" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.entities"></a>

```go
func Entities() DialogflowCxEntityTypeEntitiesList
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList">DialogflowCxEntityTypeEntitiesList</a>

---

##### `ExcludedPhrases`<sup>Required</sup> <a name="ExcludedPhrases" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.excludedPhrases"></a>

```go
func ExcludedPhrases() DialogflowCxEntityTypeExcludedPhrasesList
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList">DialogflowCxEntityTypeExcludedPhrasesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.timeouts"></a>

```go
func Timeouts() DialogflowCxEntityTypeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference">DialogflowCxEntityTypeTimeoutsOutputReference</a>

---

##### `AutoExpansionModeInput`<sup>Optional</sup> <a name="AutoExpansionModeInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.autoExpansionModeInput"></a>

```go
func AutoExpansionModeInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnableFuzzyExtractionInput`<sup>Optional</sup> <a name="EnableFuzzyExtractionInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.enableFuzzyExtractionInput"></a>

```go
func EnableFuzzyExtractionInput() interface{}
```

- *Type:* interface{}

---

##### `EntitiesInput`<sup>Optional</sup> <a name="EntitiesInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.entitiesInput"></a>

```go
func EntitiesInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludedPhrasesInput`<sup>Optional</sup> <a name="ExcludedPhrasesInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.excludedPhrasesInput"></a>

```go
func ExcludedPhrasesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.languageCodeInput"></a>

```go
func LanguageCodeInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `RedactInput`<sup>Optional</sup> <a name="RedactInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.redactInput"></a>

```go
func RedactInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoExpansionMode`<sup>Required</sup> <a name="AutoExpansionMode" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.autoExpansionMode"></a>

```go
func AutoExpansionMode() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnableFuzzyExtraction`<sup>Required</sup> <a name="EnableFuzzyExtraction" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.enableFuzzyExtraction"></a>

```go
func EnableFuzzyExtraction() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `Redact`<sup>Required</sup> <a name="Redact" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.redact"></a>

```go
func Redact() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityType.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxEntityTypeConfig <a name="DialogflowCxEntityTypeConfig" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxentitytype"

&dialogflowcxentitytype.DialogflowCxEntityTypeConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Entities: interface{},
	Kind: *string,
	AutoExpansionMode: *string,
	EnableFuzzyExtraction: interface{},
	ExcludedPhrases: interface{},
	Id: *string,
	LanguageCode: *string,
	Parent: *string,
	Redact: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The human-readable name of the entity type, unique within the agent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.entities">Entities</a></code> | <code>interface{}</code> | entities block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.kind">Kind</a></code> | <code>*string</code> | Indicates whether the entity type can be automatically expanded. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.autoExpansionMode">AutoExpansionMode</a></code> | <code>*string</code> | Represents kinds of entities. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.enableFuzzyExtraction">EnableFuzzyExtraction</a></code> | <code>interface{}</code> | Enables fuzzy entity extraction during classification. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.excludedPhrases">ExcludedPhrases</a></code> | <code>interface{}</code> | excluded_phrases block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type#id DialogflowCxEntityType#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.languageCode">LanguageCode</a></code> | <code>*string</code> | The language of the following fields in entityType: EntityType.entities.value EntityType.entities.synonyms EntityType.excluded_phrases.value If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.parent">Parent</a></code> | <code>*string</code> | The agent to create a entity type for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.redact">Redact</a></code> | <code>interface{}</code> | Indicates whether parameters of the entity type should be redacted in log. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts">DialogflowCxEntityTypeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The human-readable name of the entity type, unique within the agent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type#display_name DialogflowCxEntityType#display_name}

---

##### `Entities`<sup>Required</sup> <a name="Entities" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.entities"></a>

```go
Entities interface{}
```

- *Type:* interface{}

entities block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type#entities DialogflowCxEntityType#entities}

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

Indicates whether the entity type can be automatically expanded.

KIND_MAP: Map entity types allow mapping of a group of synonyms to a canonical value.
KIND_LIST: List entity types contain a set of entries that do not map to canonical values. However, list entity types can contain references to other entity types (with or without aliases).
KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values. Possible values: ["KIND_MAP", "KIND_LIST", "KIND_REGEXP"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type#kind DialogflowCxEntityType#kind}

---

##### `AutoExpansionMode`<sup>Optional</sup> <a name="AutoExpansionMode" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.autoExpansionMode"></a>

```go
AutoExpansionMode *string
```

- *Type:* *string

Represents kinds of entities.

AUTO_EXPANSION_MODE_UNSPECIFIED: Auto expansion disabled for the entity.
AUTO_EXPANSION_MODE_DEFAULT: Allows an agent to recognize values that have not been explicitly listed in the entity. Possible values: ["AUTO_EXPANSION_MODE_DEFAULT", "AUTO_EXPANSION_MODE_UNSPECIFIED"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type#auto_expansion_mode DialogflowCxEntityType#auto_expansion_mode}

---

##### `EnableFuzzyExtraction`<sup>Optional</sup> <a name="EnableFuzzyExtraction" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.enableFuzzyExtraction"></a>

```go
EnableFuzzyExtraction interface{}
```

- *Type:* interface{}

Enables fuzzy entity extraction during classification.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type#enable_fuzzy_extraction DialogflowCxEntityType#enable_fuzzy_extraction}

---

##### `ExcludedPhrases`<sup>Optional</sup> <a name="ExcludedPhrases" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.excludedPhrases"></a>

```go
ExcludedPhrases interface{}
```

- *Type:* interface{}

excluded_phrases block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type#excluded_phrases DialogflowCxEntityType#excluded_phrases}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type#id DialogflowCxEntityType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LanguageCode`<sup>Optional</sup> <a name="LanguageCode" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.languageCode"></a>

```go
LanguageCode *string
```

- *Type:* *string

The language of the following fields in entityType: EntityType.entities.value EntityType.entities.synonyms EntityType.excluded_phrases.value If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type#language_code DialogflowCxEntityType#language_code}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The agent to create a entity type for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type#parent DialogflowCxEntityType#parent}

---

##### `Redact`<sup>Optional</sup> <a name="Redact" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.redact"></a>

```go
Redact interface{}
```

- *Type:* interface{}

Indicates whether parameters of the entity type should be redacted in log.

If redaction is enabled, page parameters and intent parameters referring to the entity type will be replaced by parameter name when logging.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type#redact DialogflowCxEntityType#redact}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeConfig.property.timeouts"></a>

```go
Timeouts DialogflowCxEntityTypeTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts">DialogflowCxEntityTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type#timeouts DialogflowCxEntityType#timeouts}

---

### DialogflowCxEntityTypeEntities <a name="DialogflowCxEntityTypeEntities" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxentitytype"

&dialogflowcxentitytype.DialogflowCxEntityTypeEntities {
	Synonyms: *[]*string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities.property.synonyms">Synonyms</a></code> | <code>*[]*string</code> | A collection of value synonyms. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities.property.value">Value</a></code> | <code>*string</code> | The primary value associated with this entity entry. |

---

##### `Synonyms`<sup>Optional</sup> <a name="Synonyms" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities.property.synonyms"></a>

```go
Synonyms *[]*string
```

- *Type:* *[]*string

A collection of value synonyms.

For example, if the entity type is vegetable, and value is scallions, a synonym could be green onions.
For KIND_LIST entity types: This collection must contain exactly one synonym equal to value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type#synonyms DialogflowCxEntityType#synonyms}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntities.property.value"></a>

```go
Value *string
```

- *Type:* *string

The primary value associated with this entity entry.

For example, if the entity type is vegetable, the value could be scallions.
For KIND_MAP entity types: A canonical value to be used in place of synonyms.
For KIND_LIST entity types: A string that can contain references to other entity types (with or without aliases).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type#value DialogflowCxEntityType#value}

---

### DialogflowCxEntityTypeExcludedPhrases <a name="DialogflowCxEntityTypeExcludedPhrases" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrases.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxentitytype"

&dialogflowcxentitytype.DialogflowCxEntityTypeExcludedPhrases {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrases.property.value">Value</a></code> | <code>*string</code> | The word or phrase to be excluded. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrases.property.value"></a>

```go
Value *string
```

- *Type:* *string

The word or phrase to be excluded.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type#value DialogflowCxEntityType#value}

---

### DialogflowCxEntityTypeTimeouts <a name="DialogflowCxEntityTypeTimeouts" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxentitytype"

&dialogflowcxentitytype.DialogflowCxEntityTypeTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type#create DialogflowCxEntityType#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type#delete DialogflowCxEntityType#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type#update DialogflowCxEntityType#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type#create DialogflowCxEntityType#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type#delete DialogflowCxEntityType#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_entity_type#update DialogflowCxEntityType#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxEntityTypeEntitiesList <a name="DialogflowCxEntityTypeEntitiesList" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxentitytype"

dialogflowcxentitytype.NewDialogflowCxEntityTypeEntitiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DialogflowCxEntityTypeEntitiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.get"></a>

```go
func Get(index *f64) DialogflowCxEntityTypeEntitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCxEntityTypeEntitiesOutputReference <a name="DialogflowCxEntityTypeEntitiesOutputReference" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxentitytype"

dialogflowcxentitytype.NewDialogflowCxEntityTypeEntitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DialogflowCxEntityTypeEntitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.resetSynonyms">ResetSynonyms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSynonyms` <a name="ResetSynonyms" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.resetSynonyms"></a>

```go
func ResetSynonyms()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.synonymsInput">SynonymsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.synonyms">Synonyms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SynonymsInput`<sup>Optional</sup> <a name="SynonymsInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.synonymsInput"></a>

```go
func SynonymsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.synonyms"></a>

```go
func Synonyms() *[]*string
```

- *Type:* *[]*string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeEntitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCxEntityTypeExcludedPhrasesList <a name="DialogflowCxEntityTypeExcludedPhrasesList" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxentitytype"

dialogflowcxentitytype.NewDialogflowCxEntityTypeExcludedPhrasesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DialogflowCxEntityTypeExcludedPhrasesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.get"></a>

```go
func Get(index *f64) DialogflowCxEntityTypeExcludedPhrasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCxEntityTypeExcludedPhrasesOutputReference <a name="DialogflowCxEntityTypeExcludedPhrasesOutputReference" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxentitytype"

dialogflowcxentitytype.NewDialogflowCxEntityTypeExcludedPhrasesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DialogflowCxEntityTypeExcludedPhrasesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeExcludedPhrasesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCxEntityTypeTimeoutsOutputReference <a name="DialogflowCxEntityTypeTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxentitytype"

dialogflowcxentitytype.NewDialogflowCxEntityTypeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowCxEntityTypeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxEntityType.DialogflowCxEntityTypeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



