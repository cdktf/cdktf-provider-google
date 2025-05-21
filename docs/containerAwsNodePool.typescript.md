# `containerAwsNodePool` Submodule <a name="`containerAwsNodePool` Submodule" id="@cdktf/provider-google.containerAwsNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAwsNodePool <a name="ContainerAwsNodePool" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool google_container_aws_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

new containerAwsNodePool.ContainerAwsNodePool(scope: Construct, id: string, config: ContainerAwsNodePoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig">ContainerAwsNodePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig">ContainerAwsNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putAutoscaling">putAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putKubeletConfig">putKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putManagement">putManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putMaxPodsConstraint">putMaxPodsConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putUpdateSettings">putUpdateSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetKubeletConfig">resetKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetManagement">resetManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetUpdateSettings">resetUpdateSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscaling` <a name="putAutoscaling" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putAutoscaling"></a>

```typescript
public putAutoscaling(value: ContainerAwsNodePoolAutoscaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putAutoscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling">ContainerAwsNodePoolAutoscaling</a>

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putConfig"></a>

```typescript
public putConfig(value: ContainerAwsNodePoolConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA">ContainerAwsNodePoolConfigA</a>

---

##### `putKubeletConfig` <a name="putKubeletConfig" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putKubeletConfig"></a>

```typescript
public putKubeletConfig(value: ContainerAwsNodePoolKubeletConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putKubeletConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfig">ContainerAwsNodePoolKubeletConfig</a>

---

##### `putManagement` <a name="putManagement" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putManagement"></a>

```typescript
public putManagement(value: ContainerAwsNodePoolManagement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putManagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagement">ContainerAwsNodePoolManagement</a>

---

##### `putMaxPodsConstraint` <a name="putMaxPodsConstraint" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putMaxPodsConstraint"></a>

```typescript
public putMaxPodsConstraint(value: ContainerAwsNodePoolMaxPodsConstraint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putMaxPodsConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraint">ContainerAwsNodePoolMaxPodsConstraint</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putTimeouts"></a>

```typescript
public putTimeouts(value: ContainerAwsNodePoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts">ContainerAwsNodePoolTimeouts</a>

---

##### `putUpdateSettings` <a name="putUpdateSettings" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putUpdateSettings"></a>

```typescript
public putUpdateSettings(value: ContainerAwsNodePoolUpdateSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putUpdateSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettings">ContainerAwsNodePoolUpdateSettings</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKubeletConfig` <a name="resetKubeletConfig" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetKubeletConfig"></a>

```typescript
public resetKubeletConfig(): void
```

##### `resetManagement` <a name="resetManagement" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetManagement"></a>

```typescript
public resetManagement(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpdateSettings` <a name="resetUpdateSettings" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetUpdateSettings"></a>

```typescript
public resetUpdateSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerAwsNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.isConstruct"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

containerAwsNodePool.ContainerAwsNodePool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.isTerraformElement"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

containerAwsNodePool.ContainerAwsNodePool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.isTerraformResource"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

containerAwsNodePool.ContainerAwsNodePool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.generateConfigForImport"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

containerAwsNodePool.ContainerAwsNodePool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ContainerAwsNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerAwsNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerAwsNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAwsNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference">ContainerAwsNodePoolAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference">ContainerAwsNodePoolConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.kubeletConfig">kubeletConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference">ContainerAwsNodePoolKubeletConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.management">management</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference">ContainerAwsNodePoolManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.maxPodsConstraint">maxPodsConstraint</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference">ContainerAwsNodePoolMaxPodsConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference">ContainerAwsNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.updateSettings">updateSettings</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference">ContainerAwsNodePoolUpdateSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.autoscalingInput">autoscalingInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling">ContainerAwsNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA">ContainerAwsNodePoolConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.kubeletConfigInput">kubeletConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfig">ContainerAwsNodePoolKubeletConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.managementInput">managementInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagement">ContainerAwsNodePoolManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.maxPodsConstraintInput">maxPodsConstraintInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraint">ContainerAwsNodePoolMaxPodsConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts">ContainerAwsNodePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.updateSettingsInput">updateSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettings">ContainerAwsNodePoolUpdateSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscaling`<sup>Required</sup> <a name="autoscaling" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.autoscaling"></a>

```typescript
public readonly autoscaling: ContainerAwsNodePoolAutoscalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference">ContainerAwsNodePoolAutoscalingOutputReference</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.config"></a>

```typescript
public readonly config: ContainerAwsNodePoolConfigAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference">ContainerAwsNodePoolConfigAOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `kubeletConfig`<sup>Required</sup> <a name="kubeletConfig" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.kubeletConfig"></a>

```typescript
public readonly kubeletConfig: ContainerAwsNodePoolKubeletConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference">ContainerAwsNodePoolKubeletConfigOutputReference</a>

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.management"></a>

```typescript
public readonly management: ContainerAwsNodePoolManagementOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference">ContainerAwsNodePoolManagementOutputReference</a>

---

##### `maxPodsConstraint`<sup>Required</sup> <a name="maxPodsConstraint" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.maxPodsConstraint"></a>

```typescript
public readonly maxPodsConstraint: ContainerAwsNodePoolMaxPodsConstraintOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference">ContainerAwsNodePoolMaxPodsConstraintOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerAwsNodePoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference">ContainerAwsNodePoolTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateSettings`<sup>Required</sup> <a name="updateSettings" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.updateSettings"></a>

```typescript
public readonly updateSettings: ContainerAwsNodePoolUpdateSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference">ContainerAwsNodePoolUpdateSettingsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `autoscalingInput`<sup>Optional</sup> <a name="autoscalingInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.autoscalingInput"></a>

```typescript
public readonly autoscalingInput: ContainerAwsNodePoolAutoscaling;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling">ContainerAwsNodePoolAutoscaling</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.configInput"></a>

```typescript
public readonly configInput: ContainerAwsNodePoolConfigA;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA">ContainerAwsNodePoolConfigA</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kubeletConfigInput`<sup>Optional</sup> <a name="kubeletConfigInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.kubeletConfigInput"></a>

```typescript
public readonly kubeletConfigInput: ContainerAwsNodePoolKubeletConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfig">ContainerAwsNodePoolKubeletConfig</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `managementInput`<sup>Optional</sup> <a name="managementInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.managementInput"></a>

```typescript
public readonly managementInput: ContainerAwsNodePoolManagement;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagement">ContainerAwsNodePoolManagement</a>

---

##### `maxPodsConstraintInput`<sup>Optional</sup> <a name="maxPodsConstraintInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.maxPodsConstraintInput"></a>

```typescript
public readonly maxPodsConstraintInput: ContainerAwsNodePoolMaxPodsConstraint;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraint">ContainerAwsNodePoolMaxPodsConstraint</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ContainerAwsNodePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts">ContainerAwsNodePoolTimeouts</a>

---

##### `updateSettingsInput`<sup>Optional</sup> <a name="updateSettingsInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.updateSettingsInput"></a>

```typescript
public readonly updateSettingsInput: ContainerAwsNodePoolUpdateSettings;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettings">ContainerAwsNodePoolUpdateSettings</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAwsNodePoolAutoscaling <a name="ContainerAwsNodePoolAutoscaling" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

const containerAwsNodePoolAutoscaling: containerAwsNodePool.ContainerAwsNodePoolAutoscaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling.property.maxNodeCount">maxNodeCount</a></code> | <code>number</code> | Maximum number of nodes in the NodePool. Must be >= min_node_count. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling.property.minNodeCount">minNodeCount</a></code> | <code>number</code> | Minimum number of nodes in the NodePool. Must be >= 1 and <= max_node_count. |

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling.property.maxNodeCount"></a>

```typescript
public readonly maxNodeCount: number;
```

- *Type:* number

Maximum number of nodes in the NodePool. Must be >= min_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#max_node_count ContainerAwsNodePool#max_node_count}

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling.property.minNodeCount"></a>

```typescript
public readonly minNodeCount: number;
```

- *Type:* number

Minimum number of nodes in the NodePool. Must be >= 1 and <= max_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#min_node_count ContainerAwsNodePool#min_node_count}

---

### ContainerAwsNodePoolConfig <a name="ContainerAwsNodePoolConfig" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

const containerAwsNodePoolConfig: containerAwsNodePool.ContainerAwsNodePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling">ContainerAwsNodePoolAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.cluster">cluster</a></code> | <code>string</code> | The awsCluster for the resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA">ContainerAwsNodePoolConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.maxPodsConstraint">maxPodsConstraint</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraint">ContainerAwsNodePoolMaxPodsConstraint</a></code> | max_pods_constraint block. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.name">name</a></code> | <code>string</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.subnetId">subnetId</a></code> | <code>string</code> | The subnet where the node pool node run. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.version">version</a></code> | <code>string</code> | The Kubernetes version to run on this node pool (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAwsServerConfig. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#id ContainerAwsNodePool#id}. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.kubeletConfig">kubeletConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfig">ContainerAwsNodePoolKubeletConfig</a></code> | kubelet_config block. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.management">management</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagement">ContainerAwsNodePoolManagement</a></code> | management block. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.project">project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts">ContainerAwsNodePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.updateSettings">updateSettings</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettings">ContainerAwsNodePoolUpdateSettings</a></code> | update_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscaling`<sup>Required</sup> <a name="autoscaling" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.autoscaling"></a>

```typescript
public readonly autoscaling: ContainerAwsNodePoolAutoscaling;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling">ContainerAwsNodePoolAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#autoscaling ContainerAwsNodePool#autoscaling}

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

The awsCluster for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#cluster ContainerAwsNodePool#cluster}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.config"></a>

```typescript
public readonly config: ContainerAwsNodePoolConfigA;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA">ContainerAwsNodePoolConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#config ContainerAwsNodePool#config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#location ContainerAwsNodePool#location}

---

##### `maxPodsConstraint`<sup>Required</sup> <a name="maxPodsConstraint" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.maxPodsConstraint"></a>

```typescript
public readonly maxPodsConstraint: ContainerAwsNodePoolMaxPodsConstraint;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraint">ContainerAwsNodePoolMaxPodsConstraint</a>

max_pods_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#max_pods_constraint ContainerAwsNodePool#max_pods_constraint}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#name ContainerAwsNodePool#name}

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

The subnet where the node pool node run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#subnet_id ContainerAwsNodePool#subnet_id}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Kubernetes version to run on this node pool (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAwsServerConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#version ContainerAwsNodePool#version}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#annotations ContainerAwsNodePool#annotations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#id ContainerAwsNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubeletConfig`<sup>Optional</sup> <a name="kubeletConfig" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.kubeletConfig"></a>

```typescript
public readonly kubeletConfig: ContainerAwsNodePoolKubeletConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfig">ContainerAwsNodePoolKubeletConfig</a>

kubelet_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#kubelet_config ContainerAwsNodePool#kubelet_config}

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.management"></a>

```typescript
public readonly management: ContainerAwsNodePoolManagement;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagement">ContainerAwsNodePoolManagement</a>

management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#management ContainerAwsNodePool#management}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#project ContainerAwsNodePool#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerAwsNodePoolTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts">ContainerAwsNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#timeouts ContainerAwsNodePool#timeouts}

---

##### `updateSettings`<sup>Optional</sup> <a name="updateSettings" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.updateSettings"></a>

```typescript
public readonly updateSettings: ContainerAwsNodePoolUpdateSettings;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettings">ContainerAwsNodePoolUpdateSettings</a>

update_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#update_settings ContainerAwsNodePool#update_settings}

---

### ContainerAwsNodePoolConfigA <a name="ContainerAwsNodePoolConfigA" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

const containerAwsNodePoolConfigA: containerAwsNodePool.ContainerAwsNodePoolConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.configEncryption">configEncryption</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryption">ContainerAwsNodePoolConfigConfigEncryption</a></code> | config_encryption block. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>string</code> | The name of the AWS IAM role assigned to nodes in the pool. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.autoscalingMetricsCollection">autoscalingMetricsCollection</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection">ContainerAwsNodePoolConfigAutoscalingMetricsCollection</a></code> | autoscaling_metrics_collection block. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.instanceType">instanceType</a></code> | <code>string</code> | Optional. The AWS instance type. When unspecified, it defaults to `m5.large`. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig">ContainerAwsNodePoolConfigProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.rootVolume">rootVolume</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume">ContainerAwsNodePoolConfigRootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.sshConfig">sshConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfig">ContainerAwsNodePoolConfigSshConfig</a></code> | ssh_config block. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.taints">taints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints">ContainerAwsNodePoolConfigTaints</a>[]</code> | taints block. |

---

##### `configEncryption`<sup>Required</sup> <a name="configEncryption" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.configEncryption"></a>

```typescript
public readonly configEncryption: ContainerAwsNodePoolConfigConfigEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryption">ContainerAwsNodePoolConfigConfigEncryption</a>

config_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#config_encryption ContainerAwsNodePool#config_encryption}

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: string;
```

- *Type:* string

The name of the AWS IAM role assigned to nodes in the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#iam_instance_profile ContainerAwsNodePool#iam_instance_profile}

---

##### `autoscalingMetricsCollection`<sup>Optional</sup> <a name="autoscalingMetricsCollection" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.autoscalingMetricsCollection"></a>

```typescript
public readonly autoscalingMetricsCollection: ContainerAwsNodePoolConfigAutoscalingMetricsCollection;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection">ContainerAwsNodePoolConfigAutoscalingMetricsCollection</a>

autoscaling_metrics_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#autoscaling_metrics_collection ContainerAwsNodePool#autoscaling_metrics_collection}

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Optional. The AWS instance type. When unspecified, it defaults to `m5.large`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#instance_type ContainerAwsNodePool#instance_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#labels ContainerAwsNodePool#labels}

---

##### `proxyConfig`<sup>Optional</sup> <a name="proxyConfig" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.proxyConfig"></a>

```typescript
public readonly proxyConfig: ContainerAwsNodePoolConfigProxyConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig">ContainerAwsNodePoolConfigProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#proxy_config ContainerAwsNodePool#proxy_config}

---

##### `rootVolume`<sup>Optional</sup> <a name="rootVolume" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.rootVolume"></a>

```typescript
public readonly rootVolume: ContainerAwsNodePoolConfigRootVolume;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume">ContainerAwsNodePoolConfigRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#root_volume ContainerAwsNodePool#root_volume}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Optional.

The IDs of additional security groups to add to nodes in this pool. The manager will automatically create security groups with minimum rules needed for a functioning cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#security_group_ids ContainerAwsNodePool#security_group_ids}

---

##### `sshConfig`<sup>Optional</sup> <a name="sshConfig" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.sshConfig"></a>

```typescript
public readonly sshConfig: ContainerAwsNodePoolConfigSshConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfig">ContainerAwsNodePoolConfigSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#ssh_config ContainerAwsNodePool#ssh_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

Key/value metadata to assign to each underlying AWS resource. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#tags ContainerAwsNodePool#tags}

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.taints"></a>

```typescript
public readonly taints: IResolvable | ContainerAwsNodePoolConfigTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints">ContainerAwsNodePoolConfigTaints</a>[]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#taints ContainerAwsNodePool#taints}

---

### ContainerAwsNodePoolConfigAutoscalingMetricsCollection <a name="ContainerAwsNodePoolConfigAutoscalingMetricsCollection" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

const containerAwsNodePoolConfigAutoscalingMetricsCollection: containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection.property.granularity">granularity</a></code> | <code>string</code> | The frequency at which EC2 Auto Scaling sends aggregated data to AWS CloudWatch. The only valid value is "1Minute". |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection.property.metrics">metrics</a></code> | <code>string[]</code> | The metrics to enable. |

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection.property.granularity"></a>

```typescript
public readonly granularity: string;
```

- *Type:* string

The frequency at which EC2 Auto Scaling sends aggregated data to AWS CloudWatch. The only valid value is "1Minute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#granularity ContainerAwsNodePool#granularity}

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection.property.metrics"></a>

```typescript
public readonly metrics: string[];
```

- *Type:* string[]

The metrics to enable.

For a list of valid metrics, see https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_EnableMetricsCollection.html. If you specify granularity and don't specify any metrics, all metrics are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#metrics ContainerAwsNodePool#metrics}

---

### ContainerAwsNodePoolConfigConfigEncryption <a name="ContainerAwsNodePoolConfigConfigEncryption" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryption.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

const containerAwsNodePoolConfigConfigEncryption: containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryption.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | The ARN of the AWS KMS key used to encrypt node pool configuration. |

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryption.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

The ARN of the AWS KMS key used to encrypt node pool configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#kms_key_arn ContainerAwsNodePool#kms_key_arn}

---

### ContainerAwsNodePoolConfigProxyConfig <a name="ContainerAwsNodePoolConfigProxyConfig" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

const containerAwsNodePoolConfigProxyConfig: containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig.property.secretArn">secretArn</a></code> | <code>string</code> | The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig.property.secretVersion">secretVersion</a></code> | <code>string</code> | The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration. |

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#secret_arn ContainerAwsNodePool#secret_arn}

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#secret_version ContainerAwsNodePool#secret_version}

---

### ContainerAwsNodePoolConfigRootVolume <a name="ContainerAwsNodePoolConfigRootVolume" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

const containerAwsNodePoolConfigRootVolume: containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume.property.iops">iops</a></code> | <code>number</code> | Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume.property.sizeGib">sizeGib</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume.property.throughput">throughput</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume.property.volumeType">volumeType</a></code> | <code>string</code> | Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3. |

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#iops ContainerAwsNodePool#iops}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Optional.

The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#kms_key_arn ContainerAwsNodePool#kms_key_arn}

---

##### `sizeGib`<sup>Optional</sup> <a name="sizeGib" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume.property.sizeGib"></a>

```typescript
public readonly sizeGib: number;
```

- *Type:* number

Optional.

The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#size_gib ContainerAwsNodePool#size_gib}

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Optional.

The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3. If volume type is gp3 and throughput is not specified, the throughput will defaults to 125.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#throughput ContainerAwsNodePool#throughput}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#volume_type ContainerAwsNodePool#volume_type}

---

### ContainerAwsNodePoolConfigSshConfig <a name="ContainerAwsNodePoolConfigSshConfig" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfig.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

const containerAwsNodePoolConfigSshConfig: containerAwsNodePool.ContainerAwsNodePoolConfigSshConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfig.property.ec2KeyPair">ec2KeyPair</a></code> | <code>string</code> | The name of the EC2 key pair used to login into cluster machines. |

---

##### `ec2KeyPair`<sup>Required</sup> <a name="ec2KeyPair" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfig.property.ec2KeyPair"></a>

```typescript
public readonly ec2KeyPair: string;
```

- *Type:* string

The name of the EC2 key pair used to login into cluster machines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#ec2_key_pair ContainerAwsNodePool#ec2_key_pair}

---

### ContainerAwsNodePoolConfigTaints <a name="ContainerAwsNodePoolConfigTaints" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

const containerAwsNodePoolConfigTaints: containerAwsNodePool.ContainerAwsNodePoolConfigTaints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints.property.effect">effect</a></code> | <code>string</code> | The taint effect. Possible values: EFFECT_UNSPECIFIED, NO_SCHEDULE, PREFER_NO_SCHEDULE, NO_EXECUTE. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints.property.key">key</a></code> | <code>string</code> | Key for the taint. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints.property.value">value</a></code> | <code>string</code> | Value for the taint. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

The taint effect. Possible values: EFFECT_UNSPECIFIED, NO_SCHEDULE, PREFER_NO_SCHEDULE, NO_EXECUTE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#effect ContainerAwsNodePool#effect}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Key for the taint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#key ContainerAwsNodePool#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value for the taint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#value ContainerAwsNodePool#value}

---

### ContainerAwsNodePoolKubeletConfig <a name="ContainerAwsNodePoolKubeletConfig" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfig.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

const containerAwsNodePoolKubeletConfig: containerAwsNodePool.ContainerAwsNodePoolKubeletConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfig.property.cpuCfsQuota">cpuCfsQuota</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to enable CPU CFS quota. Defaults to true. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfig.property.cpuCfsQuotaPeriod">cpuCfsQuotaPeriod</a></code> | <code>string</code> | Optional. The CPU CFS quota period to use for the node. Defaults to "100ms". |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfig.property.cpuManagerPolicy">cpuManagerPolicy</a></code> | <code>string</code> | The CpuManagerPolicy to use for the node. Defaults to "none". |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfig.property.podPidsLimit">podPidsLimit</a></code> | <code>number</code> | Optional. |

---

##### `cpuCfsQuota`<sup>Optional</sup> <a name="cpuCfsQuota" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfig.property.cpuCfsQuota"></a>

```typescript
public readonly cpuCfsQuota: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to enable CPU CFS quota. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#cpu_cfs_quota ContainerAwsNodePool#cpu_cfs_quota}

---

##### `cpuCfsQuotaPeriod`<sup>Optional</sup> <a name="cpuCfsQuotaPeriod" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfig.property.cpuCfsQuotaPeriod"></a>

```typescript
public readonly cpuCfsQuotaPeriod: string;
```

- *Type:* string

Optional. The CPU CFS quota period to use for the node. Defaults to "100ms".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#cpu_cfs_quota_period ContainerAwsNodePool#cpu_cfs_quota_period}

---

##### `cpuManagerPolicy`<sup>Optional</sup> <a name="cpuManagerPolicy" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfig.property.cpuManagerPolicy"></a>

```typescript
public readonly cpuManagerPolicy: string;
```

- *Type:* string

The CpuManagerPolicy to use for the node. Defaults to "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#cpu_manager_policy ContainerAwsNodePool#cpu_manager_policy}

---

##### `podPidsLimit`<sup>Optional</sup> <a name="podPidsLimit" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfig.property.podPidsLimit"></a>

```typescript
public readonly podPidsLimit: number;
```

- *Type:* number

Optional.

The maximum number of PIDs in each pod running on the node. The limit scales automatically based on underlying machine size if left unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#pod_pids_limit ContainerAwsNodePool#pod_pids_limit}

---

### ContainerAwsNodePoolManagement <a name="ContainerAwsNodePoolManagement" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagement.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

const containerAwsNodePoolManagement: containerAwsNodePool.ContainerAwsNodePoolManagement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagement.property.autoRepair">autoRepair</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. Whether or not the nodes will be automatically repaired. |

---

##### `autoRepair`<sup>Optional</sup> <a name="autoRepair" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagement.property.autoRepair"></a>

```typescript
public readonly autoRepair: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional. Whether or not the nodes will be automatically repaired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#auto_repair ContainerAwsNodePool#auto_repair}

---

### ContainerAwsNodePoolMaxPodsConstraint <a name="ContainerAwsNodePoolMaxPodsConstraint" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraint.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

const containerAwsNodePoolMaxPodsConstraint: containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraint.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>number</code> | The maximum number of pods to schedule on a single node. |

---

##### `maxPodsPerNode`<sup>Required</sup> <a name="maxPodsPerNode" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraint.property.maxPodsPerNode"></a>

```typescript
public readonly maxPodsPerNode: number;
```

- *Type:* number

The maximum number of pods to schedule on a single node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#max_pods_per_node ContainerAwsNodePool#max_pods_per_node}

---

### ContainerAwsNodePoolTimeouts <a name="ContainerAwsNodePoolTimeouts" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

const containerAwsNodePoolTimeouts: containerAwsNodePool.ContainerAwsNodePoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#create ContainerAwsNodePool#create}. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#delete ContainerAwsNodePool#delete}. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#update ContainerAwsNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#create ContainerAwsNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#delete ContainerAwsNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#update ContainerAwsNodePool#update}.

---

### ContainerAwsNodePoolUpdateSettings <a name="ContainerAwsNodePoolUpdateSettings" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettings.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

const containerAwsNodePoolUpdateSettings: containerAwsNodePool.ContainerAwsNodePoolUpdateSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettings.property.surgeSettings">surgeSettings</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettings">ContainerAwsNodePoolUpdateSettingsSurgeSettings</a></code> | surge_settings block. |

---

##### `surgeSettings`<sup>Optional</sup> <a name="surgeSettings" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettings.property.surgeSettings"></a>

```typescript
public readonly surgeSettings: ContainerAwsNodePoolUpdateSettingsSurgeSettings;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettings">ContainerAwsNodePoolUpdateSettingsSurgeSettings</a>

surge_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#surge_settings ContainerAwsNodePool#surge_settings}

---

### ContainerAwsNodePoolUpdateSettingsSurgeSettings <a name="ContainerAwsNodePoolUpdateSettingsSurgeSettings" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettings.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

const containerAwsNodePoolUpdateSettingsSurgeSettings: containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettings.property.maxSurge">maxSurge</a></code> | <code>number</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettings.property.maxUnavailable">maxUnavailable</a></code> | <code>number</code> | Optional. |

---

##### `maxSurge`<sup>Optional</sup> <a name="maxSurge" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettings.property.maxSurge"></a>

```typescript
public readonly maxSurge: number;
```

- *Type:* number

Optional.

The maximum number of nodes that can be created beyond the current size of the node pool during the update process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#max_surge ContainerAwsNodePool#max_surge}

---

##### `maxUnavailable`<sup>Optional</sup> <a name="maxUnavailable" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettings.property.maxUnavailable"></a>

```typescript
public readonly maxUnavailable: number;
```

- *Type:* number

Optional.

The maximum number of nodes that can be simultaneously unavailable during the update process. A node is considered unavailable if its status is not Ready.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/container_aws_node_pool#max_unavailable ContainerAwsNodePool#max_unavailable}

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAwsNodePoolAutoscalingOutputReference <a name="ContainerAwsNodePoolAutoscalingOutputReference" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

new containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.maxNodeCountInput">maxNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.minNodeCountInput">minNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.maxNodeCount">maxNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.minNodeCount">minNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling">ContainerAwsNodePoolAutoscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxNodeCountInput`<sup>Optional</sup> <a name="maxNodeCountInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.maxNodeCountInput"></a>

```typescript
public readonly maxNodeCountInput: number;
```

- *Type:* number

---

##### `minNodeCountInput`<sup>Optional</sup> <a name="minNodeCountInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.minNodeCountInput"></a>

```typescript
public readonly minNodeCountInput: number;
```

- *Type:* number

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.maxNodeCount"></a>

```typescript
public readonly maxNodeCount: number;
```

- *Type:* number

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.minNodeCount"></a>

```typescript
public readonly minNodeCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAwsNodePoolAutoscaling;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling">ContainerAwsNodePoolAutoscaling</a>

---


### ContainerAwsNodePoolConfigAOutputReference <a name="ContainerAwsNodePoolConfigAOutputReference" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

new containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putAutoscalingMetricsCollection">putAutoscalingMetricsCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putConfigEncryption">putConfigEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putProxyConfig">putProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putRootVolume">putRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putSshConfig">putSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putTaints">putTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetAutoscalingMetricsCollection">resetAutoscalingMetricsCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetProxyConfig">resetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetRootVolume">resetRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetSshConfig">resetSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetTaints">resetTaints</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscalingMetricsCollection` <a name="putAutoscalingMetricsCollection" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putAutoscalingMetricsCollection"></a>

```typescript
public putAutoscalingMetricsCollection(value: ContainerAwsNodePoolConfigAutoscalingMetricsCollection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putAutoscalingMetricsCollection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection">ContainerAwsNodePoolConfigAutoscalingMetricsCollection</a>

---

##### `putConfigEncryption` <a name="putConfigEncryption" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putConfigEncryption"></a>

```typescript
public putConfigEncryption(value: ContainerAwsNodePoolConfigConfigEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putConfigEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryption">ContainerAwsNodePoolConfigConfigEncryption</a>

---

##### `putProxyConfig` <a name="putProxyConfig" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putProxyConfig"></a>

```typescript
public putProxyConfig(value: ContainerAwsNodePoolConfigProxyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig">ContainerAwsNodePoolConfigProxyConfig</a>

---

##### `putRootVolume` <a name="putRootVolume" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putRootVolume"></a>

```typescript
public putRootVolume(value: ContainerAwsNodePoolConfigRootVolume): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putRootVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume">ContainerAwsNodePoolConfigRootVolume</a>

---

##### `putSshConfig` <a name="putSshConfig" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putSshConfig"></a>

```typescript
public putSshConfig(value: ContainerAwsNodePoolConfigSshConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putSshConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfig">ContainerAwsNodePoolConfigSshConfig</a>

---

##### `putTaints` <a name="putTaints" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putTaints"></a>

```typescript
public putTaints(value: IResolvable | ContainerAwsNodePoolConfigTaints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putTaints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints">ContainerAwsNodePoolConfigTaints</a>[]

---

##### `resetAutoscalingMetricsCollection` <a name="resetAutoscalingMetricsCollection" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetAutoscalingMetricsCollection"></a>

```typescript
public resetAutoscalingMetricsCollection(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProxyConfig` <a name="resetProxyConfig" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetProxyConfig"></a>

```typescript
public resetProxyConfig(): void
```

##### `resetRootVolume` <a name="resetRootVolume" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetRootVolume"></a>

```typescript
public resetRootVolume(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSshConfig` <a name="resetSshConfig" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetSshConfig"></a>

```typescript
public resetSshConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTaints` <a name="resetTaints" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetTaints"></a>

```typescript
public resetTaints(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.autoscalingMetricsCollection">autoscalingMetricsCollection</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference">ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.configEncryption">configEncryption</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference">ContainerAwsNodePoolConfigConfigEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference">ContainerAwsNodePoolConfigProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.rootVolume">rootVolume</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference">ContainerAwsNodePoolConfigRootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.sshConfig">sshConfig</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference">ContainerAwsNodePoolConfigSshConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList">ContainerAwsNodePoolConfigTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.autoscalingMetricsCollectionInput">autoscalingMetricsCollectionInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection">ContainerAwsNodePoolConfigAutoscalingMetricsCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.configEncryptionInput">configEncryptionInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryption">ContainerAwsNodePoolConfigConfigEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.iamInstanceProfileInput">iamInstanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.proxyConfigInput">proxyConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig">ContainerAwsNodePoolConfigProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.rootVolumeInput">rootVolumeInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume">ContainerAwsNodePoolConfigRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.sshConfigInput">sshConfigInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfig">ContainerAwsNodePoolConfigSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.taintsInput">taintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints">ContainerAwsNodePoolConfigTaints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA">ContainerAwsNodePoolConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscalingMetricsCollection`<sup>Required</sup> <a name="autoscalingMetricsCollection" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.autoscalingMetricsCollection"></a>

```typescript
public readonly autoscalingMetricsCollection: ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference">ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference</a>

---

##### `configEncryption`<sup>Required</sup> <a name="configEncryption" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.configEncryption"></a>

```typescript
public readonly configEncryption: ContainerAwsNodePoolConfigConfigEncryptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference">ContainerAwsNodePoolConfigConfigEncryptionOutputReference</a>

---

##### `proxyConfig`<sup>Required</sup> <a name="proxyConfig" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.proxyConfig"></a>

```typescript
public readonly proxyConfig: ContainerAwsNodePoolConfigProxyConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference">ContainerAwsNodePoolConfigProxyConfigOutputReference</a>

---

##### `rootVolume`<sup>Required</sup> <a name="rootVolume" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.rootVolume"></a>

```typescript
public readonly rootVolume: ContainerAwsNodePoolConfigRootVolumeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference">ContainerAwsNodePoolConfigRootVolumeOutputReference</a>

---

##### `sshConfig`<sup>Required</sup> <a name="sshConfig" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.sshConfig"></a>

```typescript
public readonly sshConfig: ContainerAwsNodePoolConfigSshConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference">ContainerAwsNodePoolConfigSshConfigOutputReference</a>

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.taints"></a>

```typescript
public readonly taints: ContainerAwsNodePoolConfigTaintsList;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList">ContainerAwsNodePoolConfigTaintsList</a>

---

##### `autoscalingMetricsCollectionInput`<sup>Optional</sup> <a name="autoscalingMetricsCollectionInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.autoscalingMetricsCollectionInput"></a>

```typescript
public readonly autoscalingMetricsCollectionInput: ContainerAwsNodePoolConfigAutoscalingMetricsCollection;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection">ContainerAwsNodePoolConfigAutoscalingMetricsCollection</a>

---

##### `configEncryptionInput`<sup>Optional</sup> <a name="configEncryptionInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.configEncryptionInput"></a>

```typescript
public readonly configEncryptionInput: ContainerAwsNodePoolConfigConfigEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryption">ContainerAwsNodePoolConfigConfigEncryption</a>

---

##### `iamInstanceProfileInput`<sup>Optional</sup> <a name="iamInstanceProfileInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.iamInstanceProfileInput"></a>

```typescript
public readonly iamInstanceProfileInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `proxyConfigInput`<sup>Optional</sup> <a name="proxyConfigInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.proxyConfigInput"></a>

```typescript
public readonly proxyConfigInput: ContainerAwsNodePoolConfigProxyConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig">ContainerAwsNodePoolConfigProxyConfig</a>

---

##### `rootVolumeInput`<sup>Optional</sup> <a name="rootVolumeInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.rootVolumeInput"></a>

```typescript
public readonly rootVolumeInput: ContainerAwsNodePoolConfigRootVolume;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume">ContainerAwsNodePoolConfigRootVolume</a>

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `sshConfigInput`<sup>Optional</sup> <a name="sshConfigInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.sshConfigInput"></a>

```typescript
public readonly sshConfigInput: ContainerAwsNodePoolConfigSshConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfig">ContainerAwsNodePoolConfigSshConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `taintsInput`<sup>Optional</sup> <a name="taintsInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.taintsInput"></a>

```typescript
public readonly taintsInput: IResolvable | ContainerAwsNodePoolConfigTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints">ContainerAwsNodePoolConfigTaints</a>[]

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAwsNodePoolConfigA;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA">ContainerAwsNodePoolConfigA</a>

---


### ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference <a name="ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

new containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.resetMetrics">resetMetrics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetrics` <a name="resetMetrics" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.resetMetrics"></a>

```typescript
public resetMetrics(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.granularityInput">granularityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.metricsInput">metricsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.granularity">granularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.metrics">metrics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection">ContainerAwsNodePoolConfigAutoscalingMetricsCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `granularityInput`<sup>Optional</sup> <a name="granularityInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.granularityInput"></a>

```typescript
public readonly granularityInput: string;
```

- *Type:* string

---

##### `metricsInput`<sup>Optional</sup> <a name="metricsInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.metricsInput"></a>

```typescript
public readonly metricsInput: string[];
```

- *Type:* string[]

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.granularity"></a>

```typescript
public readonly granularity: string;
```

- *Type:* string

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.metrics"></a>

```typescript
public readonly metrics: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAwsNodePoolConfigAutoscalingMetricsCollection;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection">ContainerAwsNodePoolConfigAutoscalingMetricsCollection</a>

---


### ContainerAwsNodePoolConfigConfigEncryptionOutputReference <a name="ContainerAwsNodePoolConfigConfigEncryptionOutputReference" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

new containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryption">ContainerAwsNodePoolConfigConfigEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAwsNodePoolConfigConfigEncryption;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryption">ContainerAwsNodePoolConfigConfigEncryption</a>

---


### ContainerAwsNodePoolConfigProxyConfigOutputReference <a name="ContainerAwsNodePoolConfigProxyConfigOutputReference" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

new containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretVersionInput">secretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretVersion">secretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig">ContainerAwsNodePoolConfigProxyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `secretVersionInput`<sup>Optional</sup> <a name="secretVersionInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretVersionInput"></a>

```typescript
public readonly secretVersionInput: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAwsNodePoolConfigProxyConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig">ContainerAwsNodePoolConfigProxyConfig</a>

---


### ContainerAwsNodePoolConfigRootVolumeOutputReference <a name="ContainerAwsNodePoolConfigRootVolumeOutputReference" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

new containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.resetSizeGib">resetSizeGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetSizeGib` <a name="resetSizeGib" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.resetSizeGib"></a>

```typescript
public resetSizeGib(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.sizeGibInput">sizeGibInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.sizeGib">sizeGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume">ContainerAwsNodePoolConfigRootVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `sizeGibInput`<sup>Optional</sup> <a name="sizeGibInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.sizeGibInput"></a>

```typescript
public readonly sizeGibInput: number;
```

- *Type:* number

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `sizeGib`<sup>Required</sup> <a name="sizeGib" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.sizeGib"></a>

```typescript
public readonly sizeGib: number;
```

- *Type:* number

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAwsNodePoolConfigRootVolume;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume">ContainerAwsNodePoolConfigRootVolume</a>

---


### ContainerAwsNodePoolConfigSshConfigOutputReference <a name="ContainerAwsNodePoolConfigSshConfigOutputReference" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

new containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.property.ec2KeyPairInput">ec2KeyPairInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.property.ec2KeyPair">ec2KeyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfig">ContainerAwsNodePoolConfigSshConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ec2KeyPairInput`<sup>Optional</sup> <a name="ec2KeyPairInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.property.ec2KeyPairInput"></a>

```typescript
public readonly ec2KeyPairInput: string;
```

- *Type:* string

---

##### `ec2KeyPair`<sup>Required</sup> <a name="ec2KeyPair" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.property.ec2KeyPair"></a>

```typescript
public readonly ec2KeyPair: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAwsNodePoolConfigSshConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfig">ContainerAwsNodePoolConfigSshConfig</a>

---


### ContainerAwsNodePoolConfigTaintsList <a name="ContainerAwsNodePoolConfigTaintsList" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

new containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.get"></a>

```typescript
public get(index: number): ContainerAwsNodePoolConfigTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints">ContainerAwsNodePoolConfigTaints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAwsNodePoolConfigTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints">ContainerAwsNodePoolConfigTaints</a>[]

---


### ContainerAwsNodePoolConfigTaintsOutputReference <a name="ContainerAwsNodePoolConfigTaintsOutputReference" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

new containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints">ContainerAwsNodePoolConfigTaints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAwsNodePoolConfigTaints;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints">ContainerAwsNodePoolConfigTaints</a>

---


### ContainerAwsNodePoolKubeletConfigOutputReference <a name="ContainerAwsNodePoolKubeletConfigOutputReference" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

new containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.resetCpuCfsQuota">resetCpuCfsQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.resetCpuCfsQuotaPeriod">resetCpuCfsQuotaPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.resetCpuManagerPolicy">resetCpuManagerPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.resetPodPidsLimit">resetPodPidsLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuCfsQuota` <a name="resetCpuCfsQuota" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.resetCpuCfsQuota"></a>

```typescript
public resetCpuCfsQuota(): void
```

##### `resetCpuCfsQuotaPeriod` <a name="resetCpuCfsQuotaPeriod" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.resetCpuCfsQuotaPeriod"></a>

```typescript
public resetCpuCfsQuotaPeriod(): void
```

##### `resetCpuManagerPolicy` <a name="resetCpuManagerPolicy" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.resetCpuManagerPolicy"></a>

```typescript
public resetCpuManagerPolicy(): void
```

##### `resetPodPidsLimit` <a name="resetPodPidsLimit" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.resetPodPidsLimit"></a>

```typescript
public resetPodPidsLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaInput">cpuCfsQuotaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriodInput">cpuCfsQuotaPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.property.cpuManagerPolicyInput">cpuManagerPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.property.podPidsLimitInput">podPidsLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.property.cpuCfsQuota">cpuCfsQuota</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriod">cpuCfsQuotaPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.property.cpuManagerPolicy">cpuManagerPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.property.podPidsLimit">podPidsLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfig">ContainerAwsNodePoolKubeletConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuCfsQuotaInput`<sup>Optional</sup> <a name="cpuCfsQuotaInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaInput"></a>

```typescript
public readonly cpuCfsQuotaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cpuCfsQuotaPeriodInput`<sup>Optional</sup> <a name="cpuCfsQuotaPeriodInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriodInput"></a>

```typescript
public readonly cpuCfsQuotaPeriodInput: string;
```

- *Type:* string

---

##### `cpuManagerPolicyInput`<sup>Optional</sup> <a name="cpuManagerPolicyInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.property.cpuManagerPolicyInput"></a>

```typescript
public readonly cpuManagerPolicyInput: string;
```

- *Type:* string

---

##### `podPidsLimitInput`<sup>Optional</sup> <a name="podPidsLimitInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.property.podPidsLimitInput"></a>

```typescript
public readonly podPidsLimitInput: number;
```

- *Type:* number

---

##### `cpuCfsQuota`<sup>Required</sup> <a name="cpuCfsQuota" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.property.cpuCfsQuota"></a>

```typescript
public readonly cpuCfsQuota: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cpuCfsQuotaPeriod`<sup>Required</sup> <a name="cpuCfsQuotaPeriod" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.property.cpuCfsQuotaPeriod"></a>

```typescript
public readonly cpuCfsQuotaPeriod: string;
```

- *Type:* string

---

##### `cpuManagerPolicy`<sup>Required</sup> <a name="cpuManagerPolicy" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.property.cpuManagerPolicy"></a>

```typescript
public readonly cpuManagerPolicy: string;
```

- *Type:* string

---

##### `podPidsLimit`<sup>Required</sup> <a name="podPidsLimit" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.property.podPidsLimit"></a>

```typescript
public readonly podPidsLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAwsNodePoolKubeletConfig;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolKubeletConfig">ContainerAwsNodePoolKubeletConfig</a>

---


### ContainerAwsNodePoolManagementOutputReference <a name="ContainerAwsNodePoolManagementOutputReference" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

new containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.resetAutoRepair">resetAutoRepair</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoRepair` <a name="resetAutoRepair" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.resetAutoRepair"></a>

```typescript
public resetAutoRepair(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.property.autoRepairInput">autoRepairInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.property.autoRepair">autoRepair</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagement">ContainerAwsNodePoolManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoRepairInput`<sup>Optional</sup> <a name="autoRepairInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.property.autoRepairInput"></a>

```typescript
public readonly autoRepairInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoRepair`<sup>Required</sup> <a name="autoRepair" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.property.autoRepair"></a>

```typescript
public readonly autoRepair: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAwsNodePoolManagement;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagement">ContainerAwsNodePoolManagement</a>

---


### ContainerAwsNodePoolMaxPodsConstraintOutputReference <a name="ContainerAwsNodePoolMaxPodsConstraintOutputReference" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

new containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNodeInput">maxPodsPerNodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraint">ContainerAwsNodePoolMaxPodsConstraint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxPodsPerNodeInput`<sup>Optional</sup> <a name="maxPodsPerNodeInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNodeInput"></a>

```typescript
public readonly maxPodsPerNodeInput: number;
```

- *Type:* number

---

##### `maxPodsPerNode`<sup>Required</sup> <a name="maxPodsPerNode" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNode"></a>

```typescript
public readonly maxPodsPerNode: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAwsNodePoolMaxPodsConstraint;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraint">ContainerAwsNodePoolMaxPodsConstraint</a>

---


### ContainerAwsNodePoolTimeoutsOutputReference <a name="ContainerAwsNodePoolTimeoutsOutputReference" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

new containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts">ContainerAwsNodePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerAwsNodePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts">ContainerAwsNodePoolTimeouts</a>

---


### ContainerAwsNodePoolUpdateSettingsOutputReference <a name="ContainerAwsNodePoolUpdateSettingsOutputReference" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

new containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.putSurgeSettings">putSurgeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.resetSurgeSettings">resetSurgeSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSurgeSettings` <a name="putSurgeSettings" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.putSurgeSettings"></a>

```typescript
public putSurgeSettings(value: ContainerAwsNodePoolUpdateSettingsSurgeSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.putSurgeSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettings">ContainerAwsNodePoolUpdateSettingsSurgeSettings</a>

---

##### `resetSurgeSettings` <a name="resetSurgeSettings" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.resetSurgeSettings"></a>

```typescript
public resetSurgeSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.property.surgeSettings">surgeSettings</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference">ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.property.surgeSettingsInput">surgeSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettings">ContainerAwsNodePoolUpdateSettingsSurgeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettings">ContainerAwsNodePoolUpdateSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `surgeSettings`<sup>Required</sup> <a name="surgeSettings" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.property.surgeSettings"></a>

```typescript
public readonly surgeSettings: ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference">ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference</a>

---

##### `surgeSettingsInput`<sup>Optional</sup> <a name="surgeSettingsInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.property.surgeSettingsInput"></a>

```typescript
public readonly surgeSettingsInput: ContainerAwsNodePoolUpdateSettingsSurgeSettings;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettings">ContainerAwsNodePoolUpdateSettingsSurgeSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAwsNodePoolUpdateSettings;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettings">ContainerAwsNodePoolUpdateSettings</a>

---


### ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference <a name="ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.Initializer"></a>

```typescript
import { containerAwsNodePool } from '@cdktf/provider-google'

new containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.resetMaxSurge">resetMaxSurge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.resetMaxUnavailable">resetMaxUnavailable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxSurge` <a name="resetMaxSurge" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.resetMaxSurge"></a>

```typescript
public resetMaxSurge(): void
```

##### `resetMaxUnavailable` <a name="resetMaxUnavailable" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.resetMaxUnavailable"></a>

```typescript
public resetMaxUnavailable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.maxSurgeInput">maxSurgeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.maxUnavailableInput">maxUnavailableInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.maxSurge">maxSurge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.maxUnavailable">maxUnavailable</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettings">ContainerAwsNodePoolUpdateSettingsSurgeSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxSurgeInput`<sup>Optional</sup> <a name="maxSurgeInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.maxSurgeInput"></a>

```typescript
public readonly maxSurgeInput: number;
```

- *Type:* number

---

##### `maxUnavailableInput`<sup>Optional</sup> <a name="maxUnavailableInput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.maxUnavailableInput"></a>

```typescript
public readonly maxUnavailableInput: number;
```

- *Type:* number

---

##### `maxSurge`<sup>Required</sup> <a name="maxSurge" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.maxSurge"></a>

```typescript
public readonly maxSurge: number;
```

- *Type:* number

---

##### `maxUnavailable`<sup>Required</sup> <a name="maxUnavailable" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.maxUnavailable"></a>

```typescript
public readonly maxUnavailable: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAwsNodePoolUpdateSettingsSurgeSettings;
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolUpdateSettingsSurgeSettings">ContainerAwsNodePoolUpdateSettingsSurgeSettings</a>

---



