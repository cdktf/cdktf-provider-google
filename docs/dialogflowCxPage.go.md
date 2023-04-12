# `dialogflowCxPage` Submodule <a name="`dialogflowCxPage` Submodule" id="@cdktf/provider-google.dialogflowCxPage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxPage <a name="DialogflowCxPage" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page google_dialogflow_cx_page}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.NewDialogflowCxPage(scope Construct, id *string, config DialogflowCxPageConfig) DialogflowCxPage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig">DialogflowCxPageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig">DialogflowCxPageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putEntryFulfillment">PutEntryFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putEventHandlers">PutEventHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putForm">PutForm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putTransitionRoutes">PutTransitionRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetEntryFulfillment">ResetEntryFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetEventHandlers">ResetEventHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetForm">ResetForm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetLanguageCode">ResetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetTransitionRouteGroups">ResetTransitionRouteGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetTransitionRoutes">ResetTransitionRoutes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutEntryFulfillment` <a name="PutEntryFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putEntryFulfillment"></a>

```go
func PutEntryFulfillment(value DialogflowCxPageEntryFulfillment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putEntryFulfillment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment">DialogflowCxPageEntryFulfillment</a>

---

##### `PutEventHandlers` <a name="PutEventHandlers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putEventHandlers"></a>

```go
func PutEventHandlers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putEventHandlers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutForm` <a name="PutForm" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putForm"></a>

```go
func PutForm(value DialogflowCxPageForm)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putForm.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageForm">DialogflowCxPageForm</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putTimeouts"></a>

```go
func PutTimeouts(value DialogflowCxPageTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeouts">DialogflowCxPageTimeouts</a>

---

##### `PutTransitionRoutes` <a name="PutTransitionRoutes" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putTransitionRoutes"></a>

```go
func PutTransitionRoutes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putTransitionRoutes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEntryFulfillment` <a name="ResetEntryFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetEntryFulfillment"></a>

```go
func ResetEntryFulfillment()
```

##### `ResetEventHandlers` <a name="ResetEventHandlers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetEventHandlers"></a>

```go
func ResetEventHandlers()
```

##### `ResetForm` <a name="ResetForm" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetForm"></a>

```go
func ResetForm()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetId"></a>

```go
func ResetId()
```

##### `ResetLanguageCode` <a name="ResetLanguageCode" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetLanguageCode"></a>

```go
func ResetLanguageCode()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetParent"></a>

```go
func ResetParent()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTransitionRouteGroups` <a name="ResetTransitionRouteGroups" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetTransitionRouteGroups"></a>

```go
func ResetTransitionRouteGroups()
```

##### `ResetTransitionRoutes` <a name="ResetTransitionRoutes" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetTransitionRoutes"></a>

```go
func ResetTransitionRoutes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.DialogflowCxPage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.DialogflowCxPage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.DialogflowCxPage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.entryFulfillment">EntryFulfillment</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference">DialogflowCxPageEntryFulfillmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.eventHandlers">EventHandlers</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList">DialogflowCxPageEventHandlersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.form">Form</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference">DialogflowCxPageFormOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference">DialogflowCxPageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.transitionRoutes">TransitionRoutes</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList">DialogflowCxPageTransitionRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.entryFulfillmentInput">EntryFulfillmentInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment">DialogflowCxPageEntryFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.eventHandlersInput">EventHandlersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.formInput">FormInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageForm">DialogflowCxPageForm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.languageCodeInput">LanguageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.transitionRouteGroupsInput">TransitionRouteGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.transitionRoutesInput">TransitionRoutesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.transitionRouteGroups">TransitionRouteGroups</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EntryFulfillment`<sup>Required</sup> <a name="EntryFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.entryFulfillment"></a>

```go
func EntryFulfillment() DialogflowCxPageEntryFulfillmentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference">DialogflowCxPageEntryFulfillmentOutputReference</a>

---

##### `EventHandlers`<sup>Required</sup> <a name="EventHandlers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.eventHandlers"></a>

```go
func EventHandlers() DialogflowCxPageEventHandlersList
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList">DialogflowCxPageEventHandlersList</a>

---

##### `Form`<sup>Required</sup> <a name="Form" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.form"></a>

```go
func Form() DialogflowCxPageFormOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference">DialogflowCxPageFormOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.timeouts"></a>

```go
func Timeouts() DialogflowCxPageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference">DialogflowCxPageTimeoutsOutputReference</a>

---

##### `TransitionRoutes`<sup>Required</sup> <a name="TransitionRoutes" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.transitionRoutes"></a>

```go
func TransitionRoutes() DialogflowCxPageTransitionRoutesList
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList">DialogflowCxPageTransitionRoutesList</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EntryFulfillmentInput`<sup>Optional</sup> <a name="EntryFulfillmentInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.entryFulfillmentInput"></a>

```go
func EntryFulfillmentInput() DialogflowCxPageEntryFulfillment
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment">DialogflowCxPageEntryFulfillment</a>

---

##### `EventHandlersInput`<sup>Optional</sup> <a name="EventHandlersInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.eventHandlersInput"></a>

```go
func EventHandlersInput() interface{}
```

- *Type:* interface{}

---

##### `FormInput`<sup>Optional</sup> <a name="FormInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.formInput"></a>

```go
func FormInput() DialogflowCxPageForm
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageForm">DialogflowCxPageForm</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.languageCodeInput"></a>

```go
func LanguageCodeInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TransitionRouteGroupsInput`<sup>Optional</sup> <a name="TransitionRouteGroupsInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.transitionRouteGroupsInput"></a>

```go
func TransitionRouteGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TransitionRoutesInput`<sup>Optional</sup> <a name="TransitionRoutesInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.transitionRoutesInput"></a>

```go
func TransitionRoutesInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `TransitionRouteGroups`<sup>Required</sup> <a name="TransitionRouteGroups" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.transitionRouteGroups"></a>

```go
func TransitionRouteGroups() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxPageConfig <a name="DialogflowCxPageConfig" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

