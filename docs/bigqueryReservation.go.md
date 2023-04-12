# `bigqueryReservation` Submodule <a name="`bigqueryReservation` Submodule" id="@cdktf/provider-google.bigqueryReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryReservation <a name="BigqueryReservation" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/bigquery_reservation google_bigquery_reservation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryreservation"

bigqueryreservation.NewBigqueryReservation(scope Construct, id *string, config BigqueryReservationConfig) BigqueryReservation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig">BigqueryReservationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig">BigqueryReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.putAutoscale">PutAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetAutoscale">ResetAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetConcurrency">ResetConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetEdition">ResetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetIgnoreIdleSlots">ResetIgnoreIdleSlots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetMultiRegionAuxiliary">ResetMultiRegionAuxiliary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAutoscale` <a name="PutAutoscale" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.putAutoscale"></a>

```go
func PutAutoscale(value BigqueryReservationAutoscale)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.putAutoscale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscale">BigqueryReservationAutoscale</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.putTimeouts"></a>

```go
func PutTimeouts(value BigqueryReservationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeouts">BigqueryReservationTimeouts</a>

---

##### `ResetAutoscale` <a name="ResetAutoscale" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetAutoscale"></a>

```go
func ResetAutoscale()
```

##### `ResetConcurrency` <a name="ResetConcurrency" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetConcurrency"></a>

```go
func ResetConcurrency()
```

##### `ResetEdition` <a name="ResetEdition" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetEdition"></a>

```go
func ResetEdition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoreIdleSlots` <a name="ResetIgnoreIdleSlots" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetIgnoreIdleSlots"></a>

```go
func ResetIgnoreIdleSlots()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetMultiRegionAuxiliary` <a name="ResetMultiRegionAuxiliary" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetMultiRegionAuxiliary"></a>

```go
func ResetMultiRegionAuxiliary()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryreservation"

bigqueryreservation.BigqueryReservation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryreservation"

bigqueryreservation.BigqueryReservation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryreservation"

bigqueryreservation.BigqueryReservation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.autoscale">Autoscale</a></code> | <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference">BigqueryReservationAutoscaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference">BigqueryReservationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.autoscaleInput">AutoscaleInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscale">BigqueryReservationAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.concurrencyInput">ConcurrencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.editionInput">EditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.ignoreIdleSlotsInput">IgnoreIdleSlotsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.multiRegionAuxiliaryInput">MultiRegionAuxiliaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.slotCapacityInput">SlotCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.concurrency">Concurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.edition">Edition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.ignoreIdleSlots">IgnoreIdleSlots</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.multiRegionAuxiliary">MultiRegionAuxiliary</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.slotCapacity">SlotCapacity</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Autoscale`<sup>Required</sup> <a name="Autoscale" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.autoscale"></a>

```go
func Autoscale() BigqueryReservationAutoscaleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference">BigqueryReservationAutoscaleOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.timeouts"></a>

```go
func Timeouts() BigqueryReservationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference">BigqueryReservationTimeoutsOutputReference</a>

---

##### `AutoscaleInput`<sup>Optional</sup> <a name="AutoscaleInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.autoscaleInput"></a>

```go
func AutoscaleInput() BigqueryReservationAutoscale
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscale">BigqueryReservationAutoscale</a>

---

##### `ConcurrencyInput`<sup>Optional</sup> <a name="ConcurrencyInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.concurrencyInput"></a>

```go
func ConcurrencyInput() *f64
```

- *Type:* *f64

---

##### `EditionInput`<sup>Optional</sup> <a name="EditionInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.editionInput"></a>

```go
func EditionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreIdleSlotsInput`<sup>Optional</sup> <a name="IgnoreIdleSlotsInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.ignoreIdleSlotsInput"></a>

```go
func IgnoreIdleSlotsInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MultiRegionAuxiliaryInput`<sup>Optional</sup> <a name="MultiRegionAuxiliaryInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.multiRegionAuxiliaryInput"></a>

```go
func MultiRegionAuxiliaryInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SlotCapacityInput`<sup>Optional</sup> <a name="SlotCapacityInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.slotCapacityInput"></a>

```go
func SlotCapacityInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Concurrency`<sup>Required</sup> <a name="Concurrency" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.concurrency"></a>

```go
func Concurrency() *f64
```

- *Type:* *f64

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.edition"></a>

```go
func Edition() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreIdleSlots`<sup>Required</sup> <a name="IgnoreIdleSlots" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.ignoreIdleSlots"></a>

```go
func IgnoreIdleSlots() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MultiRegionAuxiliary`<sup>Required</sup> <a name="MultiRegionAuxiliary" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.multiRegionAuxiliary"></a>

```go
func MultiRegionAuxiliary() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SlotCapacity`<sup>Required</sup> <a name="SlotCapacity" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.slotCapacity"></a>

```go
func SlotCapacity() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryReservationAutoscale <a name="BigqueryReservationAutoscale" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscale.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryreservation"

