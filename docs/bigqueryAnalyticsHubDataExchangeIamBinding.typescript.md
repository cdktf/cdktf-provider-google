# `google_bigquery_analytics_hub_data_exchange_iam_binding`

Refer to the Terraform Registory for docs: [`google_bigquery_analytics_hub_data_exchange_iam_binding`](https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/bigquery_analytics_hub_data_exchange_iam_binding).

# `bigqueryAnalyticsHubDataExchangeIamBinding` Submodule <a name="`bigqueryAnalyticsHubDataExchangeIamBinding` Submodule" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryAnalyticsHubDataExchangeIamBinding <a name="BigqueryAnalyticsHubDataExchangeIamBinding" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/bigquery_analytics_hub_data_exchange_iam_binding google_bigquery_analytics_hub_data_exchange_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubDataExchangeIamBinding } from '@cdktf/provider-google'

new bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding(scope: Construct, id: string, config: BigqueryAnalyticsHubDataExchangeIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig">BigqueryAnalyticsHubDataExchangeIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig">BigqueryAnalyticsHubDataExchangeIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.putCondition"></a>

```typescript
public putCondition(value: BigqueryAnalyticsHubDataExchangeIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition">BigqueryAnalyticsHubDataExchangeIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.isConstruct"></a>

```typescript
import { bigqueryAnalyticsHubDataExchangeIamBinding } from '@cdktf/provider-google'

bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.isTerraformElement"></a>

```typescript
import { bigqueryAnalyticsHubDataExchangeIamBinding } from '@cdktf/provider-google'

bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.isTerraformResource"></a>

```typescript
import { bigqueryAnalyticsHubDataExchangeIamBinding } from '@cdktf/provider-google'

bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference">BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition">BigqueryAnalyticsHubDataExchangeIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.dataExchangeIdInput">dataExchangeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.dataExchangeId">dataExchangeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.condition"></a>

```typescript
public readonly condition: BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference">BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: BigqueryAnalyticsHubDataExchangeIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition">BigqueryAnalyticsHubDataExchangeIamBindingCondition</a>

---

##### `dataExchangeIdInput`<sup>Optional</sup> <a name="dataExchangeIdInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.dataExchangeIdInput"></a>

```typescript
public readonly dataExchangeIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.dataExchangeId"></a>

```typescript
public readonly dataExchangeId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryAnalyticsHubDataExchangeIamBindingCondition <a name="BigqueryAnalyticsHubDataExchangeIamBindingCondition" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubDataExchangeIamBinding } from '@cdktf/provider-google'

const bigqueryAnalyticsHubDataExchangeIamBindingCondition: bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/bigquery_analytics_hub_data_exchange_iam_binding#expression BigqueryAnalyticsHubDataExchangeIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/bigquery_analytics_hub_data_exchange_iam_binding#title BigqueryAnalyticsHubDataExchangeIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/bigquery_analytics_hub_data_exchange_iam_binding#description BigqueryAnalyticsHubDataExchangeIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/bigquery_analytics_hub_data_exchange_iam_binding#expression BigqueryAnalyticsHubDataExchangeIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/bigquery_analytics_hub_data_exchange_iam_binding#title BigqueryAnalyticsHubDataExchangeIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/bigquery_analytics_hub_data_exchange_iam_binding#description BigqueryAnalyticsHubDataExchangeIamBinding#description}.

---

### BigqueryAnalyticsHubDataExchangeIamBindingConfig <a name="BigqueryAnalyticsHubDataExchangeIamBindingConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubDataExchangeIamBinding } from '@cdktf/provider-google'

const bigqueryAnalyticsHubDataExchangeIamBindingConfig: bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.dataExchangeId">dataExchangeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/bigquery_analytics_hub_data_exchange_iam_binding#data_exchange_id BigqueryAnalyticsHubDataExchangeIamBinding#data_exchange_id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/bigquery_analytics_hub_data_exchange_iam_binding#members BigqueryAnalyticsHubDataExchangeIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/bigquery_analytics_hub_data_exchange_iam_binding#role BigqueryAnalyticsHubDataExchangeIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition">BigqueryAnalyticsHubDataExchangeIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/bigquery_analytics_hub_data_exchange_iam_binding#id BigqueryAnalyticsHubDataExchangeIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/bigquery_analytics_hub_data_exchange_iam_binding#location BigqueryAnalyticsHubDataExchangeIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/bigquery_analytics_hub_data_exchange_iam_binding#project BigqueryAnalyticsHubDataExchangeIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.dataExchangeId"></a>

```typescript
public readonly dataExchangeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/bigquery_analytics_hub_data_exchange_iam_binding#data_exchange_id BigqueryAnalyticsHubDataExchangeIamBinding#data_exchange_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/bigquery_analytics_hub_data_exchange_iam_binding#members BigqueryAnalyticsHubDataExchangeIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/bigquery_analytics_hub_data_exchange_iam_binding#role BigqueryAnalyticsHubDataExchangeIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: BigqueryAnalyticsHubDataExchangeIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition">BigqueryAnalyticsHubDataExchangeIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/bigquery_analytics_hub_data_exchange_iam_binding#condition BigqueryAnalyticsHubDataExchangeIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/bigquery_analytics_hub_data_exchange_iam_binding#id BigqueryAnalyticsHubDataExchangeIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/bigquery_analytics_hub_data_exchange_iam_binding#location BigqueryAnalyticsHubDataExchangeIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/bigquery_analytics_hub_data_exchange_iam_binding#project BigqueryAnalyticsHubDataExchangeIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference <a name="BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubDataExchangeIamBinding } from '@cdktf/provider-google'

new bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition">BigqueryAnalyticsHubDataExchangeIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryAnalyticsHubDataExchangeIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition">BigqueryAnalyticsHubDataExchangeIamBindingCondition</a>

---