&dialogflowcxpage.DialogflowCxPageConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	EntryFulfillment: github.com/cdktf/cdktf-provider-google-go/google.dialogflowCxPage.DialogflowCxPageEntryFulfillment,
	EventHandlers: interface{},
	Form: github.com/cdktf/cdktf-provider-google-go/google.dialogflowCxPage.DialogflowCxPageForm,
	Id: *string,
	LanguageCode: *string,
	Parent: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.dialogflowCxPage.DialogflowCxPageTimeouts,
	TransitionRouteGroups: *[]*string,
	TransitionRoutes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The human-readable name of the page, unique within the agent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.entryFulfillment">EntryFulfillment</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment">DialogflowCxPageEntryFulfillment</a></code> | entry_fulfillment block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.eventHandlers">EventHandlers</a></code> | <code>interface{}</code> | event_handlers block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.form">Form</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageForm">DialogflowCxPageForm</a></code> | form block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#id DialogflowCxPage#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.languageCode">LanguageCode</a></code> | <code>*string</code> | The language of the following fields in page:. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.parent">Parent</a></code> | <code>*string</code> | The flow to create a page for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeouts">DialogflowCxPageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.transitionRouteGroups">TransitionRouteGroups</a></code> | <code>*[]*string</code> | Ordered list of TransitionRouteGroups associated with the page. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.transitionRoutes">TransitionRoutes</a></code> | <code>interface{}</code> | transition_routes block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The human-readable name of the page, unique within the agent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#display_name DialogflowCxPage#display_name}

---

##### `EntryFulfillment`<sup>Optional</sup> <a name="EntryFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.entryFulfillment"></a>

```go
EntryFulfillment DialogflowCxPageEntryFulfillment
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment">DialogflowCxPageEntryFulfillment</a>

entry_fulfillment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#entry_fulfillment DialogflowCxPage#entry_fulfillment}

---

##### `EventHandlers`<sup>Optional</sup> <a name="EventHandlers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.eventHandlers"></a>

```go
EventHandlers interface{}
```

- *Type:* interface{}

event_handlers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#event_handlers DialogflowCxPage#event_handlers}

---

##### `Form`<sup>Optional</sup> <a name="Form" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.form"></a>

```go
Form DialogflowCxPageForm
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageForm">DialogflowCxPageForm</a>

form block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#form DialogflowCxPage#form}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#id DialogflowCxPage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LanguageCode`<sup>Optional</sup> <a name="LanguageCode" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.languageCode"></a>

```go
LanguageCode *string
```

- *Type:* *string

The language of the following fields in page:.

Page.entry_fulfillment.messages
Page.entry_fulfillment.conditional_cases
Page.event_handlers.trigger_fulfillment.messages
Page.event_handlers.trigger_fulfillment.conditional_cases
Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages
Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases
Page.form.parameters.fill_behavior.reprompt_event_handlers.messages
Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases
Page.transition_routes.trigger_fulfillment.messages
Page.transition_routes.trigger_fulfillment.conditional_cases
If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#language_code DialogflowCxPage#language_code}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The flow to create a page for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#parent DialogflowCxPage#parent}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.timeouts"></a>

```go
Timeouts DialogflowCxPageTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeouts">DialogflowCxPageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#timeouts DialogflowCxPage#timeouts}

---

##### `TransitionRouteGroups`<sup>Optional</sup> <a name="TransitionRouteGroups" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.transitionRouteGroups"></a>

```go
TransitionRouteGroups *[]*string
```

- *Type:* *[]*string

Ordered list of TransitionRouteGroups associated with the page.

Transition route groups must be unique within a page.
If multiple transition routes within a page scope refer to the same intent, then the precedence order is: page's transition route -> page's transition route group -> flow's transition routes.
If multiple transition route groups within a page contain the same intent, then the first group in the ordered list takes precedence.
Format:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#transition_route_groups DialogflowCxPage#transition_route_groups}

---

##### `TransitionRoutes`<sup>Optional</sup> <a name="TransitionRoutes" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.transitionRoutes"></a>

```go
TransitionRoutes interface{}
```

- *Type:* interface{}

transition_routes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#transition_routes DialogflowCxPage#transition_routes}

---

### DialogflowCxPageEntryFulfillment <a name="DialogflowCxPageEntryFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

&dialogflowcxpage.DialogflowCxPageEntryFulfillment {
	Messages: interface{},
	ReturnPartialResponses: interface{},
	Tag: *string,
	Webhook: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment.property.messages">Messages</a></code> | <code>interface{}</code> | messages block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment.property.returnPartialResponses">ReturnPartialResponses</a></code> | <code>interface{}</code> | Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment.property.tag">Tag</a></code> | <code>*string</code> | The tag used by the webhook to identify which fulfillment is being called. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment.property.webhook">Webhook</a></code> | <code>*string</code> | The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>. |

---

##### `Messages`<sup>Optional</sup> <a name="Messages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment.property.messages"></a>

```go
Messages interface{}
```

- *Type:* interface{}

messages block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#messages DialogflowCxPage#messages}

---

##### `ReturnPartialResponses`<sup>Optional</sup> <a name="ReturnPartialResponses" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment.property.returnPartialResponses"></a>

```go
ReturnPartialResponses interface{}
```

- *Type:* interface{}

Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs.

If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#return_partial_responses DialogflowCxPage#return_partial_responses}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

The tag used by the webhook to identify which fulfillment is being called.

This field is required if webhook is specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#tag DialogflowCxPage#tag}

---

##### `Webhook`<sup>Optional</sup> <a name="Webhook" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment.property.webhook"></a>

```go
Webhook *string
```

- *Type:* *string

The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#webhook DialogflowCxPage#webhook}

---

### DialogflowCxPageEntryFulfillmentMessages <a name="DialogflowCxPageEntryFulfillmentMessages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessages.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

&dialogflowcxpage.DialogflowCxPageEntryFulfillmentMessages {
	Text: github.com/cdktf/cdktf-provider-google-go/google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesText,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessages.property.text">Text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesText">DialogflowCxPageEntryFulfillmentMessagesText</a></code> | text block. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessages.property.text"></a>

```go
Text DialogflowCxPageEntryFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesText">DialogflowCxPageEntryFulfillmentMessagesText</a>

text block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#text DialogflowCxPage#text}

---

### DialogflowCxPageEntryFulfillmentMessagesText <a name="DialogflowCxPageEntryFulfillmentMessagesText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesText.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

