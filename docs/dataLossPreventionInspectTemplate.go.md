# `dataLossPreventionInspectTemplate` Submodule <a name="`dataLossPreventionInspectTemplate` Submodule" id="@cdktf/provider-google.dataLossPreventionInspectTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLossPreventionInspectTemplate <a name="DataLossPreventionInspectTemplate" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template google_data_loss_prevention_inspect_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplate(scope Construct, id *string, config DataLossPreventionInspectTemplateConfig) DataLossPreventionInspectTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig">DataLossPreventionInspectTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig">DataLossPreventionInspectTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.putInspectConfig">PutInspectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.resetInspectConfig">ResetInspectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutInspectConfig` <a name="PutInspectConfig" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.putInspectConfig"></a>

```go
func PutInspectConfig(value DataLossPreventionInspectTemplateInspectConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.putInspectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig">DataLossPreventionInspectTemplateInspectConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.putTimeouts"></a>

```go
func PutTimeouts(value DataLossPreventionInspectTemplateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts">DataLossPreventionInspectTemplateTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetInspectConfig` <a name="ResetInspectConfig" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.resetInspectConfig"></a>

```go
func ResetInspectConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.DataLossPreventionInspectTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.DataLossPreventionInspectTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.DataLossPreventionInspectTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.inspectConfig">InspectConfig</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference">DataLossPreventionInspectTemplateInspectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference">DataLossPreventionInspectTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.inspectConfigInput">InspectConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig">DataLossPreventionInspectTemplateInspectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InspectConfig`<sup>Required</sup> <a name="InspectConfig" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.inspectConfig"></a>

```go
func InspectConfig() DataLossPreventionInspectTemplateInspectConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference">DataLossPreventionInspectTemplateInspectConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.timeouts"></a>

```go
func Timeouts() DataLossPreventionInspectTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference">DataLossPreventionInspectTemplateTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InspectConfigInput`<sup>Optional</sup> <a name="InspectConfigInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.inspectConfigInput"></a>

```go
func InspectConfigInput() DataLossPreventionInspectTemplateInspectConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig">DataLossPreventionInspectTemplateInspectConfig</a>

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataLossPreventionInspectTemplateConfig <a name="DataLossPreventionInspectTemplateConfig" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Parent: *string,
	Description: *string,
	DisplayName: *string,
	Id: *string,
	InspectConfig: github.com/cdktf/cdktf-provider-google-go/google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.parent">Parent</a></code> | <code>*string</code> | The parent of the inspect template in any of the following formats:. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.description">Description</a></code> | <code>*string</code> | A description of the inspect template. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User set display name of the inspect template. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#id DataLossPreventionInspectTemplate#id}. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.inspectConfig">InspectConfig</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig">DataLossPreventionInspectTemplateInspectConfig</a></code> | inspect_config block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts">DataLossPreventionInspectTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The parent of the inspect template in any of the following formats:.

'projects/{{project}}'
'projects/{{project}}/locations/{{location}}'
'organizations/{{organization_id}}'
'organizations/{{organization_id}}/locations/{{location}}'

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#parent DataLossPreventionInspectTemplate#parent}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the inspect template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#description DataLossPreventionInspectTemplate#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User set display name of the inspect template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#display_name DataLossPreventionInspectTemplate#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#id DataLossPreventionInspectTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InspectConfig`<sup>Optional</sup> <a name="InspectConfig" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.inspectConfig"></a>

```go
InspectConfig DataLossPreventionInspectTemplateInspectConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig">DataLossPreventionInspectTemplateInspectConfig</a>

inspect_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#inspect_config DataLossPreventionInspectTemplate#inspect_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateConfig.property.timeouts"></a>

```go
Timeouts DataLossPreventionInspectTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts">DataLossPreventionInspectTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#timeouts DataLossPreventionInspectTemplate#timeouts}

---

### DataLossPreventionInspectTemplateInspectConfig <a name="DataLossPreventionInspectTemplateInspectConfig" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateInspectConfig {
	ContentOptions: *[]*string,
	CustomInfoTypes: interface{},
	ExcludeInfoTypes: interface{},
	IncludeQuote: interface{},
	InfoTypes: interface{},
	Limits: github.com/cdktf/cdktf-provider-google-go/google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits,
	MinLikelihood: *string,
	RuleSet: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.contentOptions">ContentOptions</a></code> | <code>*[]*string</code> | List of options defining data content to scan. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.customInfoTypes">CustomInfoTypes</a></code> | <code>interface{}</code> | custom_info_types block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.excludeInfoTypes">ExcludeInfoTypes</a></code> | <code>interface{}</code> | When true, excludes type information of the findings. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.includeQuote">IncludeQuote</a></code> | <code>interface{}</code> | When true, a contextual quote from the data that triggered a finding is included in the response. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.infoTypes">InfoTypes</a></code> | <code>interface{}</code> | info_types block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits">DataLossPreventionInspectTemplateInspectConfigLimits</a></code> | limits block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.minLikelihood">MinLikelihood</a></code> | <code>*string</code> | Only returns findings equal or above this threshold. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.ruleSet">RuleSet</a></code> | <code>interface{}</code> | rule_set block. |

---

##### `ContentOptions`<sup>Optional</sup> <a name="ContentOptions" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.contentOptions"></a>

```go
ContentOptions *[]*string
```

- *Type:* *[]*string

List of options defining data content to scan.

If empty, text, images, and other content will be included. Possible values: ["CONTENT_TEXT", "CONTENT_IMAGE"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#content_options DataLossPreventionInspectTemplate#content_options}

---

##### `CustomInfoTypes`<sup>Optional</sup> <a name="CustomInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.customInfoTypes"></a>

```go
CustomInfoTypes interface{}
```

- *Type:* interface{}

custom_info_types block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#custom_info_types DataLossPreventionInspectTemplate#custom_info_types}

---

##### `ExcludeInfoTypes`<sup>Optional</sup> <a name="ExcludeInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.excludeInfoTypes"></a>

```go
ExcludeInfoTypes interface{}
```

- *Type:* interface{}

When true, excludes type information of the findings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#exclude_info_types DataLossPreventionInspectTemplate#exclude_info_types}

---

##### `IncludeQuote`<sup>Optional</sup> <a name="IncludeQuote" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.includeQuote"></a>

```go
IncludeQuote interface{}
```

- *Type:* interface{}

When true, a contextual quote from the data that triggered a finding is included in the response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#include_quote DataLossPreventionInspectTemplate#include_quote}

---

##### `InfoTypes`<sup>Optional</sup> <a name="InfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.infoTypes"></a>

```go
InfoTypes interface{}
```

- *Type:* interface{}

info_types block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#info_types DataLossPreventionInspectTemplate#info_types}

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.limits"></a>

```go
Limits DataLossPreventionInspectTemplateInspectConfigLimits
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits">DataLossPreventionInspectTemplateInspectConfigLimits</a>

limits block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#limits DataLossPreventionInspectTemplate#limits}

---

##### `MinLikelihood`<sup>Optional</sup> <a name="MinLikelihood" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.minLikelihood"></a>

```go
MinLikelihood *string
```

- *Type:* *string

Only returns findings equal or above this threshold.

See https://cloud.google.com/dlp/docs/likelihood for more info Default value: "POSSIBLE" Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#min_likelihood DataLossPreventionInspectTemplate#min_likelihood}

---

##### `RuleSet`<sup>Optional</sup> <a name="RuleSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig.property.ruleSet"></a>

```go
RuleSet interface{}
```

- *Type:* interface{}

rule_set block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#rule_set DataLossPreventionInspectTemplate#rule_set}

---

### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes {
	InfoType: github.com/cdktf/cdktf-provider-google-go/google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType,
	Dictionary: github.com/cdktf/cdktf-provider-google-go/google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary,
	ExclusionType: *string,
	Likelihood: *string,
	Regex: github.com/cdktf/cdktf-provider-google-go/google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex,
	StoredType: github.com/cdktf/cdktf-provider-google-go/google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.infoType">InfoType</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType</a></code> | info_type block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.dictionary">Dictionary</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary</a></code> | dictionary block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.exclusionType">ExclusionType</a></code> | <code>*string</code> | If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.likelihood">Likelihood</a></code> | <code>*string</code> | Likelihood to return for this CustomInfoType. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.regex">Regex</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex</a></code> | regex block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.storedType">StoredType</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType</a></code> | stored_type block. |

---

##### `InfoType`<sup>Required</sup> <a name="InfoType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.infoType"></a>

```go
InfoType DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType</a>

info_type block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#info_type DataLossPreventionInspectTemplate#info_type}

---

##### `Dictionary`<sup>Optional</sup> <a name="Dictionary" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.dictionary"></a>

```go
Dictionary DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary</a>

dictionary block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#dictionary DataLossPreventionInspectTemplate#dictionary}

---

##### `ExclusionType`<sup>Optional</sup> <a name="ExclusionType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.exclusionType"></a>

```go
ExclusionType *string
```

- *Type:* *string

If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned.

It still can be used for rules matching. Possible values: ["EXCLUSION_TYPE_EXCLUDE"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#exclusion_type DataLossPreventionInspectTemplate#exclusion_type}

---

##### `Likelihood`<sup>Optional</sup> <a name="Likelihood" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.likelihood"></a>

```go
Likelihood *string
```

- *Type:* *string

Likelihood to return for this CustomInfoType.

This base value can be altered by a detection rule if the finding meets the criteria
specified by the rule. Default value: "VERY_LIKELY" Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#likelihood DataLossPreventionInspectTemplate#likelihood}

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.regex"></a>

```go
Regex DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex</a>

regex block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#regex DataLossPreventionInspectTemplate#regex}

---

##### `StoredType`<sup>Optional</sup> <a name="StoredType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.storedType"></a>

```go
StoredType DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType</a>

stored_type block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#stored_type DataLossPreventionInspectTemplate#stored_type}

---

### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary {
	CloudStoragePath: github.com/cdktf/cdktf-provider-google-go/google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath,
	WordList: github.com/cdktf/cdktf-provider-google-go/google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary.property.cloudStoragePath">CloudStoragePath</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath</a></code> | cloud_storage_path block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary.property.wordList">WordList</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList</a></code> | word_list block. |

---

##### `CloudStoragePath`<sup>Optional</sup> <a name="CloudStoragePath" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary.property.cloudStoragePath"></a>

```go
CloudStoragePath DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath</a>

cloud_storage_path block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#cloud_storage_path DataLossPreventionInspectTemplate#cloud_storage_path}

---

##### `WordList`<sup>Optional</sup> <a name="WordList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary.property.wordList"></a>

```go
WordList DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList</a>

word_list block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#word_list DataLossPreventionInspectTemplate#word_list}

---

### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath {
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath.property.path">Path</a></code> | <code>*string</code> | A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath.property.path"></a>

```go
Path *string
```

- *Type:* *string

A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#path DataLossPreventionInspectTemplate#path}

---

### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList {
	Words: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList.property.words">Words</a></code> | <code>*[]*string</code> | Words or phrases defining the dictionary. |

---

##### `Words`<sup>Required</sup> <a name="Words" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList.property.words"></a>

```go
Words *[]*string
```

- *Type:* *[]*string

Words or phrases defining the dictionary.

The dictionary must contain at least one
phrase and every phrase must contain at least 2 characters that are letters or digits.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#words DataLossPreventionInspectTemplate#words}

---

### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType.property.name">Name</a></code> | <code>*string</code> | Name of the information type. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the information type.

Either a name of your choosing when creating a CustomInfoType, or one of the names
listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#name DataLossPreventionInspectTemplate#name}

---

### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex {
	Pattern: *string,
	GroupIndexes: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex.property.pattern">Pattern</a></code> | <code>*string</code> | Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex.property.groupIndexes">GroupIndexes</a></code> | <code>*[]*f64</code> | The index of the submatch to extract as findings. |

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#pattern DataLossPreventionInspectTemplate#pattern}

---

##### `GroupIndexes`<sup>Optional</sup> <a name="GroupIndexes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex.property.groupIndexes"></a>

```go
GroupIndexes *[]*f64
```

- *Type:* *[]*f64

The index of the submatch to extract as findings.

When not specified, the entire match is returned. No more than 3 may be included.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#group_indexes DataLossPreventionInspectTemplate#group_indexes}

---

### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType.property.name">Name</a></code> | <code>*string</code> | Resource name of the requested StoredInfoType, for example 'organizations/433245324/storedInfoTypes/432452342' or 'projects/project-id/storedInfoTypes/432452342'. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType.property.name"></a>

```go
Name *string
```

- *Type:* *string

Resource name of the requested StoredInfoType, for example 'organizations/433245324/storedInfoTypes/432452342' or 'projects/project-id/storedInfoTypes/432452342'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#name DataLossPreventionInspectTemplate#name}

---

### DataLossPreventionInspectTemplateInspectConfigInfoTypes <a name="DataLossPreventionInspectTemplateInspectConfigInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypes {
	Name: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypes.property.name">Name</a></code> | <code>*string</code> | Name of the information type. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypes.property.version">Version</a></code> | <code>*string</code> | Version of the information type to use. By default, the version is set to stable. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the information type.

Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#name DataLossPreventionInspectTemplate#name}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypes.property.version"></a>

```go
Version *string
```

- *Type:* *string

Version of the information type to use. By default, the version is set to stable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#version DataLossPreventionInspectTemplate#version}

---

### DataLossPreventionInspectTemplateInspectConfigLimits <a name="DataLossPreventionInspectTemplateInspectConfigLimits" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateInspectConfigLimits {
	MaxFindingsPerItem: *f64,
	MaxFindingsPerRequest: *f64,
	MaxFindingsPerInfoType: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits.property.maxFindingsPerItem">MaxFindingsPerItem</a></code> | <code>*f64</code> | Max number of findings that will be returned for each item scanned. The maximum returned is 2000. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits.property.maxFindingsPerRequest">MaxFindingsPerRequest</a></code> | <code>*f64</code> | Max number of findings that will be returned per request/job. The maximum returned is 2000. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits.property.maxFindingsPerInfoType">MaxFindingsPerInfoType</a></code> | <code>interface{}</code> | max_findings_per_info_type block. |

---

##### `MaxFindingsPerItem`<sup>Required</sup> <a name="MaxFindingsPerItem" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits.property.maxFindingsPerItem"></a>

```go
MaxFindingsPerItem *f64
```

- *Type:* *f64

Max number of findings that will be returned for each item scanned. The maximum returned is 2000.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#max_findings_per_item DataLossPreventionInspectTemplate#max_findings_per_item}

---

##### `MaxFindingsPerRequest`<sup>Required</sup> <a name="MaxFindingsPerRequest" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits.property.maxFindingsPerRequest"></a>

```go
MaxFindingsPerRequest *f64
```

- *Type:* *f64

Max number of findings that will be returned per request/job. The maximum returned is 2000.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#max_findings_per_request DataLossPreventionInspectTemplate#max_findings_per_request}

---

##### `MaxFindingsPerInfoType`<sup>Optional</sup> <a name="MaxFindingsPerInfoType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits.property.maxFindingsPerInfoType"></a>

```go
MaxFindingsPerInfoType interface{}
```

- *Type:* interface{}

max_findings_per_info_type block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#max_findings_per_info_type DataLossPreventionInspectTemplate#max_findings_per_info_type}

---

### DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType <a name="DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType {
	InfoType: github.com/cdktf/cdktf-provider-google-go/google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType,
	MaxFindings: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType.property.infoType">InfoType</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType</a></code> | info_type block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType.property.maxFindings">MaxFindings</a></code> | <code>*f64</code> | Max findings limit for the given infoType. |

---

##### `InfoType`<sup>Required</sup> <a name="InfoType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType.property.infoType"></a>

```go
InfoType DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType</a>

info_type block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#info_type DataLossPreventionInspectTemplate#info_type}

---

##### `MaxFindings`<sup>Required</sup> <a name="MaxFindings" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType.property.maxFindings"></a>

```go
MaxFindings *f64
```

- *Type:* *f64

Max findings limit for the given infoType.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#max_findings DataLossPreventionInspectTemplate#max_findings}

---

### DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType <a name="DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType.property.name">Name</a></code> | <code>*string</code> | Name of the information type. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the information type.

Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#name DataLossPreventionInspectTemplate#name}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSet <a name="DataLossPreventionInspectTemplateInspectConfigRuleSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateInspectConfigRuleSet {
	InfoTypes: interface{},
	Rules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSet.property.infoTypes">InfoTypes</a></code> | <code>interface{}</code> | info_types block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSet.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |

---

##### `InfoTypes`<sup>Required</sup> <a name="InfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSet.property.infoTypes"></a>

```go
InfoTypes interface{}
```

- *Type:* interface{}

info_types block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#info_types DataLossPreventionInspectTemplate#info_types}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSet.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#rules DataLossPreventionInspectTemplate#rules}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes.property.name">Name</a></code> | <code>*string</code> | Name of the information type. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the information type.

Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#name DataLossPreventionInspectTemplate#name}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSetRules <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRules" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRules {
	ExclusionRule: github.com/cdktf/cdktf-provider-google-go/google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule,
	HotwordRule: github.com/cdktf/cdktf-provider-google-go/google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRules.property.exclusionRule">ExclusionRule</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule</a></code> | exclusion_rule block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRules.property.hotwordRule">HotwordRule</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule</a></code> | hotword_rule block. |

---

##### `ExclusionRule`<sup>Optional</sup> <a name="ExclusionRule" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRules.property.exclusionRule"></a>

```go
ExclusionRule DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule</a>

exclusion_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#exclusion_rule DataLossPreventionInspectTemplate#exclusion_rule}

---

##### `HotwordRule`<sup>Optional</sup> <a name="HotwordRule" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRules.property.hotwordRule"></a>

```go
HotwordRule DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule</a>

hotword_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#hotword_rule DataLossPreventionInspectTemplate#hotword_rule}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule {
	MatchingType: *string,
	Dictionary: github.com/cdktf/cdktf-provider-google-go/google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary,
	ExcludeInfoTypes: github.com/cdktf/cdktf-provider-google-go/google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes,
	Regex: github.com/cdktf/cdktf-provider-google-go/google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.property.matchingType">MatchingType</a></code> | <code>*string</code> | How the rule is applied. See the documentation for more information: https://cloud.google.com/dlp/docs/reference/rest/v2/InspectConfig#MatchingType Possible values: ["MATCHING_TYPE_FULL_MATCH", "MATCHING_TYPE_PARTIAL_MATCH", "MATCHING_TYPE_INVERSE_MATCH"]. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.property.dictionary">Dictionary</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary</a></code> | dictionary block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.property.excludeInfoTypes">ExcludeInfoTypes</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes</a></code> | exclude_info_types block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.property.regex">Regex</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex</a></code> | regex block. |

---

##### `MatchingType`<sup>Required</sup> <a name="MatchingType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.property.matchingType"></a>

```go
MatchingType *string
```

- *Type:* *string

How the rule is applied. See the documentation for more information: https://cloud.google.com/dlp/docs/reference/rest/v2/InspectConfig#MatchingType Possible values: ["MATCHING_TYPE_FULL_MATCH", "MATCHING_TYPE_PARTIAL_MATCH", "MATCHING_TYPE_INVERSE_MATCH"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#matching_type DataLossPreventionInspectTemplate#matching_type}

---

##### `Dictionary`<sup>Optional</sup> <a name="Dictionary" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.property.dictionary"></a>

```go
Dictionary DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary</a>

dictionary block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#dictionary DataLossPreventionInspectTemplate#dictionary}

---

##### `ExcludeInfoTypes`<sup>Optional</sup> <a name="ExcludeInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.property.excludeInfoTypes"></a>

```go
ExcludeInfoTypes DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes</a>

exclude_info_types block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#exclude_info_types DataLossPreventionInspectTemplate#exclude_info_types}

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.property.regex"></a>

```go
Regex DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex</a>

regex block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#regex DataLossPreventionInspectTemplate#regex}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary {
	CloudStoragePath: github.com/cdktf/cdktf-provider-google-go/google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath,
	WordList: github.com/cdktf/cdktf-provider-google-go/google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary.property.cloudStoragePath">CloudStoragePath</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath</a></code> | cloud_storage_path block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary.property.wordList">WordList</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList</a></code> | word_list block. |

---

##### `CloudStoragePath`<sup>Optional</sup> <a name="CloudStoragePath" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary.property.cloudStoragePath"></a>

```go
CloudStoragePath DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath</a>

cloud_storage_path block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#cloud_storage_path DataLossPreventionInspectTemplate#cloud_storage_path}

---

##### `WordList`<sup>Optional</sup> <a name="WordList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary.property.wordList"></a>

```go
WordList DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList</a>

word_list block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#word_list DataLossPreventionInspectTemplate#word_list}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath {
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath.property.path">Path</a></code> | <code>*string</code> | A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath.property.path"></a>

```go
Path *string
```

- *Type:* *string

A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#path DataLossPreventionInspectTemplate#path}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList {
	Words: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList.property.words">Words</a></code> | <code>*[]*string</code> | Words or phrases defining the dictionary. |

---

##### `Words`<sup>Required</sup> <a name="Words" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList.property.words"></a>

```go
Words *[]*string
```

- *Type:* *[]*string

Words or phrases defining the dictionary.

The dictionary must contain at least one
phrase and every phrase must contain at least 2 characters that are letters or digits.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#words DataLossPreventionInspectTemplate#words}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes {
	InfoTypes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes.property.infoTypes">InfoTypes</a></code> | <code>interface{}</code> | info_types block. |

---

##### `InfoTypes`<sup>Required</sup> <a name="InfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes.property.infoTypes"></a>

```go
InfoTypes interface{}
```

- *Type:* interface{}

info_types block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#info_types DataLossPreventionInspectTemplate#info_types}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes.property.name">Name</a></code> | <code>*string</code> | Name of the information type. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the information type.

Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#name DataLossPreventionInspectTemplate#name}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex {
	Pattern: *string,
	GroupIndexes: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex.property.pattern">Pattern</a></code> | <code>*string</code> | Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex.property.groupIndexes">GroupIndexes</a></code> | <code>*[]*f64</code> | The index of the submatch to extract as findings. |

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#pattern DataLossPreventionInspectTemplate#pattern}

---

##### `GroupIndexes`<sup>Optional</sup> <a name="GroupIndexes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex.property.groupIndexes"></a>

```go
GroupIndexes *[]*f64
```

- *Type:* *[]*f64

The index of the submatch to extract as findings.

When not specified, the entire match is returned. No more than 3 may be included.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#group_indexes DataLossPreventionInspectTemplate#group_indexes}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule {
	HotwordRegex: github.com/cdktf/cdktf-provider-google-go/google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex,
	LikelihoodAdjustment: github.com/cdktf/cdktf-provider-google-go/google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment,
	Proximity: github.com/cdktf/cdktf-provider-google-go/google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule.property.hotwordRegex">HotwordRegex</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex</a></code> | hotword_regex block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule.property.likelihoodAdjustment">LikelihoodAdjustment</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment</a></code> | likelihood_adjustment block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule.property.proximity">Proximity</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity</a></code> | proximity block. |

---

##### `HotwordRegex`<sup>Required</sup> <a name="HotwordRegex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule.property.hotwordRegex"></a>

```go
HotwordRegex DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex</a>

hotword_regex block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#hotword_regex DataLossPreventionInspectTemplate#hotword_regex}

---

##### `LikelihoodAdjustment`<sup>Required</sup> <a name="LikelihoodAdjustment" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule.property.likelihoodAdjustment"></a>

```go
LikelihoodAdjustment DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment</a>

likelihood_adjustment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#likelihood_adjustment DataLossPreventionInspectTemplate#likelihood_adjustment}

---

##### `Proximity`<sup>Required</sup> <a name="Proximity" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule.property.proximity"></a>

```go
Proximity DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity</a>

proximity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#proximity DataLossPreventionInspectTemplate#proximity}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex {
	Pattern: *string,
	GroupIndexes: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex.property.pattern">Pattern</a></code> | <code>*string</code> | Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex.property.groupIndexes">GroupIndexes</a></code> | <code>*[]*f64</code> | The index of the submatch to extract as findings. |

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#pattern DataLossPreventionInspectTemplate#pattern}

---

##### `GroupIndexes`<sup>Optional</sup> <a name="GroupIndexes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex.property.groupIndexes"></a>

```go
GroupIndexes *[]*f64
```

- *Type:* *[]*f64

The index of the submatch to extract as findings.

When not specified,
the entire match is returned. No more than 3 may be included.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#group_indexes DataLossPreventionInspectTemplate#group_indexes}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment {
	FixedLikelihood: *string,
	RelativeLikelihood: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment.property.fixedLikelihood">FixedLikelihood</a></code> | <code>*string</code> | Set the likelihood of a finding to a fixed value. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment.property.relativeLikelihood">RelativeLikelihood</a></code> | <code>*f64</code> | Increase or decrease the likelihood by the specified number of levels. |

---

##### `FixedLikelihood`<sup>Optional</sup> <a name="FixedLikelihood" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment.property.fixedLikelihood"></a>

```go
FixedLikelihood *string
```

- *Type:* *string

Set the likelihood of a finding to a fixed value.

Either this or relative_likelihood can be set. Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#fixed_likelihood DataLossPreventionInspectTemplate#fixed_likelihood}

---

##### `RelativeLikelihood`<sup>Optional</sup> <a name="RelativeLikelihood" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment.property.relativeLikelihood"></a>

```go
RelativeLikelihood *f64
```

- *Type:* *f64

Increase or decrease the likelihood by the specified number of levels.

For example,
if a finding would be POSSIBLE without the detection rule and relativeLikelihood is 1,
then it is upgraded to LIKELY, while a value of -1 would downgrade it to UNLIKELY.
Likelihood may never drop below VERY_UNLIKELY or exceed VERY_LIKELY, so applying an
adjustment of 1 followed by an adjustment of -1 when base likelihood is VERY_LIKELY
will result in a final likelihood of LIKELY. Either this or fixed_likelihood can be set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#relative_likelihood DataLossPreventionInspectTemplate#relative_likelihood}

---

### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity {
	WindowAfter: *f64,
	WindowBefore: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity.property.windowAfter">WindowAfter</a></code> | <code>*f64</code> | Number of characters after the finding to consider. Either this or window_before must be specified. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity.property.windowBefore">WindowBefore</a></code> | <code>*f64</code> | Number of characters before the finding to consider. Either this or window_after must be specified. |

---

##### `WindowAfter`<sup>Optional</sup> <a name="WindowAfter" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity.property.windowAfter"></a>

```go
WindowAfter *f64
```

- *Type:* *f64

Number of characters after the finding to consider. Either this or window_before must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#window_after DataLossPreventionInspectTemplate#window_after}

---

##### `WindowBefore`<sup>Optional</sup> <a name="WindowBefore" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity.property.windowBefore"></a>

```go
WindowBefore *f64
```

- *Type:* *f64

Number of characters before the finding to consider. Either this or window_after must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#window_before DataLossPreventionInspectTemplate#window_before}

---

### DataLossPreventionInspectTemplateTimeouts <a name="DataLossPreventionInspectTemplateTimeouts" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

&datalosspreventioninspecttemplate.DataLossPreventionInspectTemplateTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#create DataLossPreventionInspectTemplate#create}. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#delete DataLossPreventionInspectTemplate#delete}. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#update DataLossPreventionInspectTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#create DataLossPreventionInspectTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#delete DataLossPreventionInspectTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template#update DataLossPreventionInspectTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.internalValue"></a>

```go
func InternalValue() DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath</a>

---


### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.putCloudStoragePath">PutCloudStoragePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.putWordList">PutWordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.resetCloudStoragePath">ResetCloudStoragePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.resetWordList">ResetWordList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudStoragePath` <a name="PutCloudStoragePath" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.putCloudStoragePath"></a>

```go
func PutCloudStoragePath(value DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.putCloudStoragePath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath</a>

---

##### `PutWordList` <a name="PutWordList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.putWordList"></a>

```go
func PutWordList(value DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.putWordList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList</a>

---

##### `ResetCloudStoragePath` <a name="ResetCloudStoragePath" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.resetCloudStoragePath"></a>

```go
func ResetCloudStoragePath()
```

##### `ResetWordList` <a name="ResetWordList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.resetWordList"></a>

```go
func ResetWordList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.cloudStoragePath">CloudStoragePath</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.wordList">WordList</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.cloudStoragePathInput">CloudStoragePathInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.wordListInput">WordListInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudStoragePath`<sup>Required</sup> <a name="CloudStoragePath" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.cloudStoragePath"></a>

```go
func CloudStoragePath() DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference</a>

---

##### `WordList`<sup>Required</sup> <a name="WordList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.wordList"></a>

```go
func WordList() DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference</a>

---

##### `CloudStoragePathInput`<sup>Optional</sup> <a name="CloudStoragePathInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.cloudStoragePathInput"></a>

```go
func CloudStoragePathInput() DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath</a>

---

##### `WordListInput`<sup>Optional</sup> <a name="WordListInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.wordListInput"></a>

```go
func WordListInput() DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary</a>

---


### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.wordsInput">WordsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.words">Words</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WordsInput`<sup>Optional</sup> <a name="WordsInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.wordsInput"></a>

```go
func WordsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Words`<sup>Required</sup> <a name="Words" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.words"></a>

```go
func Words() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.internalValue"></a>

```go
func InternalValue() DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList</a>

---


### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType</a>

---


### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.get"></a>

```go
func Get(index *f64) DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putDictionary">PutDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putInfoType">PutInfoType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putRegex">PutRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putStoredType">PutStoredType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetDictionary">ResetDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetExclusionType">ResetExclusionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetLikelihood">ResetLikelihood</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetStoredType">ResetStoredType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDictionary` <a name="PutDictionary" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putDictionary"></a>

```go
func PutDictionary(value DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putDictionary.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary</a>

---

##### `PutInfoType` <a name="PutInfoType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putInfoType"></a>

```go
func PutInfoType(value DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putInfoType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType</a>

---

##### `PutRegex` <a name="PutRegex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putRegex"></a>

```go
func PutRegex(value DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putRegex.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex</a>

---

##### `PutStoredType` <a name="PutStoredType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putStoredType"></a>

```go
func PutStoredType(value DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putStoredType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType</a>

---

##### `ResetDictionary` <a name="ResetDictionary" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetDictionary"></a>

```go
func ResetDictionary()
```

##### `ResetExclusionType` <a name="ResetExclusionType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetExclusionType"></a>

```go
func ResetExclusionType()
```

##### `ResetLikelihood` <a name="ResetLikelihood" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetLikelihood"></a>

```go
func ResetLikelihood()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetRegex"></a>

```go
func ResetRegex()
```

##### `ResetStoredType` <a name="ResetStoredType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetStoredType"></a>

```go
func ResetStoredType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.dictionary">Dictionary</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.infoType">InfoType</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.regex">Regex</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.storedType">StoredType</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.dictionaryInput">DictionaryInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.exclusionTypeInput">ExclusionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.infoTypeInput">InfoTypeInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.likelihoodInput">LikelihoodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.regexInput">RegexInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.storedTypeInput">StoredTypeInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.exclusionType">ExclusionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.likelihood">Likelihood</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dictionary`<sup>Required</sup> <a name="Dictionary" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.dictionary"></a>

```go
func Dictionary() DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference</a>

---

##### `InfoType`<sup>Required</sup> <a name="InfoType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.infoType"></a>

```go
func InfoType() DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference</a>

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.regex"></a>

```go
func Regex() DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference</a>

---

##### `StoredType`<sup>Required</sup> <a name="StoredType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.storedType"></a>

```go
func StoredType() DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference</a>

---

##### `DictionaryInput`<sup>Optional</sup> <a name="DictionaryInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.dictionaryInput"></a>

```go
func DictionaryInput() DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary</a>

---

##### `ExclusionTypeInput`<sup>Optional</sup> <a name="ExclusionTypeInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.exclusionTypeInput"></a>

```go
func ExclusionTypeInput() *string
```

- *Type:* *string

---

##### `InfoTypeInput`<sup>Optional</sup> <a name="InfoTypeInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.infoTypeInput"></a>

```go
func InfoTypeInput() DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType</a>

---

##### `LikelihoodInput`<sup>Optional</sup> <a name="LikelihoodInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.likelihoodInput"></a>

```go
func LikelihoodInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.regexInput"></a>

```go
func RegexInput() DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex</a>

---

##### `StoredTypeInput`<sup>Optional</sup> <a name="StoredTypeInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.storedTypeInput"></a>

```go
func StoredTypeInput() DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType</a>

---

##### `ExclusionType`<sup>Required</sup> <a name="ExclusionType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.exclusionType"></a>

```go
func ExclusionType() *string
```

- *Type:* *string

---

##### `Likelihood`<sup>Required</sup> <a name="Likelihood" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.likelihood"></a>

```go
func Likelihood() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.resetGroupIndexes">ResetGroupIndexes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupIndexes` <a name="ResetGroupIndexes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.resetGroupIndexes"></a>

```go
func ResetGroupIndexes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.groupIndexesInput">GroupIndexesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.groupIndexes">GroupIndexes</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupIndexesInput`<sup>Optional</sup> <a name="GroupIndexesInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.groupIndexesInput"></a>

```go
func GroupIndexesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `GroupIndexes`<sup>Required</sup> <a name="GroupIndexes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.groupIndexes"></a>

```go
func GroupIndexes() *[]*f64
```

- *Type:* *[]*f64

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.internalValue"></a>

```go
func InternalValue() DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex</a>

---


### DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType</a>

---


### DataLossPreventionInspectTemplateInspectConfigInfoTypesList <a name="DataLossPreventionInspectTemplateInspectConfigInfoTypesList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigInfoTypesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataLossPreventionInspectTemplateInspectConfigInfoTypesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.get"></a>

```go
func Get(index *f64) DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType</a>

---


### DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList <a name="DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.get"></a>

```go
func Get(index *f64) DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.putInfoType">PutInfoType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInfoType` <a name="PutInfoType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.putInfoType"></a>

```go
func PutInfoType(value DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.putInfoType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.infoType">InfoType</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.infoTypeInput">InfoTypeInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.maxFindingsInput">MaxFindingsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.maxFindings">MaxFindings</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InfoType`<sup>Required</sup> <a name="InfoType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.infoType"></a>

```go
func InfoType() DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference</a>

---

##### `InfoTypeInput`<sup>Optional</sup> <a name="InfoTypeInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.infoTypeInput"></a>

```go
func InfoTypeInput() DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType</a>

---

##### `MaxFindingsInput`<sup>Optional</sup> <a name="MaxFindingsInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.maxFindingsInput"></a>

```go
func MaxFindingsInput() *f64
```

- *Type:* *f64

---

##### `MaxFindings`<sup>Required</sup> <a name="MaxFindings" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.maxFindings"></a>

```go
func MaxFindings() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.putMaxFindingsPerInfoType">PutMaxFindingsPerInfoType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.resetMaxFindingsPerInfoType">ResetMaxFindingsPerInfoType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaxFindingsPerInfoType` <a name="PutMaxFindingsPerInfoType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.putMaxFindingsPerInfoType"></a>

```go
func PutMaxFindingsPerInfoType(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.putMaxFindingsPerInfoType.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMaxFindingsPerInfoType` <a name="ResetMaxFindingsPerInfoType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.resetMaxFindingsPerInfoType"></a>

```go
func ResetMaxFindingsPerInfoType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerInfoType">MaxFindingsPerInfoType</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerInfoTypeInput">MaxFindingsPerInfoTypeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerItemInput">MaxFindingsPerItemInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerRequestInput">MaxFindingsPerRequestInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerItem">MaxFindingsPerItem</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerRequest">MaxFindingsPerRequest</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits">DataLossPreventionInspectTemplateInspectConfigLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxFindingsPerInfoType`<sup>Required</sup> <a name="MaxFindingsPerInfoType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerInfoType"></a>

```go
func MaxFindingsPerInfoType() DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList">DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList</a>

---

##### `MaxFindingsPerInfoTypeInput`<sup>Optional</sup> <a name="MaxFindingsPerInfoTypeInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerInfoTypeInput"></a>

```go
func MaxFindingsPerInfoTypeInput() interface{}
```

- *Type:* interface{}

---

##### `MaxFindingsPerItemInput`<sup>Optional</sup> <a name="MaxFindingsPerItemInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerItemInput"></a>

```go
func MaxFindingsPerItemInput() *f64
```

- *Type:* *f64

---

##### `MaxFindingsPerRequestInput`<sup>Optional</sup> <a name="MaxFindingsPerRequestInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerRequestInput"></a>

```go
func MaxFindingsPerRequestInput() *f64
```

- *Type:* *f64

---

##### `MaxFindingsPerItem`<sup>Required</sup> <a name="MaxFindingsPerItem" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerItem"></a>

```go
func MaxFindingsPerItem() *f64
```

- *Type:* *f64

---

##### `MaxFindingsPerRequest`<sup>Required</sup> <a name="MaxFindingsPerRequest" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerRequest"></a>

```go
func MaxFindingsPerRequest() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataLossPreventionInspectTemplateInspectConfigLimits
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits">DataLossPreventionInspectTemplateInspectConfigLimits</a>

---


### DataLossPreventionInspectTemplateInspectConfigOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataLossPreventionInspectTemplateInspectConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.putCustomInfoTypes">PutCustomInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.putInfoTypes">PutInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.putLimits">PutLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.putRuleSet">PutRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetContentOptions">ResetContentOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetCustomInfoTypes">ResetCustomInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetExcludeInfoTypes">ResetExcludeInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetIncludeQuote">ResetIncludeQuote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetInfoTypes">ResetInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetLimits">ResetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetMinLikelihood">ResetMinLikelihood</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetRuleSet">ResetRuleSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomInfoTypes` <a name="PutCustomInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.putCustomInfoTypes"></a>

```go
func PutCustomInfoTypes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.putCustomInfoTypes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInfoTypes` <a name="PutInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.putInfoTypes"></a>

```go
func PutInfoTypes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.putInfoTypes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLimits` <a name="PutLimits" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.putLimits"></a>

```go
func PutLimits(value DataLossPreventionInspectTemplateInspectConfigLimits)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.putLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits">DataLossPreventionInspectTemplateInspectConfigLimits</a>

---

##### `PutRuleSet` <a name="PutRuleSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.putRuleSet"></a>

```go
func PutRuleSet(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.putRuleSet.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetContentOptions` <a name="ResetContentOptions" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetContentOptions"></a>

```go
func ResetContentOptions()
```

##### `ResetCustomInfoTypes` <a name="ResetCustomInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetCustomInfoTypes"></a>

```go
func ResetCustomInfoTypes()
```

##### `ResetExcludeInfoTypes` <a name="ResetExcludeInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetExcludeInfoTypes"></a>

```go
func ResetExcludeInfoTypes()
```

##### `ResetIncludeQuote` <a name="ResetIncludeQuote" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetIncludeQuote"></a>

```go
func ResetIncludeQuote()
```

##### `ResetInfoTypes` <a name="ResetInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetInfoTypes"></a>

```go
func ResetInfoTypes()
```

##### `ResetLimits` <a name="ResetLimits" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetLimits"></a>

```go
func ResetLimits()
```

##### `ResetMinLikelihood` <a name="ResetMinLikelihood" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetMinLikelihood"></a>

```go
func ResetMinLikelihood()
```

##### `ResetRuleSet` <a name="ResetRuleSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.resetRuleSet"></a>

```go
func ResetRuleSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.customInfoTypes">CustomInfoTypes</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.infoTypes">InfoTypes</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList">DataLossPreventionInspectTemplateInspectConfigInfoTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference">DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.ruleSet">RuleSet</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList">DataLossPreventionInspectTemplateInspectConfigRuleSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.contentOptionsInput">ContentOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.customInfoTypesInput">CustomInfoTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.excludeInfoTypesInput">ExcludeInfoTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.includeQuoteInput">IncludeQuoteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.infoTypesInput">InfoTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.limitsInput">LimitsInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits">DataLossPreventionInspectTemplateInspectConfigLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.minLikelihoodInput">MinLikelihoodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.ruleSetInput">RuleSetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.contentOptions">ContentOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.excludeInfoTypes">ExcludeInfoTypes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.includeQuote">IncludeQuote</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.minLikelihood">MinLikelihood</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig">DataLossPreventionInspectTemplateInspectConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomInfoTypes`<sup>Required</sup> <a name="CustomInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.customInfoTypes"></a>

```go
func CustomInfoTypes() DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList">DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList</a>

---

##### `InfoTypes`<sup>Required</sup> <a name="InfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.infoTypes"></a>

```go
func InfoTypes() DataLossPreventionInspectTemplateInspectConfigInfoTypesList
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigInfoTypesList">DataLossPreventionInspectTemplateInspectConfigInfoTypesList</a>

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.limits"></a>

```go
func Limits() DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference">DataLossPreventionInspectTemplateInspectConfigLimitsOutputReference</a>

---

##### `RuleSet`<sup>Required</sup> <a name="RuleSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.ruleSet"></a>

```go
func RuleSet() DataLossPreventionInspectTemplateInspectConfigRuleSetList
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList">DataLossPreventionInspectTemplateInspectConfigRuleSetList</a>

---

##### `ContentOptionsInput`<sup>Optional</sup> <a name="ContentOptionsInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.contentOptionsInput"></a>

```go
func ContentOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomInfoTypesInput`<sup>Optional</sup> <a name="CustomInfoTypesInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.customInfoTypesInput"></a>

```go
func CustomInfoTypesInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludeInfoTypesInput`<sup>Optional</sup> <a name="ExcludeInfoTypesInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.excludeInfoTypesInput"></a>

```go
func ExcludeInfoTypesInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeQuoteInput`<sup>Optional</sup> <a name="IncludeQuoteInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.includeQuoteInput"></a>

```go
func IncludeQuoteInput() interface{}
```

- *Type:* interface{}

---

##### `InfoTypesInput`<sup>Optional</sup> <a name="InfoTypesInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.infoTypesInput"></a>

```go
func InfoTypesInput() interface{}
```

- *Type:* interface{}

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.limitsInput"></a>

```go
func LimitsInput() DataLossPreventionInspectTemplateInspectConfigLimits
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigLimits">DataLossPreventionInspectTemplateInspectConfigLimits</a>

---

##### `MinLikelihoodInput`<sup>Optional</sup> <a name="MinLikelihoodInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.minLikelihoodInput"></a>

```go
func MinLikelihoodInput() *string
```

- *Type:* *string

---

##### `RuleSetInput`<sup>Optional</sup> <a name="RuleSetInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.ruleSetInput"></a>

```go
func RuleSetInput() interface{}
```

- *Type:* interface{}

---

##### `ContentOptions`<sup>Required</sup> <a name="ContentOptions" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.contentOptions"></a>

```go
func ContentOptions() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludeInfoTypes`<sup>Required</sup> <a name="ExcludeInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.excludeInfoTypes"></a>

```go
func ExcludeInfoTypes() interface{}
```

- *Type:* interface{}

---

##### `IncludeQuote`<sup>Required</sup> <a name="IncludeQuote" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.includeQuote"></a>

```go
func IncludeQuote() interface{}
```

- *Type:* interface{}

---

##### `MinLikelihood`<sup>Required</sup> <a name="MinLikelihood" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.minLikelihood"></a>

```go
func MinLikelihood() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataLossPreventionInspectTemplateInspectConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfig">DataLossPreventionInspectTemplateInspectConfig</a>

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.get"></a>

```go
func Get(index *f64) DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetList <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigRuleSetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataLossPreventionInspectTemplateInspectConfigRuleSetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.get"></a>

```go
func Get(index *f64) DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.putInfoTypes">PutInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.putRules">PutRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInfoTypes` <a name="PutInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.putInfoTypes"></a>

```go
func PutInfoTypes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.putInfoTypes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.putRules.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.infoTypes">InfoTypes</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList">DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.infoTypesInput">InfoTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InfoTypes`<sup>Required</sup> <a name="InfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.infoTypes"></a>

```go
func InfoTypes() DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList">DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList</a>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.rules"></a>

```go
func Rules() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList</a>

---

##### `InfoTypesInput`<sup>Optional</sup> <a name="InfoTypesInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.infoTypesInput"></a>

```go
func InfoTypesInput() interface{}
```

- *Type:* interface{}

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.internalValue"></a>

```go
func InternalValue() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath</a>

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.putCloudStoragePath">PutCloudStoragePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.putWordList">PutWordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.resetCloudStoragePath">ResetCloudStoragePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.resetWordList">ResetWordList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudStoragePath` <a name="PutCloudStoragePath" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.putCloudStoragePath"></a>

```go
func PutCloudStoragePath(value DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.putCloudStoragePath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath</a>

---

##### `PutWordList` <a name="PutWordList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.putWordList"></a>

```go
func PutWordList(value DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.putWordList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList</a>

---

##### `ResetCloudStoragePath` <a name="ResetCloudStoragePath" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.resetCloudStoragePath"></a>

```go
func ResetCloudStoragePath()
```

##### `ResetWordList` <a name="ResetWordList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.resetWordList"></a>

```go
func ResetWordList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.cloudStoragePath">CloudStoragePath</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.wordList">WordList</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.cloudStoragePathInput">CloudStoragePathInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.wordListInput">WordListInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudStoragePath`<sup>Required</sup> <a name="CloudStoragePath" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.cloudStoragePath"></a>

```go
func CloudStoragePath() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference</a>

---

##### `WordList`<sup>Required</sup> <a name="WordList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.wordList"></a>

```go
func WordList() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference</a>

---

##### `CloudStoragePathInput`<sup>Optional</sup> <a name="CloudStoragePathInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.cloudStoragePathInput"></a>

```go
func CloudStoragePathInput() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath</a>

---

##### `WordListInput`<sup>Optional</sup> <a name="WordListInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.wordListInput"></a>

```go
func WordListInput() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary</a>

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.wordsInput">WordsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.words">Words</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WordsInput`<sup>Optional</sup> <a name="WordsInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.wordsInput"></a>

```go
func WordsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Words`<sup>Required</sup> <a name="Words" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.words"></a>

```go
func Words() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.internalValue"></a>

```go
func InternalValue() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList</a>

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.get"></a>

```go
func Get(index *f64) DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.putInfoTypes">PutInfoTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInfoTypes` <a name="PutInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.putInfoTypes"></a>

```go
func PutInfoTypes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.putInfoTypes.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.infoTypes">InfoTypes</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.infoTypesInput">InfoTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InfoTypes`<sup>Required</sup> <a name="InfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.infoTypes"></a>

```go
func InfoTypes() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList</a>

---

##### `InfoTypesInput`<sup>Optional</sup> <a name="InfoTypesInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.infoTypesInput"></a>

```go
func InfoTypesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes</a>

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putDictionary">PutDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putExcludeInfoTypes">PutExcludeInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putRegex">PutRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resetDictionary">ResetDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resetExcludeInfoTypes">ResetExcludeInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDictionary` <a name="PutDictionary" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putDictionary"></a>

```go
func PutDictionary(value DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putDictionary.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary</a>

---

##### `PutExcludeInfoTypes` <a name="PutExcludeInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putExcludeInfoTypes"></a>

```go
func PutExcludeInfoTypes(value DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putExcludeInfoTypes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes</a>

---

##### `PutRegex` <a name="PutRegex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putRegex"></a>

```go
func PutRegex(value DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putRegex.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex</a>

---

##### `ResetDictionary` <a name="ResetDictionary" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resetDictionary"></a>

```go
func ResetDictionary()
```

##### `ResetExcludeInfoTypes` <a name="ResetExcludeInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resetExcludeInfoTypes"></a>

```go
func ResetExcludeInfoTypes()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.dictionary">Dictionary</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.excludeInfoTypes">ExcludeInfoTypes</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.regex">Regex</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.dictionaryInput">DictionaryInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.excludeInfoTypesInput">ExcludeInfoTypesInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.matchingTypeInput">MatchingTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.regexInput">RegexInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.matchingType">MatchingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dictionary`<sup>Required</sup> <a name="Dictionary" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.dictionary"></a>

```go
func Dictionary() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference</a>

---

##### `ExcludeInfoTypes`<sup>Required</sup> <a name="ExcludeInfoTypes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.excludeInfoTypes"></a>

```go
func ExcludeInfoTypes() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference</a>

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.regex"></a>

```go
func Regex() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference</a>

---

##### `DictionaryInput`<sup>Optional</sup> <a name="DictionaryInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.dictionaryInput"></a>

```go
func DictionaryInput() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary</a>

---

##### `ExcludeInfoTypesInput`<sup>Optional</sup> <a name="ExcludeInfoTypesInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.excludeInfoTypesInput"></a>

```go
func ExcludeInfoTypesInput() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes</a>

---

##### `MatchingTypeInput`<sup>Optional</sup> <a name="MatchingTypeInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.matchingTypeInput"></a>

```go
func MatchingTypeInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.regexInput"></a>

```go
func RegexInput() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex</a>

---

##### `MatchingType`<sup>Required</sup> <a name="MatchingType" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.matchingType"></a>

```go
func MatchingType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule</a>

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.resetGroupIndexes">ResetGroupIndexes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupIndexes` <a name="ResetGroupIndexes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.resetGroupIndexes"></a>

```go
func ResetGroupIndexes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.groupIndexesInput">GroupIndexesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.groupIndexes">GroupIndexes</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupIndexesInput`<sup>Optional</sup> <a name="GroupIndexesInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.groupIndexesInput"></a>

```go
func GroupIndexesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `GroupIndexes`<sup>Required</sup> <a name="GroupIndexes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.groupIndexes"></a>

```go
func GroupIndexes() *[]*f64
```

- *Type:* *[]*f64

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.internalValue"></a>

```go
func InternalValue() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex</a>

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.resetGroupIndexes">ResetGroupIndexes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupIndexes` <a name="ResetGroupIndexes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.resetGroupIndexes"></a>

```go
func ResetGroupIndexes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.groupIndexesInput">GroupIndexesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.groupIndexes">GroupIndexes</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupIndexesInput`<sup>Optional</sup> <a name="GroupIndexesInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.groupIndexesInput"></a>

```go
func GroupIndexesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `GroupIndexes`<sup>Required</sup> <a name="GroupIndexes" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.groupIndexes"></a>

```go
func GroupIndexes() *[]*f64
```

- *Type:* *[]*f64

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.internalValue"></a>

```go
func InternalValue() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex</a>

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.resetFixedLikelihood">ResetFixedLikelihood</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.resetRelativeLikelihood">ResetRelativeLikelihood</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFixedLikelihood` <a name="ResetFixedLikelihood" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.resetFixedLikelihood"></a>

```go
func ResetFixedLikelihood()
```

##### `ResetRelativeLikelihood` <a name="ResetRelativeLikelihood" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.resetRelativeLikelihood"></a>

```go
func ResetRelativeLikelihood()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.fixedLikelihoodInput">FixedLikelihoodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.relativeLikelihoodInput">RelativeLikelihoodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.fixedLikelihood">FixedLikelihood</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.relativeLikelihood">RelativeLikelihood</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FixedLikelihoodInput`<sup>Optional</sup> <a name="FixedLikelihoodInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.fixedLikelihoodInput"></a>

```go
func FixedLikelihoodInput() *string
```

- *Type:* *string

---

##### `RelativeLikelihoodInput`<sup>Optional</sup> <a name="RelativeLikelihoodInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.relativeLikelihoodInput"></a>

```go
func RelativeLikelihoodInput() *f64
```

- *Type:* *f64

---

##### `FixedLikelihood`<sup>Required</sup> <a name="FixedLikelihood" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.fixedLikelihood"></a>

```go
func FixedLikelihood() *string
```

- *Type:* *string

---

##### `RelativeLikelihood`<sup>Required</sup> <a name="RelativeLikelihood" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.relativeLikelihood"></a>

```go
func RelativeLikelihood() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment</a>

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putHotwordRegex">PutHotwordRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putLikelihoodAdjustment">PutLikelihoodAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putProximity">PutProximity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHotwordRegex` <a name="PutHotwordRegex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putHotwordRegex"></a>

```go
func PutHotwordRegex(value DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putHotwordRegex.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex</a>

---

##### `PutLikelihoodAdjustment` <a name="PutLikelihoodAdjustment" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putLikelihoodAdjustment"></a>

```go
func PutLikelihoodAdjustment(value DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putLikelihoodAdjustment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment</a>

---

##### `PutProximity` <a name="PutProximity" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putProximity"></a>

```go
func PutProximity(value DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putProximity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.hotwordRegex">HotwordRegex</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.likelihoodAdjustment">LikelihoodAdjustment</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.proximity">Proximity</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.hotwordRegexInput">HotwordRegexInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.likelihoodAdjustmentInput">LikelihoodAdjustmentInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.proximityInput">ProximityInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HotwordRegex`<sup>Required</sup> <a name="HotwordRegex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.hotwordRegex"></a>

```go
func HotwordRegex() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference</a>

---

##### `LikelihoodAdjustment`<sup>Required</sup> <a name="LikelihoodAdjustment" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.likelihoodAdjustment"></a>

```go
func LikelihoodAdjustment() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference</a>

---

##### `Proximity`<sup>Required</sup> <a name="Proximity" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.proximity"></a>

```go
func Proximity() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference</a>

---

##### `HotwordRegexInput`<sup>Optional</sup> <a name="HotwordRegexInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.hotwordRegexInput"></a>

```go
func HotwordRegexInput() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex</a>

---

##### `LikelihoodAdjustmentInput`<sup>Optional</sup> <a name="LikelihoodAdjustmentInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.likelihoodAdjustmentInput"></a>

```go
func LikelihoodAdjustmentInput() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment</a>

---

##### `ProximityInput`<sup>Optional</sup> <a name="ProximityInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.proximityInput"></a>

```go
func ProximityInput() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule</a>

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.resetWindowAfter">ResetWindowAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.resetWindowBefore">ResetWindowBefore</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWindowAfter` <a name="ResetWindowAfter" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.resetWindowAfter"></a>

```go
func ResetWindowAfter()
```

##### `ResetWindowBefore` <a name="ResetWindowBefore" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.resetWindowBefore"></a>

```go
func ResetWindowBefore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.windowAfterInput">WindowAfterInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.windowBeforeInput">WindowBeforeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.windowAfter">WindowAfter</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.windowBefore">WindowBefore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WindowAfterInput`<sup>Optional</sup> <a name="WindowAfterInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.windowAfterInput"></a>

```go
func WindowAfterInput() *f64
```

- *Type:* *f64

---

##### `WindowBeforeInput`<sup>Optional</sup> <a name="WindowBeforeInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.windowBeforeInput"></a>

```go
func WindowBeforeInput() *f64
```

- *Type:* *f64

---

##### `WindowAfter`<sup>Required</sup> <a name="WindowAfter" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.windowAfter"></a>

```go
func WindowAfter() *f64
```

- *Type:* *f64

---

##### `WindowBefore`<sup>Required</sup> <a name="WindowBefore" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.windowBefore"></a>

```go
func WindowBefore() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity</a>

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.get"></a>

```go
func Get(index *f64) DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference <a name="DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.putExclusionRule">PutExclusionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.putHotwordRule">PutHotwordRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.resetExclusionRule">ResetExclusionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.resetHotwordRule">ResetHotwordRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExclusionRule` <a name="PutExclusionRule" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.putExclusionRule"></a>

```go
func PutExclusionRule(value DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.putExclusionRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule</a>

---

##### `PutHotwordRule` <a name="PutHotwordRule" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.putHotwordRule"></a>

```go
func PutHotwordRule(value DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.putHotwordRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule</a>

---

##### `ResetExclusionRule` <a name="ResetExclusionRule" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.resetExclusionRule"></a>

```go
func ResetExclusionRule()
```

##### `ResetHotwordRule` <a name="ResetHotwordRule" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.resetHotwordRule"></a>

```go
func ResetHotwordRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.exclusionRule">ExclusionRule</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.hotwordRule">HotwordRule</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.exclusionRuleInput">ExclusionRuleInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.hotwordRuleInput">HotwordRuleInput</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExclusionRule`<sup>Required</sup> <a name="ExclusionRule" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.exclusionRule"></a>

```go
func ExclusionRule() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference</a>

---

##### `HotwordRule`<sup>Required</sup> <a name="HotwordRule" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.hotwordRule"></a>

```go
func HotwordRule() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference</a>

---

##### `ExclusionRuleInput`<sup>Optional</sup> <a name="ExclusionRuleInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.exclusionRuleInput"></a>

```go
func ExclusionRuleInput() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule</a>

---

##### `HotwordRuleInput`<sup>Optional</sup> <a name="HotwordRuleInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.hotwordRuleInput"></a>

```go
func HotwordRuleInput() DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule">DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataLossPreventionInspectTemplateTimeoutsOutputReference <a name="DataLossPreventionInspectTemplateTimeoutsOutputReference" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datalosspreventioninspecttemplate"

datalosspreventioninspecttemplate.NewDataLossPreventionInspectTemplateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataLossPreventionInspectTemplateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataLossPreventionInspectTemplate.DataLossPreventionInspectTemplateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



