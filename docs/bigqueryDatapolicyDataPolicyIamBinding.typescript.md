# `bigqueryDatapolicyDataPolicyIamBinding` Submodule <a name="`bigqueryDatapolicyDataPolicyIamBinding` Submodule" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryDatapolicyDataPolicyIamBinding <a name="BigqueryDatapolicyDataPolicyIamBinding" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/bigquery_datapolicy_data_policy_iam_binding google_bigquery_datapolicy_data_policy_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.Initializer"></a>

```typescript
import { bigqueryDatapolicyDataPolicyIamBinding } from '@cdktf/provider-google'

new bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding(scope: Construct, id: string, config: BigqueryDatapolicyDataPolicyIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig">BigqueryDatapolicyDataPolicyIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig">BigqueryDatapolicyDataPolicyIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.putCondition"></a>

```typescript
public putCondition(value: BigqueryDatapolicyDataPolicyIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition">BigqueryDatapolicyDataPolicyIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryDatapolicyDataPolicyIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.isConstruct"></a>

```typescript
import { bigqueryDatapolicyDataPolicyIamBinding } from '@cdktf/provider-google'

bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.isTerraformElement"></a>

```typescript
import { bigqueryDatapolicyDataPolicyIamBinding } from '@cdktf/provider-google'

bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.isTerraformResource"></a>

```typescript
import { bigqueryDatapolicyDataPolicyIamBinding } from '@cdktf/provider-google'

bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.generateConfigForImport"></a>

```typescript
import { bigqueryDatapolicyDataPolicyIamBinding } from '@cdktf/provider-google'

bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BigqueryDatapolicyDataPolicyIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigqueryDatapolicyDataPolicyIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigqueryDatapolicyDataPolicyIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/bigquery_datapolicy_data_policy_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryDatapolicyDataPolicyIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference">BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition">BigqueryDatapolicyDataPolicyIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.dataPolicyIdInput">dataPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.dataPolicyId">dataPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.condition"></a>

```typescript
public readonly condition: BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference">BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: BigqueryDatapolicyDataPolicyIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition">BigqueryDatapolicyDataPolicyIamBindingCondition</a>

---

##### `dataPolicyIdInput`<sup>Optional</sup> <a name="dataPolicyIdInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.dataPolicyIdInput"></a>

```typescript
public readonly dataPolicyIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `dataPolicyId`<sup>Required</sup> <a name="dataPolicyId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.dataPolicyId"></a>

```typescript
public readonly dataPolicyId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryDatapolicyDataPolicyIamBindingCondition <a name="BigqueryDatapolicyDataPolicyIamBindingCondition" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition.Initializer"></a>

```typescript
import { bigqueryDatapolicyDataPolicyIamBinding } from '@cdktf/provider-google'

const bigqueryDatapolicyDataPolicyIamBindingCondition: bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/bigquery_datapolicy_data_policy_iam_binding#expression BigqueryDatapolicyDataPolicyIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/bigquery_datapolicy_data_policy_iam_binding#title BigqueryDatapolicyDataPolicyIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/bigquery_datapolicy_data_policy_iam_binding#description BigqueryDatapolicyDataPolicyIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/bigquery_datapolicy_data_policy_iam_binding#expression BigqueryDatapolicyDataPolicyIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/bigquery_datapolicy_data_policy_iam_binding#title BigqueryDatapolicyDataPolicyIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/bigquery_datapolicy_data_policy_iam_binding#description BigqueryDatapolicyDataPolicyIamBinding#description}.

---

### BigqueryDatapolicyDataPolicyIamBindingConfig <a name="BigqueryDatapolicyDataPolicyIamBindingConfig" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.Initializer"></a>

```typescript
import { bigqueryDatapolicyDataPolicyIamBinding } from '@cdktf/provider-google'

const bigqueryDatapolicyDataPolicyIamBindingConfig: bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.dataPolicyId">dataPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/bigquery_datapolicy_data_policy_iam_binding#data_policy_id BigqueryDatapolicyDataPolicyIamBinding#data_policy_id}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/bigquery_datapolicy_data_policy_iam_binding#members BigqueryDatapolicyDataPolicyIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/bigquery_datapolicy_data_policy_iam_binding#role BigqueryDatapolicyDataPolicyIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition">BigqueryDatapolicyDataPolicyIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/bigquery_datapolicy_data_policy_iam_binding#id BigqueryDatapolicyDataPolicyIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/bigquery_datapolicy_data_policy_iam_binding#location BigqueryDatapolicyDataPolicyIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/bigquery_datapolicy_data_policy_iam_binding#project BigqueryDatapolicyDataPolicyIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataPolicyId`<sup>Required</sup> <a name="dataPolicyId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.dataPolicyId"></a>

```typescript
public readonly dataPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/bigquery_datapolicy_data_policy_iam_binding#data_policy_id BigqueryDatapolicyDataPolicyIamBinding#data_policy_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/bigquery_datapolicy_data_policy_iam_binding#members BigqueryDatapolicyDataPolicyIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/bigquery_datapolicy_data_policy_iam_binding#role BigqueryDatapolicyDataPolicyIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: BigqueryDatapolicyDataPolicyIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition">BigqueryDatapolicyDataPolicyIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/bigquery_datapolicy_data_policy_iam_binding#condition BigqueryDatapolicyDataPolicyIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/bigquery_datapolicy_data_policy_iam_binding#id BigqueryDatapolicyDataPolicyIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/bigquery_datapolicy_data_policy_iam_binding#location BigqueryDatapolicyDataPolicyIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/bigquery_datapolicy_data_policy_iam_binding#project BigqueryDatapolicyDataPolicyIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference <a name="BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { bigqueryDatapolicyDataPolicyIamBinding } from '@cdktf/provider-google'

new bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition">BigqueryDatapolicyDataPolicyIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryDatapolicyDataPolicyIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamBinding.BigqueryDatapolicyDataPolicyIamBindingCondition">BigqueryDatapolicyDataPolicyIamBindingCondition</a>

---



