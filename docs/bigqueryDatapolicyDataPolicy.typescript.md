# `bigqueryDatapolicyDataPolicy` Submodule <a name="`bigqueryDatapolicyDataPolicy` Submodule" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryDatapolicyDataPolicy <a name="BigqueryDatapolicyDataPolicy" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/bigquery_datapolicy_data_policy google_bigquery_datapolicy_data_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.Initializer"></a>

```typescript
import { bigqueryDatapolicyDataPolicy } from '@cdktf/provider-google'

new bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy(scope: Construct, id: string, config: BigqueryDatapolicyDataPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig">BigqueryDatapolicyDataPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig">BigqueryDatapolicyDataPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.putDataMaskingPolicy">putDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetDataMaskingPolicy">resetDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataMaskingPolicy` <a name="putDataMaskingPolicy" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.putDataMaskingPolicy"></a>

```typescript
public putDataMaskingPolicy(value: BigqueryDatapolicyDataPolicyDataMaskingPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.putDataMaskingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy">BigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: BigqueryDatapolicyDataPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts">BigqueryDatapolicyDataPolicyTimeouts</a>

---

##### `resetDataMaskingPolicy` <a name="resetDataMaskingPolicy" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetDataMaskingPolicy"></a>

```typescript
public resetDataMaskingPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryDatapolicyDataPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isConstruct"></a>

```typescript
import { bigqueryDatapolicyDataPolicy } from '@cdktf/provider-google'

bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isTerraformElement"></a>

```typescript
import { bigqueryDatapolicyDataPolicy } from '@cdktf/provider-google'

bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isTerraformResource"></a>

```typescript
import { bigqueryDatapolicyDataPolicy } from '@cdktf/provider-google'

bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.generateConfigForImport"></a>

```typescript
import { bigqueryDatapolicyDataPolicy } from '@cdktf/provider-google'

bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BigqueryDatapolicyDataPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigqueryDatapolicyDataPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigqueryDatapolicyDataPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/bigquery_datapolicy_data_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryDatapolicyDataPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataMaskingPolicy">dataMaskingPolicy</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference">BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference">BigqueryDatapolicyDataPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataMaskingPolicyInput">dataMaskingPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy">BigqueryDatapolicyDataPolicyDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataPolicyIdInput">dataPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataPolicyTypeInput">dataPolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.policyTagInput">policyTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts">BigqueryDatapolicyDataPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataPolicyId">dataPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataPolicyType">dataPolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.policyTag">policyTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataMaskingPolicy`<sup>Required</sup> <a name="dataMaskingPolicy" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataMaskingPolicy"></a>

```typescript
public readonly dataMaskingPolicy: BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference">BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: BigqueryDatapolicyDataPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference">BigqueryDatapolicyDataPolicyTimeoutsOutputReference</a>

---

##### `dataMaskingPolicyInput`<sup>Optional</sup> <a name="dataMaskingPolicyInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataMaskingPolicyInput"></a>

```typescript
public readonly dataMaskingPolicyInput: BigqueryDatapolicyDataPolicyDataMaskingPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy">BigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

---

##### `dataPolicyIdInput`<sup>Optional</sup> <a name="dataPolicyIdInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataPolicyIdInput"></a>

```typescript
public readonly dataPolicyIdInput: string;
```

- *Type:* string

---

##### `dataPolicyTypeInput`<sup>Optional</sup> <a name="dataPolicyTypeInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataPolicyTypeInput"></a>

```typescript
public readonly dataPolicyTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `policyTagInput`<sup>Optional</sup> <a name="policyTagInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.policyTagInput"></a>

```typescript
public readonly policyTagInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BigqueryDatapolicyDataPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts">BigqueryDatapolicyDataPolicyTimeouts</a>

---

##### `dataPolicyId`<sup>Required</sup> <a name="dataPolicyId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataPolicyId"></a>

```typescript
public readonly dataPolicyId: string;
```

- *Type:* string

---

##### `dataPolicyType`<sup>Required</sup> <a name="dataPolicyType" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.dataPolicyType"></a>

```typescript
public readonly dataPolicyType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `policyTag`<sup>Required</sup> <a name="policyTag" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.policyTag"></a>

