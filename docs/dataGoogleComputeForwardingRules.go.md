# `dataGoogleComputeForwardingRules` Submodule <a name="`dataGoogleComputeForwardingRules` Submodule" id="@cdktf/provider-google.dataGoogleComputeForwardingRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeForwardingRules <a name="DataGoogleComputeForwardingRules" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/compute_forwarding_rules google_compute_forwarding_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglecomputeforwardingrules"

datagooglecomputeforwardingrules.NewDataGoogleComputeForwardingRules(scope Construct, id *string, config DataGoogleComputeForwardingRulesConfig) DataGoogleComputeForwardingRules
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig">DataGoogleComputeForwardingRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig">DataGoogleComputeForwardingRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeForwardingRules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglecomputeforwardingrules"

datagooglecomputeforwardingrules.DataGoogleComputeForwardingRules_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglecomputeforwardingrules"

datagooglecomputeforwardingrules.DataGoogleComputeForwardingRules_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglecomputeforwardingrules"

datagooglecomputeforwardingrules.DataGoogleComputeForwardingRules_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglecomputeforwardingrules"

datagooglecomputeforwardingrules.DataGoogleComputeForwardingRules_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleComputeForwardingRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleComputeForwardingRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleComputeForwardingRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/compute_forwarding_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeForwardingRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList">DataGoogleComputeForwardingRulesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.rules"></a>

```go
func Rules() DataGoogleComputeForwardingRulesRulesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList">DataGoogleComputeForwardingRulesRulesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRules.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeForwardingRulesConfig <a name="DataGoogleComputeForwardingRulesConfig" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglecomputeforwardingrules"

&datagooglecomputeforwardingrules.DataGoogleComputeForwardingRulesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Project: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/compute_forwarding_rules#id DataGoogleComputeForwardingRules#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/compute_forwarding_rules#project DataGoogleComputeForwardingRules#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/compute_forwarding_rules#region DataGoogleComputeForwardingRules#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/compute_forwarding_rules#id DataGoogleComputeForwardingRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/compute_forwarding_rules#project DataGoogleComputeForwardingRules#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/compute_forwarding_rules#region DataGoogleComputeForwardingRules#region}.

---

### DataGoogleComputeForwardingRulesRules <a name="DataGoogleComputeForwardingRulesRules" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglecomputeforwardingrules"

&datagooglecomputeforwardingrules.DataGoogleComputeForwardingRulesRules {

}
```


### DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrations <a name="DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrations" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglecomputeforwardingrules"