&bigqueryreservation.BigqueryReservationAutoscale {
	MaxSlots: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscale.property.maxSlots">MaxSlots</a></code> | <code>*f64</code> | Number of slots to be scaled when needed. |

---

##### `MaxSlots`<sup>Optional</sup> <a name="MaxSlots" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscale.property.maxSlots"></a>

```go
MaxSlots *f64
```

- *Type:* *f64

Number of slots to be scaled when needed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_reservation#max_slots BigqueryReservation#max_slots}

---

### BigqueryReservationConfig <a name="BigqueryReservationConfig" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryreservation"

&bigqueryreservation.BigqueryReservationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	SlotCapacity: *f64,
	Autoscale: github.com/cdktf/cdktf-provider-google-go/google.bigqueryReservation.BigqueryReservationAutoscale,
	Concurrency: *f64,
	Edition: *string,
	Id: *string,
	IgnoreIdleSlots: interface{},
	Location: *string,
	MultiRegionAuxiliary: interface{},
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.bigqueryReservation.BigqueryReservationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.name">Name</a></code> | <code>*string</code> | The name of the reservation. This field must only contain alphanumeric characters or dash. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.slotCapacity">SlotCapacity</a></code> | <code>*f64</code> | Minimum slots available to this reservation. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.autoscale">Autoscale</a></code> | <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscale">BigqueryReservationAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.concurrency">Concurrency</a></code> | <code>*f64</code> | Maximum number of queries that are allowed to run concurrently in this reservation. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.edition">Edition</a></code> | <code>*string</code> | The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_reservation#id BigqueryReservation#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.ignoreIdleSlots">IgnoreIdleSlots</a></code> | <code>interface{}</code> | If false, any query using this reservation will use idle slots from other reservations within the same admin project. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.location">Location</a></code> | <code>*string</code> | The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.multiRegionAuxiliary">MultiRegionAuxiliary</a></code> | <code>interface{}</code> | Applicable only for reservations located within one of the BigQuery multi-regions (US or EU). |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_reservation#project BigqueryReservation#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeouts">BigqueryReservationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the reservation. This field must only contain alphanumeric characters or dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_reservation#name BigqueryReservation#name}

---

##### `SlotCapacity`<sup>Required</sup> <a name="SlotCapacity" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.slotCapacity"></a>

```go
SlotCapacity *f64
```

- *Type:* *f64

Minimum slots available to this reservation.

A slot is a unit of computational power in BigQuery, and serves as the
unit of parallelism. Queries using this reservation might use more slots during runtime if ignoreIdleSlots is set to false.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_reservation#slot_capacity BigqueryReservation#slot_capacity}

---

##### `Autoscale`<sup>Optional</sup> <a name="Autoscale" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.autoscale"></a>

```go
Autoscale BigqueryReservationAutoscale
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscale">BigqueryReservationAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_reservation#autoscale BigqueryReservation#autoscale}

---

##### `Concurrency`<sup>Optional</sup> <a name="Concurrency" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.concurrency"></a>

```go
Concurrency *f64
```

- *Type:* *f64

Maximum number of queries that are allowed to run concurrently in this reservation.

This is a soft limit due to asynchronous nature of the system and various optimizations for small queries. Default value is 0 which means that concurrency will be automatically set based on the reservation size.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_reservation#concurrency BigqueryReservation#concurrency}

---

##### `Edition`<sup>Optional</sup> <a name="Edition" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.edition"></a>

```go
Edition *string
```

- *Type:* *string

The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_reservation#edition BigqueryReservation#edition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_reservation#id BigqueryReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreIdleSlots`<sup>Optional</sup> <a name="IgnoreIdleSlots" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.ignoreIdleSlots"></a>

```go
IgnoreIdleSlots interface{}
```

- *Type:* interface{}

If false, any query using this reservation will use idle slots from other reservations within the same admin project.

If true, a query using this reservation will execute with the slot
capacity specified above at most.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_reservation#ignore_idle_slots BigqueryReservation#ignore_idle_slots}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_reservation#location BigqueryReservation#location}

---

##### `MultiRegionAuxiliary`<sup>Optional</sup> <a name="MultiRegionAuxiliary" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.multiRegionAuxiliary"></a>

```go
MultiRegionAuxiliary interface{}
```

- *Type:* interface{}

Applicable only for reservations located within one of the BigQuery multi-regions (US or EU).

If set to true, this reservation is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this reservation is placed in the organization's default region.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_reservation#multi_region_auxiliary BigqueryReservation#multi_region_auxiliary}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_reservation#project BigqueryReservation#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationConfig.property.timeouts"></a>

```go
Timeouts BigqueryReservationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeouts">BigqueryReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_reservation#timeouts BigqueryReservation#timeouts}

---

### BigqueryReservationTimeouts <a name="BigqueryReservationTimeouts" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryreservation"

&bigqueryreservation.BigqueryReservationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_reservation#create BigqueryReservation#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_reservation#delete BigqueryReservation#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_reservation#update BigqueryReservation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_reservation#create BigqueryReservation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_reservation#delete BigqueryReservation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_reservation#update BigqueryReservation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryReservationAutoscaleOutputReference <a name="BigqueryReservationAutoscaleOutputReference" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryreservation"

bigqueryreservation.NewBigqueryReservationAutoscaleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryReservationAutoscaleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.resetMaxSlots">ResetMaxSlots</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxSlots` <a name="ResetMaxSlots" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.resetMaxSlots"></a>

```go
func ResetMaxSlots()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.property.currentSlots">CurrentSlots</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.property.maxSlotsInput">MaxSlotsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.property.maxSlots">MaxSlots</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscale">BigqueryReservationAutoscale</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrentSlots`<sup>Required</sup> <a name="CurrentSlots" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.property.currentSlots"></a>

```go
func CurrentSlots() *f64
```

- *Type:* *f64

---

##### `MaxSlotsInput`<sup>Optional</sup> <a name="MaxSlotsInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.property.maxSlotsInput"></a>

```go
func MaxSlotsInput() *f64
```

- *Type:* *f64

---

##### `MaxSlots`<sup>Required</sup> <a name="MaxSlots" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.property.maxSlots"></a>

```go
func MaxSlots() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscaleOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryReservationAutoscale
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationAutoscale">BigqueryReservationAutoscale</a>

---


### BigqueryReservationTimeoutsOutputReference <a name="BigqueryReservationTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryreservation"

bigqueryreservation.NewBigqueryReservationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryReservationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryReservation.BigqueryReservationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