```typescript
public readonly policyTag: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryDatapolicyDataPolicyConfig <a name="BigqueryDatapolicyDataPolicyConfig" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.Initializer"></a>

```typescript
import { bigqueryDatapolicyDataPolicy } from '@cdktf/provider-google'

const bigqueryDatapolicyDataPolicyConfig: bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.dataPolicyId">dataPolicyId</a></code> | <code>string</code> | User-assigned (human readable) ID of the data policy that needs to be unique within a project. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.dataPolicyType">dataPolicyType</a></code> | <code>string</code> | The enrollment level of the service. Possible values: ["COLUMN_LEVEL_SECURITY_POLICY", "DATA_MASKING_POLICY"]. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.location">location</a></code> | <code>string</code> | The name of the location of the data policy. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.policyTag">policyTag</a></code> | <code>string</code> | Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.dataMaskingPolicy">dataMaskingPolicy</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy">BigqueryDatapolicyDataPolicyDataMaskingPolicy</a></code> | data_masking_policy block. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/bigquery_datapolicy_data_policy#id BigqueryDatapolicyDataPolicy#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/bigquery_datapolicy_data_policy#project BigqueryDatapolicyDataPolicy#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts">BigqueryDatapolicyDataPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataPolicyId`<sup>Required</sup> <a name="dataPolicyId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.dataPolicyId"></a>

```typescript
public readonly dataPolicyId: string;
```

- *Type:* string

User-assigned (human readable) ID of the data policy that needs to be unique within a project.

Used as {dataPolicyId} in part of the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/bigquery_datapolicy_data_policy#data_policy_id BigqueryDatapolicyDataPolicy#data_policy_id}

---

##### `dataPolicyType`<sup>Required</sup> <a name="dataPolicyType" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.dataPolicyType"></a>

```typescript
public readonly dataPolicyType: string;
```

- *Type:* string