&datagooglecomputeforwardingrules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrations {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeForwardingRulesRulesList <a name="DataGoogleComputeForwardingRulesRulesList" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglecomputeforwardingrules"

datagooglecomputeforwardingrules.NewDataGoogleComputeForwardingRulesRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeForwardingRulesRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.get"></a>

```go
func Get(index *f64) DataGoogleComputeForwardingRulesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeForwardingRulesRulesOutputReference <a name="DataGoogleComputeForwardingRulesRulesOutputReference" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglecomputeforwardingrules"

datagooglecomputeforwardingrules.NewDataGoogleComputeForwardingRulesRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeForwardingRulesRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.allowGlobalAccess">AllowGlobalAccess</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.allowPscGlobalAccess">AllowPscGlobalAccess</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.allPorts">AllPorts</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.backendService">BackendService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.baseForwardingRule">BaseForwardingRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.forwardingRuleId">ForwardingRuleId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.ipCollection">IpCollection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.ipVersion">IpVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.isMirroringCollector">IsMirroringCollector</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.labelFingerprint">LabelFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.networkTier">NetworkTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.noAutomateDnsZone">NoAutomateDnsZone</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.portRange">PortRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.ports">Ports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.pscConnectionId">PscConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.pscConnectionStatus">PscConnectionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.recreateClosedPsc">RecreateClosedPsc</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.serviceDirectoryRegistrations">ServiceDirectoryRegistrations</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList">DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.serviceLabel">ServiceLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.sourceIpRanges">SourceIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRules">DataGoogleComputeForwardingRulesRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowGlobalAccess`<sup>Required</sup> <a name="AllowGlobalAccess" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.allowGlobalAccess"></a>

```go
func AllowGlobalAccess() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AllowPscGlobalAccess`<sup>Required</sup> <a name="AllowPscGlobalAccess" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.allowPscGlobalAccess"></a>

```go
func AllowPscGlobalAccess() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AllPorts`<sup>Required</sup> <a name="AllPorts" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.allPorts"></a>

```go
func AllPorts() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `BackendService`<sup>Required</sup> <a name="BackendService" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.backendService"></a>

```go
func BackendService() *string
```

- *Type:* *string

---

##### `BaseForwardingRule`<sup>Required</sup> <a name="BaseForwardingRule" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.baseForwardingRule"></a>

```go
func BaseForwardingRule() *string
```

- *Type:* *string

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ForwardingRuleId`<sup>Required</sup> <a name="ForwardingRuleId" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.forwardingRuleId"></a>

```go
func ForwardingRuleId() *f64
```

- *Type:* *f64

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `IpCollection`<sup>Required</sup> <a name="IpCollection" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.ipCollection"></a>

```go
func IpCollection() *string
```

- *Type:* *string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.ipProtocol"></a>

```go
func IpProtocol() *string
```

- *Type:* *string

---

##### `IpVersion`<sup>Required</sup> <a name="IpVersion" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.ipVersion"></a>

```go
func IpVersion() *string
```

- *Type:* *string

---

##### `IsMirroringCollector`<sup>Required</sup> <a name="IsMirroringCollector" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.isMirroringCollector"></a>

```go
func IsMirroringCollector() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.labelFingerprint"></a>

```go
func LabelFingerprint() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `LoadBalancingScheme`<sup>Required</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.loadBalancingScheme"></a>

```go
func LoadBalancingScheme() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.networkTier"></a>

```go
func NetworkTier() *string
```

- *Type:* *string

---

##### `NoAutomateDnsZone`<sup>Required</sup> <a name="NoAutomateDnsZone" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.noAutomateDnsZone"></a>

```go
func NoAutomateDnsZone() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.portRange"></a>

```go
func PortRange() *string
```

- *Type:* *string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.ports"></a>

```go
func Ports() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.pscConnectionId"></a>

```go
func PscConnectionId() *string
```

- *Type:* *string

---

##### `PscConnectionStatus`<sup>Required</sup> <a name="PscConnectionStatus" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.pscConnectionStatus"></a>

```go
func PscConnectionStatus() *string
```

- *Type:* *string

---

##### `RecreateClosedPsc`<sup>Required</sup> <a name="RecreateClosedPsc" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.recreateClosedPsc"></a>

```go
func RecreateClosedPsc() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `ServiceDirectoryRegistrations`<sup>Required</sup> <a name="ServiceDirectoryRegistrations" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.serviceDirectoryRegistrations"></a>

```go
func ServiceDirectoryRegistrations() DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList">DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList</a>

---

##### `ServiceLabel`<sup>Required</sup> <a name="ServiceLabel" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.serviceLabel"></a>

```go
func ServiceLabel() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `SourceIpRanges`<sup>Required</sup> <a name="SourceIpRanges" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.sourceIpRanges"></a>

```go
func SourceIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeForwardingRulesRules
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRules">DataGoogleComputeForwardingRulesRules</a>

---


### DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList <a name="DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglecomputeforwardingrules"

datagooglecomputeforwardingrules.NewDataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.get"></a>

```go
func Get(index *f64) DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference <a name="DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglecomputeforwardingrules"

datagooglecomputeforwardingrules.NewDataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrations">DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrations
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeForwardingRules.DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrations">DataGoogleComputeForwardingRulesRulesServiceDirectoryRegistrations</a>

---



