# `bigqueryCapacityCommitment` Submodule <a name="`bigqueryCapacityCommitment` Submodule" id="@cdktf/provider-google.bigqueryCapacityCommitment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryCapacityCommitment <a name="BigqueryCapacityCommitment" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment google_bigquery_capacity_commitment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer"></a>

```typescript
import { bigqueryCapacityCommitment } from '@cdktf/provider-google'

new bigqueryCapacityCommitment.BigqueryCapacityCommitment(scope: Construct, id: string, config: BigqueryCapacityCommitmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig">BigqueryCapacityCommitmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig">BigqueryCapacityCommitmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetCapacityCommitmentId">resetCapacityCommitmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetEdition">resetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetEnforceSingleAdminProjectPerOrg">resetEnforceSingleAdminProjectPerOrg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetRenewalPlan">resetRenewalPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.putTimeouts"></a>

```typescript
public putTimeouts(value: BigqueryCapacityCommitmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a>

---

##### `resetCapacityCommitmentId` <a name="resetCapacityCommitmentId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetCapacityCommitmentId"></a>

```typescript
public resetCapacityCommitmentId(): void
```

##### `resetEdition` <a name="resetEdition" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetEdition"></a>

```typescript
public resetEdition(): void
```

##### `resetEnforceSingleAdminProjectPerOrg` <a name="resetEnforceSingleAdminProjectPerOrg" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetEnforceSingleAdminProjectPerOrg"></a>

```typescript
public resetEnforceSingleAdminProjectPerOrg(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRenewalPlan` <a name="resetRenewalPlan" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetRenewalPlan"></a>

```typescript
public resetRenewalPlan(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryCapacityCommitment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isConstruct"></a>

```typescript
import { bigqueryCapacityCommitment } from '@cdktf/provider-google'

bigqueryCapacityCommitment.BigqueryCapacityCommitment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isTerraformElement"></a>

```typescript
import { bigqueryCapacityCommitment } from '@cdktf/provider-google'

bigqueryCapacityCommitment.BigqueryCapacityCommitment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isTerraformResource"></a>

```typescript
import { bigqueryCapacityCommitment } from '@cdktf/provider-google'

bigqueryCapacityCommitment.BigqueryCapacityCommitment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.generateConfigForImport"></a>

```typescript
import { bigqueryCapacityCommitment } from '@cdktf/provider-google'

bigqueryCapacityCommitment.BigqueryCapacityCommitment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BigqueryCapacityCommitment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigqueryCapacityCommitment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigqueryCapacityCommitment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryCapacityCommitment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.commitmentEndTime">commitmentEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.commitmentStartTime">commitmentStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference">BigqueryCapacityCommitmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.capacityCommitmentIdInput">capacityCommitmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.editionInput">editionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.enforceSingleAdminProjectPerOrgInput">enforceSingleAdminProjectPerOrgInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.planInput">planInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.renewalPlanInput">renewalPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.slotCountInput">slotCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.capacityCommitmentId">capacityCommitmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.edition">edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.enforceSingleAdminProjectPerOrg">enforceSingleAdminProjectPerOrg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.plan">plan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.renewalPlan">renewalPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.slotCount">slotCount</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `commitmentEndTime`<sup>Required</sup> <a name="commitmentEndTime" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.commitmentEndTime"></a>

```typescript
public readonly commitmentEndTime: string;
```

- *Type:* string

---

##### `commitmentStartTime`<sup>Required</sup> <a name="commitmentStartTime" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.commitmentStartTime"></a>

```typescript
public readonly commitmentStartTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.timeouts"></a>

```typescript
public readonly timeouts: BigqueryCapacityCommitmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference">BigqueryCapacityCommitmentTimeoutsOutputReference</a>

---

##### `capacityCommitmentIdInput`<sup>Optional</sup> <a name="capacityCommitmentIdInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.capacityCommitmentIdInput"></a>

```typescript
public readonly capacityCommitmentIdInput: string;
```

- *Type:* string

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.editionInput"></a>

```typescript
public readonly editionInput: string;
```

- *Type:* string

---

##### `enforceSingleAdminProjectPerOrgInput`<sup>Optional</sup> <a name="enforceSingleAdminProjectPerOrgInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.enforceSingleAdminProjectPerOrgInput"></a>

```typescript
public readonly enforceSingleAdminProjectPerOrgInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.planInput"></a>

```typescript
public readonly planInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `renewalPlanInput`<sup>Optional</sup> <a name="renewalPlanInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.renewalPlanInput"></a>

```typescript
public readonly renewalPlanInput: string;
```

- *Type:* string

---

##### `slotCountInput`<sup>Optional</sup> <a name="slotCountInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.slotCountInput"></a>

```typescript
public readonly slotCountInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BigqueryCapacityCommitmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a>

---

##### `capacityCommitmentId`<sup>Required</sup> <a name="capacityCommitmentId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.capacityCommitmentId"></a>

```typescript
public readonly capacityCommitmentId: string;
```

- *Type:* string

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

---

##### `enforceSingleAdminProjectPerOrg`<sup>Required</sup> <a name="enforceSingleAdminProjectPerOrg" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.enforceSingleAdminProjectPerOrg"></a>

```typescript
public readonly enforceSingleAdminProjectPerOrg: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `renewalPlan`<sup>Required</sup> <a name="renewalPlan" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.renewalPlan"></a>

```typescript
public readonly renewalPlan: string;
```

- *Type:* string

---

##### `slotCount`<sup>Required</sup> <a name="slotCount" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.slotCount"></a>

```typescript
public readonly slotCount: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryCapacityCommitmentConfig <a name="BigqueryCapacityCommitmentConfig" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.Initializer"></a>

```typescript
import { bigqueryCapacityCommitment } from '@cdktf/provider-google'

const bigqueryCapacityCommitmentConfig: bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.plan">plan</a></code> | <code>string</code> | Capacity commitment plan. Valid values are at https://cloud.google.com/bigquery/docs/reference/reservations/rpc/google.cloud.bigquery.reservation.v1#commitmentplan. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.slotCount">slotCount</a></code> | <code>number</code> | Number of slots in this commitment. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.capacityCommitmentId">capacityCommitmentId</a></code> | <code>string</code> | The optional capacity commitment ID. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.edition">edition</a></code> | <code>string</code> | The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.enforceSingleAdminProjectPerOrg">enforceSingleAdminProjectPerOrg</a></code> | <code>string</code> | If true, fail the request if another project in the organization has a capacity commitment. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#id BigqueryCapacityCommitment#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#project BigqueryCapacityCommitment#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.renewalPlan">renewalPlan</a></code> | <code>string</code> | The plan this capacity commitment is converted to after commitmentEndTime passes. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.plan"></a>

```typescript
public readonly plan: string;
```

- *Type:* string

Capacity commitment plan. Valid values are at https://cloud.google.com/bigquery/docs/reference/reservations/rpc/google.cloud.bigquery.reservation.v1#commitmentplan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#plan BigqueryCapacityCommitment#plan}

---

##### `slotCount`<sup>Required</sup> <a name="slotCount" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.slotCount"></a>

```typescript
public readonly slotCount: number;
```

- *Type:* number

Number of slots in this commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#slot_count BigqueryCapacityCommitment#slot_count}

---

##### `capacityCommitmentId`<sup>Optional</sup> <a name="capacityCommitmentId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.capacityCommitmentId"></a>

```typescript
public readonly capacityCommitmentId: string;
```

- *Type:* string

The optional capacity commitment ID.

Capacity commitment name will be generated automatically if this field is
empty. This field must only contain lower case alphanumeric characters or dashes. The first and last character
cannot be a dash. Max length is 64 characters. NOTE: this ID won't be kept if the capacity commitment is split
or merged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#capacity_commitment_id BigqueryCapacityCommitment#capacity_commitment_id}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#edition BigqueryCapacityCommitment#edition}

---

##### `enforceSingleAdminProjectPerOrg`<sup>Optional</sup> <a name="enforceSingleAdminProjectPerOrg" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.enforceSingleAdminProjectPerOrg"></a>

```typescript
public readonly enforceSingleAdminProjectPerOrg: string;
```

- *Type:* string

If true, fail the request if another project in the organization has a capacity commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#enforce_single_admin_project_per_org BigqueryCapacityCommitment#enforce_single_admin_project_per_org}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#id BigqueryCapacityCommitment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#location BigqueryCapacityCommitment#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#project BigqueryCapacityCommitment#project}.

---

##### `renewalPlan`<sup>Optional</sup> <a name="renewalPlan" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.renewalPlan"></a>

```typescript
public readonly renewalPlan: string;
```

- *Type:* string

The plan this capacity commitment is converted to after commitmentEndTime passes.

Once the plan is changed, committed period is extended according to commitment plan. Only applicable for some commitment plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#renewal_plan BigqueryCapacityCommitment#renewal_plan}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BigqueryCapacityCommitmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#timeouts BigqueryCapacityCommitment#timeouts}

---

### BigqueryCapacityCommitmentTimeouts <a name="BigqueryCapacityCommitmentTimeouts" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.Initializer"></a>

```typescript
import { bigqueryCapacityCommitment } from '@cdktf/provider-google'

const bigqueryCapacityCommitmentTimeouts: bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#create BigqueryCapacityCommitment#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#delete BigqueryCapacityCommitment#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#update BigqueryCapacityCommitment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#create BigqueryCapacityCommitment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#delete BigqueryCapacityCommitment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#update BigqueryCapacityCommitment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryCapacityCommitmentTimeoutsOutputReference <a name="BigqueryCapacityCommitmentTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { bigqueryCapacityCommitment } from '@cdktf/provider-google'

new bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BigqueryCapacityCommitmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a>

---