The enrollment level of the service. Possible values: ["COLUMN_LEVEL_SECURITY_POLICY", "DATA_MASKING_POLICY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/bigquery_datapolicy_data_policy#data_policy_type BigqueryDatapolicyDataPolicy#data_policy_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The name of the location of the data policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/bigquery_datapolicy_data_policy#location BigqueryDatapolicyDataPolicy#location}

---

##### `policyTag`<sup>Required</sup> <a name="policyTag" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.policyTag"></a>

```typescript
public readonly policyTag: string;
```

- *Type:* string

Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/bigquery_datapolicy_data_policy#policy_tag BigqueryDatapolicyDataPolicy#policy_tag}

---

##### `dataMaskingPolicy`<sup>Optional</sup> <a name="dataMaskingPolicy" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.dataMaskingPolicy"></a>

```typescript
public readonly dataMaskingPolicy: BigqueryDatapolicyDataPolicyDataMaskingPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy">BigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

data_masking_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/bigquery_datapolicy_data_policy#data_masking_policy BigqueryDatapolicyDataPolicy#data_masking_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/bigquery_datapolicy_data_policy#id BigqueryDatapolicyDataPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/bigquery_datapolicy_data_policy#project BigqueryDatapolicyDataPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BigqueryDatapolicyDataPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts">BigqueryDatapolicyDataPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/bigquery_datapolicy_data_policy#timeouts BigqueryDatapolicyDataPolicy#timeouts}

---

### BigqueryDatapolicyDataPolicyDataMaskingPolicy <a name="BigqueryDatapolicyDataPolicyDataMaskingPolicy" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy.Initializer"></a>

```typescript
import { bigqueryDatapolicyDataPolicy } from '@cdktf/provider-google'

const bigqueryDatapolicyDataPolicyDataMaskingPolicy: bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy.property.predefinedExpression">predefinedExpression</a></code> | <code>string</code> | The available masking rules. Learn more here: https://cloud.google.com/bigquery/docs/column-data-masking-intro#masking_options. Possible values: ["SHA256", "ALWAYS_NULL", "DEFAULT_MASKING_VALUE", "LAST_FOUR_CHARACTERS", "FIRST_FOUR_CHARACTERS", "EMAIL_MASK", "DATE_YEAR_MASK"]. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy.property.routine">routine</a></code> | <code>string</code> | The name of the BigQuery routine that contains the custom masking routine, in the format of projects/{projectNumber}/datasets/{dataset_id}/routines/{routine_id}. |

---

##### `predefinedExpression`<sup>Optional</sup> <a name="predefinedExpression" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy.property.predefinedExpression"></a>

```typescript
public readonly predefinedExpression: string;
```

- *Type:* string

The available masking rules. Learn more here: https://cloud.google.com/bigquery/docs/column-data-masking-intro#masking_options. Possible values: ["SHA256", "ALWAYS_NULL", "DEFAULT_MASKING_VALUE", "LAST_FOUR_CHARACTERS", "FIRST_FOUR_CHARACTERS", "EMAIL_MASK", "DATE_YEAR_MASK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/bigquery_datapolicy_data_policy#predefined_expression BigqueryDatapolicyDataPolicy#predefined_expression}

---

##### `routine`<sup>Optional</sup> <a name="routine" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy.property.routine"></a>

```typescript
public readonly routine: string;
```

- *Type:* string

The name of the BigQuery routine that contains the custom masking routine, in the format of projects/{projectNumber}/datasets/{dataset_id}/routines/{routine_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/bigquery_datapolicy_data_policy#routine BigqueryDatapolicyDataPolicy#routine}

---

### BigqueryDatapolicyDataPolicyTimeouts <a name="BigqueryDatapolicyDataPolicyTimeouts" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts.Initializer"></a>

```typescript
import { bigqueryDatapolicyDataPolicy } from '@cdktf/provider-google'

const bigqueryDatapolicyDataPolicyTimeouts: bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/bigquery_datapolicy_data_policy#create BigqueryDatapolicyDataPolicy#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/bigquery_datapolicy_data_policy#delete BigqueryDatapolicyDataPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/bigquery_datapolicy_data_policy#update BigqueryDatapolicyDataPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/bigquery_datapolicy_data_policy#create BigqueryDatapolicyDataPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/bigquery_datapolicy_data_policy#delete BigqueryDatapolicyDataPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/bigquery_datapolicy_data_policy#update BigqueryDatapolicyDataPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference <a name="BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer"></a>

```typescript
import { bigqueryDatapolicyDataPolicy } from '@cdktf/provider-google'

new bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resetPredefinedExpression">resetPredefinedExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resetRoutine">resetRoutine</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPredefinedExpression` <a name="resetPredefinedExpression" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resetPredefinedExpression"></a>

```typescript
public resetPredefinedExpression(): void
```

##### `resetRoutine` <a name="resetRoutine" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resetRoutine"></a>

```typescript
public resetRoutine(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpressionInput">predefinedExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.routineInput">routineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpression">predefinedExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.routine">routine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy">BigqueryDatapolicyDataPolicyDataMaskingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `predefinedExpressionInput`<sup>Optional</sup> <a name="predefinedExpressionInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpressionInput"></a>

```typescript
public readonly predefinedExpressionInput: string;
```

- *Type:* string

---

##### `routineInput`<sup>Optional</sup> <a name="routineInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.routineInput"></a>

```typescript
public readonly routineInput: string;
```

- *Type:* string

---

##### `predefinedExpression`<sup>Required</sup> <a name="predefinedExpression" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpression"></a>

```typescript
public readonly predefinedExpression: string;
```

- *Type:* string

---

##### `routine`<sup>Required</sup> <a name="routine" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.routine"></a>

```typescript
public readonly routine: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryDatapolicyDataPolicyDataMaskingPolicy;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyDataMaskingPolicy">BigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

---


### BigqueryDatapolicyDataPolicyTimeoutsOutputReference <a name="BigqueryDatapolicyDataPolicyTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { bigqueryDatapolicyDataPolicy } from '@cdktf/provider-google'

new bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts">BigqueryDatapolicyDataPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BigqueryDatapolicyDataPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicy.BigqueryDatapolicyDataPolicyTimeouts">BigqueryDatapolicyDataPolicyTimeouts</a>

---



