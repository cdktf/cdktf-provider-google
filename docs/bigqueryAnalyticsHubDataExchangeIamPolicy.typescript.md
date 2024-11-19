# `bigqueryAnalyticsHubDataExchangeIamPolicy` Submodule <a name="`bigqueryAnalyticsHubDataExchangeIamPolicy` Submodule" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryAnalyticsHubDataExchangeIamPolicy <a name="BigqueryAnalyticsHubDataExchangeIamPolicy" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_policy google_bigquery_analytics_hub_data_exchange_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubDataExchangeIamPolicy } from '@cdktf/provider-google'

new bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy(scope: Construct, id: string, config: BigqueryAnalyticsHubDataExchangeIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig">BigqueryAnalyticsHubDataExchangeIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig">BigqueryAnalyticsHubDataExchangeIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryAnalyticsHubDataExchangeIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.isConstruct"></a>

```typescript
import { bigqueryAnalyticsHubDataExchangeIamPolicy } from '@cdktf/provider-google'

bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.isTerraformElement"></a>

```typescript
import { bigqueryAnalyticsHubDataExchangeIamPolicy } from '@cdktf/provider-google'

bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.isTerraformResource"></a>

```typescript
import { bigqueryAnalyticsHubDataExchangeIamPolicy } from '@cdktf/provider-google'

bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.generateConfigForImport"></a>

```typescript
import { bigqueryAnalyticsHubDataExchangeIamPolicy } from '@cdktf/provider-google'

bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BigqueryAnalyticsHubDataExchangeIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigqueryAnalyticsHubDataExchangeIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigqueryAnalyticsHubDataExchangeIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryAnalyticsHubDataExchangeIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.dataExchangeIdInput">dataExchangeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.policyDataInput">policyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.dataExchangeId">dataExchangeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `dataExchangeIdInput`<sup>Optional</sup> <a name="dataExchangeIdInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.dataExchangeIdInput"></a>

```typescript
public readonly dataExchangeIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `policyDataInput`<sup>Optional</sup> <a name="policyDataInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.policyDataInput"></a>

```typescript
public readonly policyDataInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.dataExchangeId"></a>

```typescript
public readonly dataExchangeId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryAnalyticsHubDataExchangeIamPolicyConfig <a name="BigqueryAnalyticsHubDataExchangeIamPolicyConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubDataExchangeIamPolicy } from '@cdktf/provider-google'

const bigqueryAnalyticsHubDataExchangeIamPolicyConfig: bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.dataExchangeId">dataExchangeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_policy#data_exchange_id BigqueryAnalyticsHubDataExchangeIamPolicy#data_exchange_id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.policyData">policyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_policy#policy_data BigqueryAnalyticsHubDataExchangeIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_policy#id BigqueryAnalyticsHubDataExchangeIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_policy#location BigqueryAnalyticsHubDataExchangeIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_policy#project BigqueryAnalyticsHubDataExchangeIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.dataExchangeId"></a>

```typescript
public readonly dataExchangeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_policy#data_exchange_id BigqueryAnalyticsHubDataExchangeIamPolicy#data_exchange_id}.

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_policy#policy_data BigqueryAnalyticsHubDataExchangeIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_policy#id BigqueryAnalyticsHubDataExchangeIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_policy#location BigqueryAnalyticsHubDataExchangeIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamPolicy.BigqueryAnalyticsHubDataExchangeIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/resources/bigquery_analytics_hub_data_exchange_iam_policy#project BigqueryAnalyticsHubDataExchangeIamPolicy#project}.

---