&dialogflowcxpage.DialogflowCxPageEntryFulfillmentMessagesText {
	Text: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesText.property.text">Text</a></code> | <code>*[]*string</code> | A collection of text responses. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesText.property.text"></a>

```go
Text *[]*string
```

- *Type:* *[]*string

A collection of text responses.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#text DialogflowCxPage#text}

---

### DialogflowCxPageEventHandlers <a name="DialogflowCxPageEventHandlers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

&dialogflowcxpage.DialogflowCxPageEventHandlers {
	Event: *string,
	TargetFlow: *string,
	TargetPage: *string,
	TriggerFulfillment: github.com/cdktf/cdktf-provider-google-go/google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers.property.event">Event</a></code> | <code>*string</code> | The name of the event to handle. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers.property.targetFlow">TargetFlow</a></code> | <code>*string</code> | The target flow to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers.property.targetPage">TargetPage</a></code> | <code>*string</code> | The target page to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers.property.triggerFulfillment">TriggerFulfillment</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment">DialogflowCxPageEventHandlersTriggerFulfillment</a></code> | trigger_fulfillment block. |

---

##### `Event`<sup>Optional</sup> <a name="Event" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers.property.event"></a>

```go
Event *string
```

- *Type:* *string

The name of the event to handle.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#event DialogflowCxPage#event}

---

##### `TargetFlow`<sup>Optional</sup> <a name="TargetFlow" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers.property.targetFlow"></a>

```go
TargetFlow *string
```

- *Type:* *string

The target flow to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#target_flow DialogflowCxPage#target_flow}

---

##### `TargetPage`<sup>Optional</sup> <a name="TargetPage" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers.property.targetPage"></a>

```go
TargetPage *string
```

- *Type:* *string

The target page to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#target_page DialogflowCxPage#target_page}

---

##### `TriggerFulfillment`<sup>Optional</sup> <a name="TriggerFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers.property.triggerFulfillment"></a>

```go
TriggerFulfillment DialogflowCxPageEventHandlersTriggerFulfillment
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment">DialogflowCxPageEventHandlersTriggerFulfillment</a>

trigger_fulfillment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#trigger_fulfillment DialogflowCxPage#trigger_fulfillment}

---

### DialogflowCxPageEventHandlersTriggerFulfillment <a name="DialogflowCxPageEventHandlersTriggerFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

&dialogflowcxpage.DialogflowCxPageEventHandlersTriggerFulfillment {
	Messages: interface{},
	ReturnPartialResponses: interface{},
	Tag: *string,
	Webhook: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment.property.messages">Messages</a></code> | <code>interface{}</code> | messages block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment.property.returnPartialResponses">ReturnPartialResponses</a></code> | <code>interface{}</code> | Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment.property.tag">Tag</a></code> | <code>*string</code> | The tag used by the webhook to identify which fulfillment is being called. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment.property.webhook">Webhook</a></code> | <code>*string</code> | The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>. |

---

##### `Messages`<sup>Optional</sup> <a name="Messages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment.property.messages"></a>

```go
Messages interface{}
```

- *Type:* interface{}

messages block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#messages DialogflowCxPage#messages}

---

##### `ReturnPartialResponses`<sup>Optional</sup> <a name="ReturnPartialResponses" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment.property.returnPartialResponses"></a>

```go
ReturnPartialResponses interface{}
```

- *Type:* interface{}

Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs.

If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#return_partial_responses DialogflowCxPage#return_partial_responses}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

The tag used by the webhook to identify which fulfillment is being called.

This field is required if webhook is specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#tag DialogflowCxPage#tag}

---

##### `Webhook`<sup>Optional</sup> <a name="Webhook" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment.property.webhook"></a>

```go
Webhook *string
```

- *Type:* *string

The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#webhook DialogflowCxPage#webhook}

---

### DialogflowCxPageEventHandlersTriggerFulfillmentMessages <a name="DialogflowCxPageEventHandlersTriggerFulfillmentMessages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessages.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

&dialogflowcxpage.DialogflowCxPageEventHandlersTriggerFulfillmentMessages {
	Text: github.com/cdktf/cdktf-provider-google-go/google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessages.property.text">Text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText">DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText</a></code> | text block. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessages.property.text"></a>

```go
Text DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText">DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText</a>

text block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#text DialogflowCxPage#text}

---

### DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText <a name="DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

&dialogflowcxpage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText {
	Text: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText.property.text">Text</a></code> | <code>*[]*string</code> | A collection of text responses. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText.property.text"></a>

```go
Text *[]*string
```

- *Type:* *[]*string

A collection of text responses.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#text DialogflowCxPage#text}

---

### DialogflowCxPageForm <a name="DialogflowCxPageForm" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageForm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageForm.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

&dialogflowcxpage.DialogflowCxPageForm {
	Parameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageForm.property.parameters">Parameters</a></code> | <code>interface{}</code> | parameters block. |

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageForm.property.parameters"></a>

```go
Parameters interface{}
```

- *Type:* interface{}

parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#parameters DialogflowCxPage#parameters}

---

### DialogflowCxPageFormParameters <a name="DialogflowCxPageFormParameters" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

&dialogflowcxpage.DialogflowCxPageFormParameters {
	DisplayName: *string,
	EntityType: *string,
	FillBehavior: github.com/cdktf/cdktf-provider-google-go/google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehavior,
	IsList: interface{},
	Redact: interface{},
	Required: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters.property.displayName">DisplayName</a></code> | <code>*string</code> | The human-readable name of the parameter, unique within the form. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters.property.entityType">EntityType</a></code> | <code>*string</code> | The entity type of the parameter. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters.property.fillBehavior">FillBehavior</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehavior">DialogflowCxPageFormParametersFillBehavior</a></code> | fill_behavior block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters.property.isList">IsList</a></code> | <code>interface{}</code> | Indicates whether the parameter represents a list of values. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters.property.redact">Redact</a></code> | <code>interface{}</code> | Indicates whether the parameter content should be redacted in log. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters.property.required">Required</a></code> | <code>interface{}</code> | Indicates whether the parameter is required. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The human-readable name of the parameter, unique within the form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#display_name DialogflowCxPage#display_name}

---

##### `EntityType`<sup>Optional</sup> <a name="EntityType" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters.property.entityType"></a>

```go
EntityType *string
```

- *Type:* *string

The entity type of the parameter.

Format: projects/-/locations/-/agents/-/entityTypes/<System Entity Type ID> for system entity types (for example, projects/-/locations/-/agents/-/entityTypes/sys.date), or projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/entityTypes/<Entity Type ID> for developer entity types.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#entity_type DialogflowCxPage#entity_type}

---

##### `FillBehavior`<sup>Optional</sup> <a name="FillBehavior" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters.property.fillBehavior"></a>

```go
FillBehavior DialogflowCxPageFormParametersFillBehavior
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehavior">DialogflowCxPageFormParametersFillBehavior</a>

fill_behavior block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#fill_behavior DialogflowCxPage#fill_behavior}

---

##### `IsList`<sup>Optional</sup> <a name="IsList" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters.property.isList"></a>

```go
IsList interface{}
```

- *Type:* interface{}

Indicates whether the parameter represents a list of values.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#is_list DialogflowCxPage#is_list}

---

##### `Redact`<sup>Optional</sup> <a name="Redact" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters.property.redact"></a>

```go
Redact interface{}
```

- *Type:* interface{}

Indicates whether the parameter content should be redacted in log.

If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#redact DialogflowCxPage#redact}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Indicates whether the parameter is required.

Optional parameters will not trigger prompts; however, they are filled if the user specifies them.
Required parameters must be filled before form filling concludes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#required DialogflowCxPage#required}

---

### DialogflowCxPageFormParametersFillBehavior <a name="DialogflowCxPageFormParametersFillBehavior" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehavior.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

&dialogflowcxpage.DialogflowCxPageFormParametersFillBehavior {
	InitialPromptFulfillment: github.com/cdktf/cdktf-provider-google-go/google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehavior.property.initialPromptFulfillment">InitialPromptFulfillment</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment</a></code> | initial_prompt_fulfillment block. |

---

##### `InitialPromptFulfillment`<sup>Optional</sup> <a name="InitialPromptFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehavior.property.initialPromptFulfillment"></a>

```go
InitialPromptFulfillment DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment</a>

initial_prompt_fulfillment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#initial_prompt_fulfillment DialogflowCxPage#initial_prompt_fulfillment}

---

### DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment <a name="DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

&dialogflowcxpage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment {
	Messages: interface{},
	ReturnPartialResponses: interface{},
	Tag: *string,
	Webhook: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.property.messages">Messages</a></code> | <code>interface{}</code> | messages block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.property.returnPartialResponses">ReturnPartialResponses</a></code> | <code>interface{}</code> | Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.property.tag">Tag</a></code> | <code>*string</code> | The tag used by the webhook to identify which fulfillment is being called. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.property.webhook">Webhook</a></code> | <code>*string</code> | The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>. |

---

##### `Messages`<sup>Optional</sup> <a name="Messages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.property.messages"></a>

```go
Messages interface{}
```

- *Type:* interface{}

messages block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#messages DialogflowCxPage#messages}

---

##### `ReturnPartialResponses`<sup>Optional</sup> <a name="ReturnPartialResponses" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.property.returnPartialResponses"></a>

```go
ReturnPartialResponses interface{}
```

- *Type:* interface{}

Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs.

If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#return_partial_responses DialogflowCxPage#return_partial_responses}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

The tag used by the webhook to identify which fulfillment is being called.

This field is required if webhook is specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#tag DialogflowCxPage#tag}

---

##### `Webhook`<sup>Optional</sup> <a name="Webhook" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.property.webhook"></a>

```go
Webhook *string
```

- *Type:* *string

The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#webhook DialogflowCxPage#webhook}

---

### DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages <a name="DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

&dialogflowcxpage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages {
	Text: github.com/cdktf/cdktf-provider-google-go/google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages.property.text">Text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText</a></code> | text block. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages.property.text"></a>

```go
Text DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText</a>

text block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#text DialogflowCxPage#text}

---

### DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText <a name="DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

&dialogflowcxpage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText {
	Text: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText.property.text">Text</a></code> | <code>*[]*string</code> | A collection of text responses. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText.property.text"></a>

```go
Text *[]*string
```

- *Type:* *[]*string

A collection of text responses.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#text DialogflowCxPage#text}

---

### DialogflowCxPageTimeouts <a name="DialogflowCxPageTimeouts" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

&dialogflowcxpage.DialogflowCxPageTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#create DialogflowCxPage#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#delete DialogflowCxPage#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#update DialogflowCxPage#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#create DialogflowCxPage#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#delete DialogflowCxPage#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#update DialogflowCxPage#update}.

---

### DialogflowCxPageTransitionRoutes <a name="DialogflowCxPageTransitionRoutes" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

&dialogflowcxpage.DialogflowCxPageTransitionRoutes {
	Condition: *string,
	Intent: *string,
	TargetFlow: *string,
	TargetPage: *string,
	TriggerFulfillment: github.com/cdktf/cdktf-provider-google-go/google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes.property.condition">Condition</a></code> | <code>*string</code> | The condition to evaluate against form parameters or session parameters. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes.property.intent">Intent</a></code> | <code>*string</code> | The unique identifier of an Intent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes.property.targetFlow">TargetFlow</a></code> | <code>*string</code> | The target flow to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes.property.targetPage">TargetPage</a></code> | <code>*string</code> | The target page to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes.property.triggerFulfillment">TriggerFulfillment</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment">DialogflowCxPageTransitionRoutesTriggerFulfillment</a></code> | trigger_fulfillment block. |

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes.property.condition"></a>

```go
Condition *string
```

- *Type:* *string

The condition to evaluate against form parameters or session parameters.

At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#condition DialogflowCxPage#condition}

---

##### `Intent`<sup>Optional</sup> <a name="Intent" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes.property.intent"></a>

```go
Intent *string
```

- *Type:* *string

The unique identifier of an Intent.

Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>. Indicates that the transition can only happen when the given intent is matched. At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#intent DialogflowCxPage#intent}

---

##### `TargetFlow`<sup>Optional</sup> <a name="TargetFlow" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes.property.targetFlow"></a>

```go
TargetFlow *string
```

- *Type:* *string

The target flow to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#target_flow DialogflowCxPage#target_flow}

---

##### `TargetPage`<sup>Optional</sup> <a name="TargetPage" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes.property.targetPage"></a>

```go
TargetPage *string
```

- *Type:* *string

The target page to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#target_page DialogflowCxPage#target_page}

---

##### `TriggerFulfillment`<sup>Optional</sup> <a name="TriggerFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes.property.triggerFulfillment"></a>

```go
TriggerFulfillment DialogflowCxPageTransitionRoutesTriggerFulfillment
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment">DialogflowCxPageTransitionRoutesTriggerFulfillment</a>

trigger_fulfillment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#trigger_fulfillment DialogflowCxPage#trigger_fulfillment}

---

### DialogflowCxPageTransitionRoutesTriggerFulfillment <a name="DialogflowCxPageTransitionRoutesTriggerFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

&dialogflowcxpage.DialogflowCxPageTransitionRoutesTriggerFulfillment {
	Messages: interface{},
	ReturnPartialResponses: interface{},
	Tag: *string,
	Webhook: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment.property.messages">Messages</a></code> | <code>interface{}</code> | messages block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment.property.returnPartialResponses">ReturnPartialResponses</a></code> | <code>interface{}</code> | Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment.property.tag">Tag</a></code> | <code>*string</code> | The tag used by the webhook to identify which fulfillment is being called. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment.property.webhook">Webhook</a></code> | <code>*string</code> | The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>. |

---

##### `Messages`<sup>Optional</sup> <a name="Messages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment.property.messages"></a>

```go
Messages interface{}
```

- *Type:* interface{}

messages block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#messages DialogflowCxPage#messages}

---

##### `ReturnPartialResponses`<sup>Optional</sup> <a name="ReturnPartialResponses" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment.property.returnPartialResponses"></a>

```go
ReturnPartialResponses interface{}
```

- *Type:* interface{}

Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs.

If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#return_partial_responses DialogflowCxPage#return_partial_responses}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

The tag used by the webhook to identify which fulfillment is being called.

This field is required if webhook is specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#tag DialogflowCxPage#tag}

---

##### `Webhook`<sup>Optional</sup> <a name="Webhook" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment.property.webhook"></a>

```go
Webhook *string
```

- *Type:* *string

The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#webhook DialogflowCxPage#webhook}

---

### DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages <a name="DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

&dialogflowcxpage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages {
	Text: github.com/cdktf/cdktf-provider-google-go/google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages.property.text">Text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText</a></code> | text block. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages.property.text"></a>

```go
Text DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText</a>

text block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#text DialogflowCxPage#text}

---

### DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText <a name="DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

&dialogflowcxpage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText {
	Text: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText.property.text">Text</a></code> | <code>*[]*string</code> | A collection of text responses. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText.property.text"></a>

```go
Text *[]*string
```

- *Type:* *[]*string

A collection of text responses.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dialogflow_cx_page#text DialogflowCxPage#text}

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxPageEntryFulfillmentMessagesList <a name="DialogflowCxPageEntryFulfillmentMessagesList" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.NewDialogflowCxPageEntryFulfillmentMessagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DialogflowCxPageEntryFulfillmentMessagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.get"></a>

```go
func Get(index *f64) DialogflowCxPageEntryFulfillmentMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCxPageEntryFulfillmentMessagesOutputReference <a name="DialogflowCxPageEntryFulfillmentMessagesOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.NewDialogflowCxPageEntryFulfillmentMessagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DialogflowCxPageEntryFulfillmentMessagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.putText">PutText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutText` <a name="PutText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.putText"></a>

```go
func PutText(value DialogflowCxPageEntryFulfillmentMessagesText)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesText">DialogflowCxPageEntryFulfillmentMessagesText</a>

---

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.property.text">Text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference">DialogflowCxPageEntryFulfillmentMessagesTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.property.textInput">TextInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesText">DialogflowCxPageEntryFulfillmentMessagesText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.property.text"></a>

```go
func Text() DialogflowCxPageEntryFulfillmentMessagesTextOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference">DialogflowCxPageEntryFulfillmentMessagesTextOutputReference</a>

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.property.textInput"></a>

```go
func TextInput() DialogflowCxPageEntryFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesText">DialogflowCxPageEntryFulfillmentMessagesText</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCxPageEntryFulfillmentMessagesTextOutputReference <a name="DialogflowCxPageEntryFulfillmentMessagesTextOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.NewDialogflowCxPageEntryFulfillmentMessagesTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowCxPageEntryFulfillmentMessagesTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption">AllowPlaybackInterruption</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.textInput">TextInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.text">Text</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesText">DialogflowCxPageEntryFulfillmentMessagesText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowPlaybackInterruption`<sup>Required</sup> <a name="AllowPlaybackInterruption" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption"></a>

```go
func AllowPlaybackInterruption() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.textInput"></a>

```go
func TextInput() *[]*string
```

- *Type:* *[]*string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.text"></a>

```go
func Text() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowCxPageEntryFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesText">DialogflowCxPageEntryFulfillmentMessagesText</a>

---


### DialogflowCxPageEntryFulfillmentOutputReference <a name="DialogflowCxPageEntryFulfillmentOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.NewDialogflowCxPageEntryFulfillmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowCxPageEntryFulfillmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.putMessages">PutMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.resetMessages">ResetMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.resetReturnPartialResponses">ResetReturnPartialResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.resetWebhook">ResetWebhook</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMessages` <a name="PutMessages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.putMessages"></a>

```go
func PutMessages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.putMessages.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMessages` <a name="ResetMessages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.resetMessages"></a>

```go
func ResetMessages()
```

##### `ResetReturnPartialResponses` <a name="ResetReturnPartialResponses" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.resetReturnPartialResponses"></a>

```go
func ResetReturnPartialResponses()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.resetTag"></a>

```go
func ResetTag()
```

##### `ResetWebhook` <a name="ResetWebhook" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.resetWebhook"></a>

```go
func ResetWebhook()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.messages">Messages</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList">DialogflowCxPageEntryFulfillmentMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.messagesInput">MessagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.returnPartialResponsesInput">ReturnPartialResponsesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.webhookInput">WebhookInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.returnPartialResponses">ReturnPartialResponses</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.webhook">Webhook</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment">DialogflowCxPageEntryFulfillment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Messages`<sup>Required</sup> <a name="Messages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.messages"></a>

```go
func Messages() DialogflowCxPageEntryFulfillmentMessagesList
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList">DialogflowCxPageEntryFulfillmentMessagesList</a>

---

##### `MessagesInput`<sup>Optional</sup> <a name="MessagesInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.messagesInput"></a>

```go
func MessagesInput() interface{}
```

- *Type:* interface{}

---

##### `ReturnPartialResponsesInput`<sup>Optional</sup> <a name="ReturnPartialResponsesInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.returnPartialResponsesInput"></a>

```go
func ReturnPartialResponsesInput() interface{}
```

- *Type:* interface{}

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.webhookInput"></a>

```go
func WebhookInput() *string
```

- *Type:* *string

---

##### `ReturnPartialResponses`<sup>Required</sup> <a name="ReturnPartialResponses" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.returnPartialResponses"></a>

```go
func ReturnPartialResponses() interface{}
```

- *Type:* interface{}

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.webhook"></a>

```go
func Webhook() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowCxPageEntryFulfillment
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment">DialogflowCxPageEntryFulfillment</a>

---


### DialogflowCxPageEventHandlersList <a name="DialogflowCxPageEventHandlersList" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.NewDialogflowCxPageEventHandlersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DialogflowCxPageEventHandlersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.get"></a>

```go
func Get(index *f64) DialogflowCxPageEventHandlersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCxPageEventHandlersOutputReference <a name="DialogflowCxPageEventHandlersOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.NewDialogflowCxPageEventHandlersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DialogflowCxPageEventHandlersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.putTriggerFulfillment">PutTriggerFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.resetEvent">ResetEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.resetTargetFlow">ResetTargetFlow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.resetTargetPage">ResetTargetPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.resetTriggerFulfillment">ResetTriggerFulfillment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTriggerFulfillment` <a name="PutTriggerFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.putTriggerFulfillment"></a>

```go
func PutTriggerFulfillment(value DialogflowCxPageEventHandlersTriggerFulfillment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.putTriggerFulfillment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment">DialogflowCxPageEventHandlersTriggerFulfillment</a>

---

##### `ResetEvent` <a name="ResetEvent" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.resetEvent"></a>

```go
func ResetEvent()
```

##### `ResetTargetFlow` <a name="ResetTargetFlow" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.resetTargetFlow"></a>

```go
func ResetTargetFlow()
```

##### `ResetTargetPage` <a name="ResetTargetPage" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.resetTargetPage"></a>

```go
func ResetTargetPage()
```

##### `ResetTriggerFulfillment` <a name="ResetTriggerFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.resetTriggerFulfillment"></a>

```go
func ResetTriggerFulfillment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.triggerFulfillment">TriggerFulfillment</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference">DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.eventInput">EventInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.targetFlowInput">TargetFlowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.targetPageInput">TargetPageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.triggerFulfillmentInput">TriggerFulfillmentInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment">DialogflowCxPageEventHandlersTriggerFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.event">Event</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.targetFlow">TargetFlow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.targetPage">TargetPage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TriggerFulfillment`<sup>Required</sup> <a name="TriggerFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.triggerFulfillment"></a>

```go
func TriggerFulfillment() DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference">DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference</a>

---

##### `EventInput`<sup>Optional</sup> <a name="EventInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.eventInput"></a>

```go
func EventInput() *string
```

- *Type:* *string

---

##### `TargetFlowInput`<sup>Optional</sup> <a name="TargetFlowInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.targetFlowInput"></a>

```go
func TargetFlowInput() *string
```

- *Type:* *string

---

##### `TargetPageInput`<sup>Optional</sup> <a name="TargetPageInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.targetPageInput"></a>

```go
func TargetPageInput() *string
```

- *Type:* *string

---

##### `TriggerFulfillmentInput`<sup>Optional</sup> <a name="TriggerFulfillmentInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.triggerFulfillmentInput"></a>

```go
func TriggerFulfillmentInput() DialogflowCxPageEventHandlersTriggerFulfillment
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment">DialogflowCxPageEventHandlersTriggerFulfillment</a>

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.event"></a>

```go
func Event() *string
```

- *Type:* *string

---

##### `TargetFlow`<sup>Required</sup> <a name="TargetFlow" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.targetFlow"></a>

```go
func TargetFlow() *string
```

- *Type:* *string

---

##### `TargetPage`<sup>Required</sup> <a name="TargetPage" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.targetPage"></a>

```go
func TargetPage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList <a name="DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.NewDialogflowCxPageEventHandlersTriggerFulfillmentMessagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.get"></a>

```go
func Get(index *f64) DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference <a name="DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.NewDialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.putText">PutText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutText` <a name="PutText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.putText"></a>

```go
func PutText(value DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText">DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText</a>

---

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.text">Text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference">DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.textInput">TextInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText">DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.text"></a>

```go
func Text() DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference">DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference</a>

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.textInput"></a>

```go
func TextInput() DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText">DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference <a name="DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.NewDialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption">AllowPlaybackInterruption</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.textInput">TextInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.text">Text</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText">DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowPlaybackInterruption`<sup>Required</sup> <a name="AllowPlaybackInterruption" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption"></a>

```go
func AllowPlaybackInterruption() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.textInput"></a>

```go
func TextInput() *[]*string
```

- *Type:* *[]*string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.text"></a>

```go
func Text() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText">DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText</a>

---


### DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference <a name="DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.NewDialogflowCxPageEventHandlersTriggerFulfillmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.putMessages">PutMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resetMessages">ResetMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resetReturnPartialResponses">ResetReturnPartialResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resetWebhook">ResetWebhook</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMessages` <a name="PutMessages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.putMessages"></a>

```go
func PutMessages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.putMessages.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMessages` <a name="ResetMessages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resetMessages"></a>

```go
func ResetMessages()
```

##### `ResetReturnPartialResponses` <a name="ResetReturnPartialResponses" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resetReturnPartialResponses"></a>

```go
func ResetReturnPartialResponses()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resetTag"></a>

```go
func ResetTag()
```

##### `ResetWebhook` <a name="ResetWebhook" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resetWebhook"></a>

```go
func ResetWebhook()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.messages">Messages</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList">DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.messagesInput">MessagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.returnPartialResponsesInput">ReturnPartialResponsesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.webhookInput">WebhookInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.returnPartialResponses">ReturnPartialResponses</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.webhook">Webhook</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment">DialogflowCxPageEventHandlersTriggerFulfillment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Messages`<sup>Required</sup> <a name="Messages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.messages"></a>

```go
func Messages() DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList">DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList</a>

---

##### `MessagesInput`<sup>Optional</sup> <a name="MessagesInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.messagesInput"></a>

```go
func MessagesInput() interface{}
```

- *Type:* interface{}

---

##### `ReturnPartialResponsesInput`<sup>Optional</sup> <a name="ReturnPartialResponsesInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.returnPartialResponsesInput"></a>

```go
func ReturnPartialResponsesInput() interface{}
```

- *Type:* interface{}

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.webhookInput"></a>

```go
func WebhookInput() *string
```

- *Type:* *string

---

##### `ReturnPartialResponses`<sup>Required</sup> <a name="ReturnPartialResponses" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.returnPartialResponses"></a>

```go
func ReturnPartialResponses() interface{}
```

- *Type:* interface{}

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.webhook"></a>

```go
func Webhook() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowCxPageEventHandlersTriggerFulfillment
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment">DialogflowCxPageEventHandlersTriggerFulfillment</a>

---


### DialogflowCxPageFormOutputReference <a name="DialogflowCxPageFormOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.NewDialogflowCxPageFormOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowCxPageFormOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.putParameters"></a>

```go
func PutParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.putParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList">DialogflowCxPageFormParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageForm">DialogflowCxPageForm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.property.parameters"></a>

```go
func Parameters() DialogflowCxPageFormParametersList
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList">DialogflowCxPageFormParametersList</a>

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowCxPageForm
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageForm">DialogflowCxPageForm</a>

---


### DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList <a name="DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.NewDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.get"></a>

```go
func Get(index *f64) DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference <a name="DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.NewDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.putText">PutText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutText` <a name="PutText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.putText"></a>

```go
func PutText(value DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText</a>

---

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.text">Text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.textInput">TextInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.text"></a>

```go
func Text() DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference</a>

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.textInput"></a>

```go
func TextInput() DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference <a name="DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.NewDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption">AllowPlaybackInterruption</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.textInput">TextInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.text">Text</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowPlaybackInterruption`<sup>Required</sup> <a name="AllowPlaybackInterruption" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption"></a>

```go
func AllowPlaybackInterruption() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.textInput"></a>

```go
func TextInput() *[]*string
```

- *Type:* *[]*string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.text"></a>

```go
func Text() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText</a>

---


### DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference <a name="DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.NewDialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.putMessages">PutMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resetMessages">ResetMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resetReturnPartialResponses">ResetReturnPartialResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resetWebhook">ResetWebhook</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMessages` <a name="PutMessages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.putMessages"></a>

```go
func PutMessages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.putMessages.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMessages` <a name="ResetMessages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resetMessages"></a>

```go
func ResetMessages()
```

##### `ResetReturnPartialResponses` <a name="ResetReturnPartialResponses" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resetReturnPartialResponses"></a>

```go
func ResetReturnPartialResponses()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resetTag"></a>

```go
func ResetTag()
```

##### `ResetWebhook` <a name="ResetWebhook" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resetWebhook"></a>

```go
func ResetWebhook()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.messages">Messages</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.messagesInput">MessagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.returnPartialResponsesInput">ReturnPartialResponsesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.webhookInput">WebhookInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.returnPartialResponses">ReturnPartialResponses</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.webhook">Webhook</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Messages`<sup>Required</sup> <a name="Messages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.messages"></a>

```go
func Messages() DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList</a>

---

##### `MessagesInput`<sup>Optional</sup> <a name="MessagesInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.messagesInput"></a>

```go
func MessagesInput() interface{}
```

- *Type:* interface{}

---

##### `ReturnPartialResponsesInput`<sup>Optional</sup> <a name="ReturnPartialResponsesInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.returnPartialResponsesInput"></a>

```go
func ReturnPartialResponsesInput() interface{}
```

- *Type:* interface{}

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.webhookInput"></a>

```go
func WebhookInput() *string
```

- *Type:* *string

---

##### `ReturnPartialResponses`<sup>Required</sup> <a name="ReturnPartialResponses" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.returnPartialResponses"></a>

```go
func ReturnPartialResponses() interface{}
```

- *Type:* interface{}

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.webhook"></a>

```go
func Webhook() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment</a>

---


### DialogflowCxPageFormParametersFillBehaviorOutputReference <a name="DialogflowCxPageFormParametersFillBehaviorOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.NewDialogflowCxPageFormParametersFillBehaviorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowCxPageFormParametersFillBehaviorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.putInitialPromptFulfillment">PutInitialPromptFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.resetInitialPromptFulfillment">ResetInitialPromptFulfillment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInitialPromptFulfillment` <a name="PutInitialPromptFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.putInitialPromptFulfillment"></a>

```go
func PutInitialPromptFulfillment(value DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.putInitialPromptFulfillment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment</a>

---

##### `ResetInitialPromptFulfillment` <a name="ResetInitialPromptFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.resetInitialPromptFulfillment"></a>

```go
func ResetInitialPromptFulfillment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.property.initialPromptFulfillment">InitialPromptFulfillment</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.property.initialPromptFulfillmentInput">InitialPromptFulfillmentInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehavior">DialogflowCxPageFormParametersFillBehavior</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InitialPromptFulfillment`<sup>Required</sup> <a name="InitialPromptFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.property.initialPromptFulfillment"></a>

```go
func InitialPromptFulfillment() DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference</a>

---

##### `InitialPromptFulfillmentInput`<sup>Optional</sup> <a name="InitialPromptFulfillmentInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.property.initialPromptFulfillmentInput"></a>

```go
func InitialPromptFulfillmentInput() DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowCxPageFormParametersFillBehavior
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehavior">DialogflowCxPageFormParametersFillBehavior</a>

---


### DialogflowCxPageFormParametersList <a name="DialogflowCxPageFormParametersList" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.NewDialogflowCxPageFormParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DialogflowCxPageFormParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.get"></a>

```go
func Get(index *f64) DialogflowCxPageFormParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCxPageFormParametersOutputReference <a name="DialogflowCxPageFormParametersOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.NewDialogflowCxPageFormParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DialogflowCxPageFormParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.putFillBehavior">PutFillBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resetEntityType">ResetEntityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resetFillBehavior">ResetFillBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resetIsList">ResetIsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resetRedact">ResetRedact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFillBehavior` <a name="PutFillBehavior" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.putFillBehavior"></a>

```go
func PutFillBehavior(value DialogflowCxPageFormParametersFillBehavior)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.putFillBehavior.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehavior">DialogflowCxPageFormParametersFillBehavior</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEntityType` <a name="ResetEntityType" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resetEntityType"></a>

```go
func ResetEntityType()
```

##### `ResetFillBehavior` <a name="ResetFillBehavior" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resetFillBehavior"></a>

```go
func ResetFillBehavior()
```

##### `ResetIsList` <a name="ResetIsList" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resetIsList"></a>

```go
func ResetIsList()
```

##### `ResetRedact` <a name="ResetRedact" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resetRedact"></a>

```go
func ResetRedact()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resetRequired"></a>

```go
func ResetRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.fillBehavior">FillBehavior</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference">DialogflowCxPageFormParametersFillBehaviorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.entityTypeInput">EntityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.fillBehaviorInput">FillBehaviorInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehavior">DialogflowCxPageFormParametersFillBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.isListInput">IsListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.redactInput">RedactInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.isList">IsList</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.redact">Redact</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FillBehavior`<sup>Required</sup> <a name="FillBehavior" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.fillBehavior"></a>

```go
func FillBehavior() DialogflowCxPageFormParametersFillBehaviorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference">DialogflowCxPageFormParametersFillBehaviorOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EntityTypeInput`<sup>Optional</sup> <a name="EntityTypeInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.entityTypeInput"></a>

```go
func EntityTypeInput() *string
```

- *Type:* *string

---

##### `FillBehaviorInput`<sup>Optional</sup> <a name="FillBehaviorInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.fillBehaviorInput"></a>

```go
func FillBehaviorInput() DialogflowCxPageFormParametersFillBehavior
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehavior">DialogflowCxPageFormParametersFillBehavior</a>

---

##### `IsListInput`<sup>Optional</sup> <a name="IsListInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.isListInput"></a>

```go
func IsListInput() interface{}
```

- *Type:* interface{}

---

##### `RedactInput`<sup>Optional</sup> <a name="RedactInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.redactInput"></a>

```go
func RedactInput() interface{}
```

- *Type:* interface{}

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `IsList`<sup>Required</sup> <a name="IsList" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.isList"></a>

```go
func IsList() interface{}
```

- *Type:* interface{}

---

##### `Redact`<sup>Required</sup> <a name="Redact" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.redact"></a>

```go
func Redact() interface{}
```

- *Type:* interface{}

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCxPageTimeoutsOutputReference <a name="DialogflowCxPageTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.NewDialogflowCxPageTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowCxPageTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCxPageTransitionRoutesList <a name="DialogflowCxPageTransitionRoutesList" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.NewDialogflowCxPageTransitionRoutesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DialogflowCxPageTransitionRoutesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.get"></a>

```go
func Get(index *f64) DialogflowCxPageTransitionRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCxPageTransitionRoutesOutputReference <a name="DialogflowCxPageTransitionRoutesOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.NewDialogflowCxPageTransitionRoutesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DialogflowCxPageTransitionRoutesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.putTriggerFulfillment">PutTriggerFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.resetIntent">ResetIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.resetTargetFlow">ResetTargetFlow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.resetTargetPage">ResetTargetPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.resetTriggerFulfillment">ResetTriggerFulfillment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTriggerFulfillment` <a name="PutTriggerFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.putTriggerFulfillment"></a>

```go
func PutTriggerFulfillment(value DialogflowCxPageTransitionRoutesTriggerFulfillment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.putTriggerFulfillment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment">DialogflowCxPageTransitionRoutesTriggerFulfillment</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetIntent` <a name="ResetIntent" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.resetIntent"></a>

```go
func ResetIntent()
```

##### `ResetTargetFlow` <a name="ResetTargetFlow" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.resetTargetFlow"></a>

```go
func ResetTargetFlow()
```

##### `ResetTargetPage` <a name="ResetTargetPage" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.resetTargetPage"></a>

```go
func ResetTargetPage()
```

##### `ResetTriggerFulfillment` <a name="ResetTriggerFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.resetTriggerFulfillment"></a>

```go
func ResetTriggerFulfillment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.triggerFulfillment">TriggerFulfillment</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference">DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.conditionInput">ConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.intentInput">IntentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.targetFlowInput">TargetFlowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.targetPageInput">TargetPageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.triggerFulfillmentInput">TriggerFulfillmentInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment">DialogflowCxPageTransitionRoutesTriggerFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.intent">Intent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.targetFlow">TargetFlow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.targetPage">TargetPage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TriggerFulfillment`<sup>Required</sup> <a name="TriggerFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.triggerFulfillment"></a>

```go
func TriggerFulfillment() DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference">DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference</a>

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.conditionInput"></a>

```go
func ConditionInput() *string
```

- *Type:* *string

---

##### `IntentInput`<sup>Optional</sup> <a name="IntentInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.intentInput"></a>

```go
func IntentInput() *string
```

- *Type:* *string

---

##### `TargetFlowInput`<sup>Optional</sup> <a name="TargetFlowInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.targetFlowInput"></a>

```go
func TargetFlowInput() *string
```

- *Type:* *string

---

##### `TargetPageInput`<sup>Optional</sup> <a name="TargetPageInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.targetPageInput"></a>

```go
func TargetPageInput() *string
```

- *Type:* *string

---

##### `TriggerFulfillmentInput`<sup>Optional</sup> <a name="TriggerFulfillmentInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.triggerFulfillmentInput"></a>

```go
func TriggerFulfillmentInput() DialogflowCxPageTransitionRoutesTriggerFulfillment
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment">DialogflowCxPageTransitionRoutesTriggerFulfillment</a>

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Intent`<sup>Required</sup> <a name="Intent" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.intent"></a>

```go
func Intent() *string
```

- *Type:* *string

---

##### `TargetFlow`<sup>Required</sup> <a name="TargetFlow" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.targetFlow"></a>

```go
func TargetFlow() *string
```

- *Type:* *string

---

##### `TargetPage`<sup>Required</sup> <a name="TargetPage" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.targetPage"></a>

```go
func TargetPage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList <a name="DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.NewDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.get"></a>

```go
func Get(index *f64) DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference <a name="DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.NewDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.putText">PutText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutText` <a name="PutText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.putText"></a>

```go
func PutText(value DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText</a>

---

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.text">Text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.textInput">TextInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.text"></a>

```go
func Text() DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference</a>

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.textInput"></a>

```go
func TextInput() DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference <a name="DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.NewDialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption">AllowPlaybackInterruption</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.textInput">TextInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.text">Text</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowPlaybackInterruption`<sup>Required</sup> <a name="AllowPlaybackInterruption" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption"></a>

```go
func AllowPlaybackInterruption() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.textInput"></a>

```go
func TextInput() *[]*string
```

- *Type:* *[]*string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.text"></a>

```go
func Text() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText</a>

---


### DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference <a name="DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dialogflowcxpage"

dialogflowcxpage.NewDialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.putMessages">PutMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resetMessages">ResetMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resetReturnPartialResponses">ResetReturnPartialResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resetWebhook">ResetWebhook</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMessages` <a name="PutMessages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.putMessages"></a>

```go
func PutMessages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.putMessages.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMessages` <a name="ResetMessages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resetMessages"></a>

```go
func ResetMessages()
```

##### `ResetReturnPartialResponses` <a name="ResetReturnPartialResponses" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resetReturnPartialResponses"></a>

```go
func ResetReturnPartialResponses()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resetTag"></a>

```go
func ResetTag()
```

##### `ResetWebhook` <a name="ResetWebhook" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resetWebhook"></a>

```go
func ResetWebhook()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.messages">Messages</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.messagesInput">MessagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.returnPartialResponsesInput">ReturnPartialResponsesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.webhookInput">WebhookInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.returnPartialResponses">ReturnPartialResponses</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.webhook">Webhook</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment">DialogflowCxPageTransitionRoutesTriggerFulfillment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Messages`<sup>Required</sup> <a name="Messages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.messages"></a>

```go
func Messages() DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList</a>

---

##### `MessagesInput`<sup>Optional</sup> <a name="MessagesInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.messagesInput"></a>

```go
func MessagesInput() interface{}
```

- *Type:* interface{}

---

##### `ReturnPartialResponsesInput`<sup>Optional</sup> <a name="ReturnPartialResponsesInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.returnPartialResponsesInput"></a>

```go
func ReturnPartialResponsesInput() interface{}
```

- *Type:* interface{}

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.webhookInput"></a>

```go
func WebhookInput() *string
```

- *Type:* *string

---

##### `ReturnPartialResponses`<sup>Required</sup> <a name="ReturnPartialResponses" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.returnPartialResponses"></a>

```go
func ReturnPartialResponses() interface{}
```

- *Type:* interface{}

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.webhook"></a>

```go
func Webhook() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowCxPageTransitionRoutesTriggerFulfillment
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment">DialogflowCxPageTransitionRoutesTriggerFulfillment</a>

---



