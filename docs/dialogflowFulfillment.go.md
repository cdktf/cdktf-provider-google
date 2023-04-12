# `dialogflowFulfillment` Submodule <a name="`dialogflowFulfillment` Submodule" id="@cdktf/provider-google.dialogflowFulfillment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowFulfillment <a name="DialogflowFulfillment" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment google_dialogflow_fulfillment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowfulfillment"

dialogflowfulfillment.NewDialogflowFulfillment(scope Construct, id *string, config DialogflowFulfillmentConfig) DialogflowFulfillment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig">DialogflowFulfillmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig">DialogflowFulfillmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putFeatures">PutFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putGenericWebService">PutGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetFeatures">ResetFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetGenericWebService">ResetGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFeatures` <a name="PutFeatures" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putFeatures"></a>

```go
func PutFeatures(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putFeatures.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGenericWebService` <a name="PutGenericWebService" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putGenericWebService"></a>

```go
func PutGenericWebService(value DialogflowFulfillmentGenericWebService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putGenericWebService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putTimeouts"></a>

```go
func PutTimeouts(value DialogflowFulfillmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts">DialogflowFulfillmentTimeouts</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetFeatures` <a name="ResetFeatures" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetFeatures"></a>

```go
func ResetFeatures()
```

##### `ResetGenericWebService` <a name="ResetGenericWebService" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetGenericWebService"></a>

```go
func ResetGenericWebService()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowfulfillment"

dialogflowfulfillment.DialogflowFulfillment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowfulfillment"

dialogflowfulfillment.DialogflowFulfillment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowfulfillment"

dialogflowfulfillment.DialogflowFulfillment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.features">Features</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList">DialogflowFulfillmentFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.genericWebService">GenericWebService</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference">DialogflowFulfillmentGenericWebServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference">DialogflowFulfillmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.featuresInput">FeaturesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.genericWebServiceInput">GenericWebServiceInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Features`<sup>Required</sup> <a name="Features" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.features"></a>

```go
func Features() DialogflowFulfillmentFeaturesList
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList">DialogflowFulfillmentFeaturesList</a>

---

##### `GenericWebService`<sup>Required</sup> <a name="GenericWebService" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.genericWebService"></a>

```go
func GenericWebService() DialogflowFulfillmentGenericWebServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference">DialogflowFulfillmentGenericWebServiceOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.timeouts"></a>

```go
func Timeouts() DialogflowFulfillmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference">DialogflowFulfillmentTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FeaturesInput`<sup>Optional</sup> <a name="FeaturesInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.featuresInput"></a>

```go
func FeaturesInput() interface{}
```

- *Type:* interface{}

---

##### `GenericWebServiceInput`<sup>Optional</sup> <a name="GenericWebServiceInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.genericWebServiceInput"></a>

```go
func GenericWebServiceInput() DialogflowFulfillmentGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowFulfillmentConfig <a name="DialogflowFulfillmentConfig" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowfulfillment"

&dialogflowfulfillment.DialogflowFulfillmentConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Enabled: interface{},
	Features: interface{},
	GenericWebService: github.com/cdktf/cdktf-provider-google-go/google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.dialogflowFulfillment.DialogflowFulfillmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The human-readable name of the fulfillment, unique within the agent. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether fulfillment is enabled. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.features">Features</a></code> | <code>interface{}</code> | features block. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.genericWebService">GenericWebService</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a></code> | generic_web_service block. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment#id DialogflowFulfillment#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment#project DialogflowFulfillment#project}. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts">DialogflowFulfillmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The human-readable name of the fulfillment, unique within the agent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment#display_name DialogflowFulfillment#display_name}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether fulfillment is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment#enabled DialogflowFulfillment#enabled}

---

##### `Features`<sup>Optional</sup> <a name="Features" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.features"></a>

```go
Features interface{}
```

- *Type:* interface{}

features block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment#features DialogflowFulfillment#features}

---

##### `GenericWebService`<sup>Optional</sup> <a name="GenericWebService" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.genericWebService"></a>

```go
GenericWebService DialogflowFulfillmentGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a>

generic_web_service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment#generic_web_service DialogflowFulfillment#generic_web_service}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment#id DialogflowFulfillment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment#project DialogflowFulfillment#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentConfig.property.timeouts"></a>

```go
Timeouts DialogflowFulfillmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts">DialogflowFulfillmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment#timeouts DialogflowFulfillment#timeouts}

---

### DialogflowFulfillmentFeatures <a name="DialogflowFulfillmentFeatures" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowfulfillment"

&dialogflowfulfillment.DialogflowFulfillmentFeatures {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures.property.type">Type</a></code> | <code>*string</code> | The type of the feature that enabled for fulfillment. SMALLTALK: Fulfillment is enabled for SmallTalk. Possible values: ["SMALLTALK"]. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeatures.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the feature that enabled for fulfillment. SMALLTALK: Fulfillment is enabled for SmallTalk. Possible values: ["SMALLTALK"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment#type DialogflowFulfillment#type}

---

### DialogflowFulfillmentGenericWebService <a name="DialogflowFulfillmentGenericWebService" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowfulfillment"

&dialogflowfulfillment.DialogflowFulfillmentGenericWebService {
	Uri: *string,
	Password: *string,
	RequestHeaders: *map[string]*string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.uri">Uri</a></code> | <code>*string</code> | The fulfillment URI for receiving POST requests. It must use https protocol. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.password">Password</a></code> | <code>*string</code> | The password for HTTP Basic authentication. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.requestHeaders">RequestHeaders</a></code> | <code>*map[string]*string</code> | The HTTP request headers to send together with fulfillment requests. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.username">Username</a></code> | <code>*string</code> | The user name for HTTP Basic authentication. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The fulfillment URI for receiving POST requests. It must use https protocol.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment#uri DialogflowFulfillment#uri}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment#password DialogflowFulfillment#password}

---

##### `RequestHeaders`<sup>Optional</sup> <a name="RequestHeaders" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.requestHeaders"></a>

```go
RequestHeaders *map[string]*string
```

- *Type:* *map[string]*string

The HTTP request headers to send together with fulfillment requests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment#request_headers DialogflowFulfillment#request_headers}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService.property.username"></a>

```go
Username *string
```

- *Type:* *string

The user name for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment#username DialogflowFulfillment#username}

---

### DialogflowFulfillmentTimeouts <a name="DialogflowFulfillmentTimeouts" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowfulfillment"

&dialogflowfulfillment.DialogflowFulfillmentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment#create DialogflowFulfillment#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment#delete DialogflowFulfillment#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment#update DialogflowFulfillment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment#create DialogflowFulfillment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment#delete DialogflowFulfillment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_fulfillment#update DialogflowFulfillment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowFulfillmentFeaturesList <a name="DialogflowFulfillmentFeaturesList" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowfulfillment"

dialogflowfulfillment.NewDialogflowFulfillmentFeaturesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DialogflowFulfillmentFeaturesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.get"></a>

```go
func Get(index *f64) DialogflowFulfillmentFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowFulfillmentFeaturesOutputReference <a name="DialogflowFulfillmentFeaturesOutputReference" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowfulfillment"

dialogflowfulfillment.NewDialogflowFulfillmentFeaturesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DialogflowFulfillmentFeaturesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentFeaturesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowFulfillmentGenericWebServiceOutputReference <a name="DialogflowFulfillmentGenericWebServiceOutputReference" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowfulfillment"

dialogflowfulfillment.NewDialogflowFulfillmentGenericWebServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowFulfillmentGenericWebServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resetRequestHeaders">ResetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetRequestHeaders` <a name="ResetRequestHeaders" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resetRequestHeaders"></a>

```go
func ResetRequestHeaders()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.requestHeadersInput">RequestHeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.requestHeaders">RequestHeaders</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `RequestHeadersInput`<sup>Optional</sup> <a name="RequestHeadersInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.requestHeadersInput"></a>

```go
func RequestHeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `RequestHeaders`<sup>Required</sup> <a name="RequestHeaders" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.requestHeaders"></a>

```go
func RequestHeaders() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowFulfillmentGenericWebService
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentGenericWebService">DialogflowFulfillmentGenericWebService</a>

---


### DialogflowFulfillmentTimeoutsOutputReference <a name="DialogflowFulfillmentTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowfulfillment"

dialogflowfulfillment.NewDialogflowFulfillmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowFulfillmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowFulfillment.DialogflowFulfillmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



