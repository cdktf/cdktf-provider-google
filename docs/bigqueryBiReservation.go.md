# `google_bigquery_bi_reservation`

Refer to the Terraform Registory for docs: [`google_bigquery_bi_reservation`](https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/bigquery_bi_reservation).

# `bigqueryBiReservation` Submodule <a name="`bigqueryBiReservation` Submodule" id="@cdktf/provider-google.bigqueryBiReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryBiReservation <a name="BigqueryBiReservation" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/bigquery_bi_reservation google_bigquery_bi_reservation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigquerybireservation"

bigquerybireservation.NewBigqueryBiReservation(scope Construct, id *string, config BigqueryBiReservationConfig) BigqueryBiReservation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig">BigqueryBiReservationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig">BigqueryBiReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.putPreferredTables">PutPreferredTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetPreferredTables">ResetPreferredTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPreferredTables` <a name="PutPreferredTables" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.putPreferredTables"></a>

```go
func PutPreferredTables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.putPreferredTables.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.putTimeouts"></a>

```go
func PutTimeouts(value BigqueryBiReservationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts">BigqueryBiReservationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetId"></a>

```go
func ResetId()
```

##### `ResetPreferredTables` <a name="ResetPreferredTables" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetPreferredTables"></a>

```go
func ResetPreferredTables()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetSize"></a>

```go
func ResetSize()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigquerybireservation"

bigquerybireservation.BigqueryBiReservation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigquerybireservation"

bigquerybireservation.BigqueryBiReservation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigquerybireservation"

bigquerybireservation.BigqueryBiReservation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.preferredTables">PreferredTables</a></code> | <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList">BigqueryBiReservationPreferredTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference">BigqueryBiReservationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.preferredTablesInput">PreferredTablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.size">Size</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PreferredTables`<sup>Required</sup> <a name="PreferredTables" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.preferredTables"></a>

```go
func PreferredTables() BigqueryBiReservationPreferredTablesList
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList">BigqueryBiReservationPreferredTablesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.timeouts"></a>

```go
func Timeouts() BigqueryBiReservationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference">BigqueryBiReservationTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PreferredTablesInput`<sup>Optional</sup> <a name="PreferredTablesInput" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.preferredTablesInput"></a>

```go
func PreferredTablesInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryBiReservationConfig <a name="BigqueryBiReservationConfig" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigquerybireservation"

&bigquerybireservation.BigqueryBiReservationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Id: *string,
	PreferredTables: interface{},
	Project: *string,
	Size: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.bigqueryBiReservation.BigqueryBiReservationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.location">Location</a></code> | <code>*string</code> | LOCATION_DESCRIPTION. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/bigquery_bi_reservation#id BigqueryBiReservation#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.preferredTables">PreferredTables</a></code> | <code>interface{}</code> | preferred_tables block. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/bigquery_bi_reservation#project BigqueryBiReservation#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.size">Size</a></code> | <code>*f64</code> | Size of a reservation, in bytes. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts">BigqueryBiReservationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

LOCATION_DESCRIPTION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/bigquery_bi_reservation#location BigqueryBiReservation#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/bigquery_bi_reservation#id BigqueryBiReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PreferredTables`<sup>Optional</sup> <a name="PreferredTables" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.preferredTables"></a>

```go
PreferredTables interface{}
```

- *Type:* interface{}

preferred_tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/bigquery_bi_reservation#preferred_tables BigqueryBiReservation#preferred_tables}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/bigquery_bi_reservation#project BigqueryBiReservation#project}.

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Size of a reservation, in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/bigquery_bi_reservation#size BigqueryBiReservation#size}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.timeouts"></a>

```go
Timeouts BigqueryBiReservationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts">BigqueryBiReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/bigquery_bi_reservation#timeouts BigqueryBiReservation#timeouts}

---

### BigqueryBiReservationPreferredTables <a name="BigqueryBiReservationPreferredTables" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigquerybireservation"

&bigquerybireservation.BigqueryBiReservationPreferredTables {
	DatasetId: *string,
	ProjectId: *string,
	TableId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables.property.datasetId">DatasetId</a></code> | <code>*string</code> | The ID of the dataset in the above project. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables.property.projectId">ProjectId</a></code> | <code>*string</code> | The assigned project ID of the project. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables.property.tableId">TableId</a></code> | <code>*string</code> | The ID of the table in the above dataset. |

---

##### `DatasetId`<sup>Optional</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

The ID of the dataset in the above project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/bigquery_bi_reservation#dataset_id BigqueryBiReservation#dataset_id}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The assigned project ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/bigquery_bi_reservation#project_id BigqueryBiReservation#project_id}

---

##### `TableId`<sup>Optional</sup> <a name="TableId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables.property.tableId"></a>

```go
TableId *string
```

- *Type:* *string

The ID of the table in the above dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/bigquery_bi_reservation#table_id BigqueryBiReservation#table_id}

---

### BigqueryBiReservationTimeouts <a name="BigqueryBiReservationTimeouts" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigquerybireservation"

&bigquerybireservation.BigqueryBiReservationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/bigquery_bi_reservation#create BigqueryBiReservation#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/bigquery_bi_reservation#delete BigqueryBiReservation#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/bigquery_bi_reservation#update BigqueryBiReservation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/bigquery_bi_reservation#create BigqueryBiReservation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/bigquery_bi_reservation#delete BigqueryBiReservation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/bigquery_bi_reservation#update BigqueryBiReservation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryBiReservationPreferredTablesList <a name="BigqueryBiReservationPreferredTablesList" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigquerybireservation"

bigquerybireservation.NewBigqueryBiReservationPreferredTablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BigqueryBiReservationPreferredTablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.get"></a>

```go
func Get(index *f64) BigqueryBiReservationPreferredTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BigqueryBiReservationPreferredTablesOutputReference <a name="BigqueryBiReservationPreferredTablesOutputReference" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigquerybireservation"

bigquerybireservation.NewBigqueryBiReservationPreferredTablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BigqueryBiReservationPreferredTablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resetDatasetId">ResetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resetTableId">ResetTableId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetId` <a name="ResetDatasetId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resetDatasetId"></a>

```go
func ResetDatasetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetTableId` <a name="ResetTableId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resetTableId"></a>

```go
func ResetTableId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.tableIdInput">TableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.tableId">TableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TableIdInput`<sup>Optional</sup> <a name="TableIdInput" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.tableIdInput"></a>

```go
func TableIdInput() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.tableId"></a>

```go
func TableId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BigqueryBiReservationTimeoutsOutputReference <a name="BigqueryBiReservationTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigquerybireservation"

bigquerybireservation.NewBigqueryBiReservationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryBiReservationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



