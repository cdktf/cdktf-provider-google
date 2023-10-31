# `google_gkeonprem_vmware_node_pool`

Refer to the Terraform Registory for docs: [`google_gkeonprem_vmware_node_pool`](https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool).

# `gkeonpremVmwareNodePool` Submodule <a name="`gkeonpremVmwareNodePool` Submodule" id="@cdktf/provider-google.gkeonpremVmwareNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeonpremVmwareNodePool <a name="GkeonpremVmwareNodePool" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool google_gkeonprem_vmware_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

new gkeonpremVmwareNodePool.GkeonpremVmwareNodePool(scope: Construct, id: string, config: GkeonpremVmwareNodePoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig">GkeonpremVmwareNodePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig">GkeonpremVmwareNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putNodePoolAutoscaling">putNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetNodePoolAutoscaling">resetNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putConfig"></a>

```typescript
public putConfig(value: GkeonpremVmwareNodePoolConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a>

---

##### `putNodePoolAutoscaling` <a name="putNodePoolAutoscaling" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putNodePoolAutoscaling"></a>

```typescript
public putNodePoolAutoscaling(value: GkeonpremVmwareNodePoolNodePoolAutoscaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putNodePoolAutoscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putTimeouts"></a>

```typescript
public putTimeouts(value: GkeonpremVmwareNodePoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts">GkeonpremVmwareNodePoolTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNodePoolAutoscaling` <a name="resetNodePoolAutoscaling" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetNodePoolAutoscaling"></a>

```typescript
public resetNodePoolAutoscaling(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GkeonpremVmwareNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isConstruct"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isTerraformElement"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isTerraformResource"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.generateConfigForImport"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GkeonpremVmwareNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GkeonpremVmwareNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GkeonpremVmwareNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GkeonpremVmwareNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference">GkeonpremVmwareNodePoolConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.deleteTime">deleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.nodePoolAutoscaling">nodePoolAutoscaling</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference">GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.onPremVersion">onPremVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList">GkeonpremVmwareNodePoolStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference">GkeonpremVmwareNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.nodePoolAutoscalingInput">nodePoolAutoscalingInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts">GkeonpremVmwareNodePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.vmwareClusterInput">vmwareClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.vmwareCluster">vmwareCluster</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.config"></a>

```typescript
public readonly config: GkeonpremVmwareNodePoolConfigAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference">GkeonpremVmwareNodePoolConfigAOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.deleteTime"></a>

```typescript
public readonly deleteTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `nodePoolAutoscaling`<sup>Required</sup> <a name="nodePoolAutoscaling" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.nodePoolAutoscaling"></a>

```typescript
public readonly nodePoolAutoscaling: GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference">GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference</a>

---

##### `onPremVersion`<sup>Required</sup> <a name="onPremVersion" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.onPremVersion"></a>

```typescript
public readonly onPremVersion: string;
```

- *Type:* string

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.status"></a>

```typescript
public readonly status: GkeonpremVmwareNodePoolStatusList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList">GkeonpremVmwareNodePoolStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.timeouts"></a>

```typescript
public readonly timeouts: GkeonpremVmwareNodePoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference">GkeonpremVmwareNodePoolTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.configInput"></a>

```typescript
public readonly configInput: GkeonpremVmwareNodePoolConfigA;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodePoolAutoscalingInput`<sup>Optional</sup> <a name="nodePoolAutoscalingInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.nodePoolAutoscalingInput"></a>

```typescript
public readonly nodePoolAutoscalingInput: GkeonpremVmwareNodePoolNodePoolAutoscaling;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GkeonpremVmwareNodePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts">GkeonpremVmwareNodePoolTimeouts</a>

---

##### `vmwareClusterInput`<sup>Optional</sup> <a name="vmwareClusterInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.vmwareClusterInput"></a>

```typescript
public readonly vmwareClusterInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `vmwareCluster`<sup>Required</sup> <a name="vmwareCluster" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.vmwareCluster"></a>

```typescript
public readonly vmwareCluster: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeonpremVmwareNodePoolConfig <a name="GkeonpremVmwareNodePoolConfig" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.Initializer"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

const gkeonpremVmwareNodePoolConfig: gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.location">location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.name">name</a></code> | <code>string</code> | The vmware node pool name. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.vmwareCluster">vmwareCluster</a></code> | <code>string</code> | The cluster this node pool belongs to. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Annotations on the node Pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name for the node pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#id GkeonpremVmwareNodePool#id}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.nodePoolAutoscaling">nodePoolAutoscaling</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a></code> | node_pool_autoscaling block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#project GkeonpremVmwareNodePool#project}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts">GkeonpremVmwareNodePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.config"></a>

```typescript
public readonly config: GkeonpremVmwareNodePoolConfigA;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#config GkeonpremVmwareNodePool#config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#location GkeonpremVmwareNodePool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The vmware node pool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#name GkeonpremVmwareNodePool#name}

---

##### `vmwareCluster`<sup>Required</sup> <a name="vmwareCluster" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.vmwareCluster"></a>

```typescript
public readonly vmwareCluster: string;
```

- *Type:* string

The cluster this node pool belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#vmware_cluster GkeonpremVmwareNodePool#vmware_cluster}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Annotations on the node Pool.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.


**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#annotations GkeonpremVmwareNodePool#annotations}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name for the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#display_name GkeonpremVmwareNodePool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#id GkeonpremVmwareNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nodePoolAutoscaling`<sup>Optional</sup> <a name="nodePoolAutoscaling" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.nodePoolAutoscaling"></a>

```typescript
public readonly nodePoolAutoscaling: GkeonpremVmwareNodePoolNodePoolAutoscaling;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a>

node_pool_autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#node_pool_autoscaling GkeonpremVmwareNodePool#node_pool_autoscaling}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#project GkeonpremVmwareNodePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GkeonpremVmwareNodePoolTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts">GkeonpremVmwareNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#timeouts GkeonpremVmwareNodePool#timeouts}

---

### GkeonpremVmwareNodePoolConfigA <a name="GkeonpremVmwareNodePoolConfigA" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.Initializer"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

const gkeonpremVmwareNodePoolConfigA: gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.imageType">imageType</a></code> | <code>string</code> | The OS image to be used for each node in a node pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>number</code> | VMware disk size to be used during creation. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.cpus">cpus</a></code> | <code>number</code> | The number of CPUs for each node in the node pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.enableLoadBalancer">enableLoadBalancer</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow node pool traffic to be load balanced. Only works for clusters with MetalLB load balancers. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.image">image</a></code> | <code>string</code> | The OS image name in vCenter, only valid when using Windows. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.memoryMb">memoryMb</a></code> | <code>number</code> | The megabytes of memory for each node in the node pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.replicas">replicas</a></code> | <code>number</code> | The number of nodes in the node pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.taints">taints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints">GkeonpremVmwareNodePoolConfigTaints</a>[]</code> | taints block. |

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

The OS image to be used for each node in a node pool.

Currently 'cos', 'ubuntu', 'ubuntu_containerd' and 'windows' are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#image_type GkeonpremVmwareNodePool#image_type}

---

##### `bootDiskSizeGb`<sup>Optional</sup> <a name="bootDiskSizeGb" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.bootDiskSizeGb"></a>

```typescript
public readonly bootDiskSizeGb: number;
```

- *Type:* number

VMware disk size to be used during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#boot_disk_size_gb GkeonpremVmwareNodePool#boot_disk_size_gb}

---

##### `cpus`<sup>Optional</sup> <a name="cpus" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.cpus"></a>

```typescript
public readonly cpus: number;
```

- *Type:* number

The number of CPUs for each node in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#cpus GkeonpremVmwareNodePool#cpus}

---

##### `enableLoadBalancer`<sup>Optional</sup> <a name="enableLoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.enableLoadBalancer"></a>

```typescript
public readonly enableLoadBalancer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow node pool traffic to be load balanced. Only works for clusters with MetalLB load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#enable_load_balancer GkeonpremVmwareNodePool#enable_load_balancer}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

The OS image name in vCenter, only valid when using Windows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#image GkeonpremVmwareNodePool#image}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s) that
Kubernetes may apply to the node.
In case of conflict in label keys, the applied set may differ depending on
the Kubernetes version -- it's best to assume the behavior is undefined
and conflicts should be avoided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#labels GkeonpremVmwareNodePool#labels}

---

##### `memoryMb`<sup>Optional</sup> <a name="memoryMb" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.memoryMb"></a>

```typescript
public readonly memoryMb: number;
```

- *Type:* number

The megabytes of memory for each node in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#memory_mb GkeonpremVmwareNodePool#memory_mb}

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

The number of nodes in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#replicas GkeonpremVmwareNodePool#replicas}

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.taints"></a>

```typescript
public readonly taints: IResolvable | GkeonpremVmwareNodePoolConfigTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints">GkeonpremVmwareNodePoolConfigTaints</a>[]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#taints GkeonpremVmwareNodePool#taints}

---

### GkeonpremVmwareNodePoolConfigTaints <a name="GkeonpremVmwareNodePoolConfigTaints" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.Initializer"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

const gkeonpremVmwareNodePoolConfigTaints: gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.property.key">key</a></code> | <code>string</code> | Key associated with the effect. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.property.value">value</a></code> | <code>string</code> | Value associated with the effect. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.property.effect">effect</a></code> | <code>string</code> | Available taint effects. Possible values: ["EFFECT_UNSPECIFIED", "NO_SCHEDULE", "PREFER_NO_SCHEDULE", "NO_EXECUTE"]. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Key associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#key GkeonpremVmwareNodePool#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#value GkeonpremVmwareNodePool#value}

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

Available taint effects. Possible values: ["EFFECT_UNSPECIFIED", "NO_SCHEDULE", "PREFER_NO_SCHEDULE", "NO_EXECUTE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#effect GkeonpremVmwareNodePool#effect}

---

### GkeonpremVmwareNodePoolConfigVsphereConfig <a name="GkeonpremVmwareNodePoolConfigVsphereConfig" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig.Initializer"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

const gkeonpremVmwareNodePoolConfigVsphereConfig: gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig = { ... }
```


### GkeonpremVmwareNodePoolConfigVsphereConfigTags <a name="GkeonpremVmwareNodePoolConfigVsphereConfigTags" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags.Initializer"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

const gkeonpremVmwareNodePoolConfigVsphereConfigTags: gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags = { ... }
```


### GkeonpremVmwareNodePoolNodePoolAutoscaling <a name="GkeonpremVmwareNodePoolNodePoolAutoscaling" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling.Initializer"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

const gkeonpremVmwareNodePoolNodePoolAutoscaling: gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling.property.maxReplicas">maxReplicas</a></code> | <code>number</code> | Maximum number of replicas in the NodePool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling.property.minReplicas">minReplicas</a></code> | <code>number</code> | Minimum number of replicas in the NodePool. |

---

##### `maxReplicas`<sup>Required</sup> <a name="maxReplicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling.property.maxReplicas"></a>

```typescript
public readonly maxReplicas: number;
```

- *Type:* number

Maximum number of replicas in the NodePool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#max_replicas GkeonpremVmwareNodePool#max_replicas}

---

##### `minReplicas`<sup>Required</sup> <a name="minReplicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling.property.minReplicas"></a>

```typescript
public readonly minReplicas: number;
```

- *Type:* number

Minimum number of replicas in the NodePool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#min_replicas GkeonpremVmwareNodePool#min_replicas}

---

### GkeonpremVmwareNodePoolStatus <a name="GkeonpremVmwareNodePoolStatus" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatus.Initializer"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

const gkeonpremVmwareNodePoolStatus: gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatus = { ... }
```


### GkeonpremVmwareNodePoolStatusConditions <a name="GkeonpremVmwareNodePoolStatusConditions" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditions.Initializer"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

const gkeonpremVmwareNodePoolStatusConditions: gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditions = { ... }
```


### GkeonpremVmwareNodePoolTimeouts <a name="GkeonpremVmwareNodePoolTimeouts" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.Initializer"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

const gkeonpremVmwareNodePoolTimeouts: gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#create GkeonpremVmwareNodePool#create}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#delete GkeonpremVmwareNodePool#delete}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#update GkeonpremVmwareNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#create GkeonpremVmwareNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#delete GkeonpremVmwareNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/gkeonprem_vmware_node_pool#update GkeonpremVmwareNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeonpremVmwareNodePoolConfigAOutputReference <a name="GkeonpremVmwareNodePoolConfigAOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

new gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.putTaints">putTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetBootDiskSizeGb">resetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetCpus">resetCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetEnableLoadBalancer">resetEnableLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetMemoryMb">resetMemoryMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetReplicas">resetReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetTaints">resetTaints</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTaints` <a name="putTaints" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.putTaints"></a>

```typescript
public putTaints(value: IResolvable | GkeonpremVmwareNodePoolConfigTaints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.putTaints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints">GkeonpremVmwareNodePoolConfigTaints</a>[]

---

##### `resetBootDiskSizeGb` <a name="resetBootDiskSizeGb" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetBootDiskSizeGb"></a>

```typescript
public resetBootDiskSizeGb(): void
```

##### `resetCpus` <a name="resetCpus" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetCpus"></a>

```typescript
public resetCpus(): void
```

##### `resetEnableLoadBalancer` <a name="resetEnableLoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetEnableLoadBalancer"></a>

```typescript
public resetEnableLoadBalancer(): void
```

##### `resetImage` <a name="resetImage" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetImage"></a>

```typescript
public resetImage(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMemoryMb` <a name="resetMemoryMb" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetMemoryMb"></a>

```typescript
public resetMemoryMb(): void
```

##### `resetReplicas` <a name="resetReplicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetReplicas"></a>

```typescript
public resetReplicas(): void
```

##### `resetTaints` <a name="resetTaints" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetTaints"></a>

```typescript
public resetTaints(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList">GkeonpremVmwareNodePoolConfigTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.vsphereConfig">vsphereConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList">GkeonpremVmwareNodePoolConfigVsphereConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGbInput">bootDiskSizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.cpusInput">cpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancerInput">enableLoadBalancerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.imageTypeInput">imageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMbInput">memoryMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.replicasInput">replicasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.taintsInput">taintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints">GkeonpremVmwareNodePoolConfigTaints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGb">bootDiskSizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.cpus">cpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancer">enableLoadBalancer</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.imageType">imageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMb">memoryMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.replicas">replicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.taints"></a>

```typescript
public readonly taints: GkeonpremVmwareNodePoolConfigTaintsList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList">GkeonpremVmwareNodePoolConfigTaintsList</a>

---

##### `vsphereConfig`<sup>Required</sup> <a name="vsphereConfig" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.vsphereConfig"></a>

```typescript
public readonly vsphereConfig: GkeonpremVmwareNodePoolConfigVsphereConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList">GkeonpremVmwareNodePoolConfigVsphereConfigList</a>

---

##### `bootDiskSizeGbInput`<sup>Optional</sup> <a name="bootDiskSizeGbInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGbInput"></a>

```typescript
public readonly bootDiskSizeGbInput: number;
```

- *Type:* number

---

##### `cpusInput`<sup>Optional</sup> <a name="cpusInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.cpusInput"></a>

```typescript
public readonly cpusInput: number;
```

- *Type:* number

---

##### `enableLoadBalancerInput`<sup>Optional</sup> <a name="enableLoadBalancerInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancerInput"></a>

```typescript
public readonly enableLoadBalancerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `imageTypeInput`<sup>Optional</sup> <a name="imageTypeInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.imageTypeInput"></a>

```typescript
public readonly imageTypeInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `memoryMbInput`<sup>Optional</sup> <a name="memoryMbInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMbInput"></a>

```typescript
public readonly memoryMbInput: number;
```

- *Type:* number

---

##### `replicasInput`<sup>Optional</sup> <a name="replicasInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.replicasInput"></a>

```typescript
public readonly replicasInput: number;
```

- *Type:* number

---

##### `taintsInput`<sup>Optional</sup> <a name="taintsInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.taintsInput"></a>

```typescript
public readonly taintsInput: IResolvable | GkeonpremVmwareNodePoolConfigTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints">GkeonpremVmwareNodePoolConfigTaints</a>[]

---

##### `bootDiskSizeGb`<sup>Required</sup> <a name="bootDiskSizeGb" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGb"></a>

```typescript
public readonly bootDiskSizeGb: number;
```

- *Type:* number

---

##### `cpus`<sup>Required</sup> <a name="cpus" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.cpus"></a>

```typescript
public readonly cpus: number;
```

- *Type:* number

---

##### `enableLoadBalancer`<sup>Required</sup> <a name="enableLoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancer"></a>

```typescript
public readonly enableLoadBalancer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.imageType"></a>

```typescript
public readonly imageType: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `memoryMb`<sup>Required</sup> <a name="memoryMb" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMb"></a>

```typescript
public readonly memoryMb: number;
```

- *Type:* number

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareNodePoolConfigA;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a>

---


### GkeonpremVmwareNodePoolConfigTaintsList <a name="GkeonpremVmwareNodePoolConfigTaintsList" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

new gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.get"></a>

```typescript
public get(index: number): GkeonpremVmwareNodePoolConfigTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints">GkeonpremVmwareNodePoolConfigTaints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeonpremVmwareNodePoolConfigTaints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints">GkeonpremVmwareNodePoolConfigTaints</a>[]

---


### GkeonpremVmwareNodePoolConfigTaintsOutputReference <a name="GkeonpremVmwareNodePoolConfigTaintsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

new gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.resetEffect">resetEffect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEffect` <a name="resetEffect" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.resetEffect"></a>

```typescript
public resetEffect(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints">GkeonpremVmwareNodePoolConfigTaints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeonpremVmwareNodePoolConfigTaints;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints">GkeonpremVmwareNodePoolConfigTaints</a>

---


### GkeonpremVmwareNodePoolConfigVsphereConfigList <a name="GkeonpremVmwareNodePoolConfigVsphereConfigList" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.Initializer"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

new gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.get"></a>

```typescript
public get(index: number): GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference <a name="GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

new gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.datastore">datastore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList">GkeonpremVmwareNodePoolConfigVsphereConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig">GkeonpremVmwareNodePoolConfigVsphereConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.datastore"></a>

```typescript
public readonly datastore: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.tags"></a>

```typescript
public readonly tags: GkeonpremVmwareNodePoolConfigVsphereConfigTagsList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList">GkeonpremVmwareNodePoolConfigVsphereConfigTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareNodePoolConfigVsphereConfig;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig">GkeonpremVmwareNodePoolConfigVsphereConfig</a>

---


### GkeonpremVmwareNodePoolConfigVsphereConfigTagsList <a name="GkeonpremVmwareNodePoolConfigVsphereConfigTagsList" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

new gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.get"></a>

```typescript
public get(index: number): GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference <a name="GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

new gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags">GkeonpremVmwareNodePoolConfigVsphereConfigTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareNodePoolConfigVsphereConfigTags;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags">GkeonpremVmwareNodePoolConfigVsphereConfigTags</a>

---


### GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference <a name="GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

new gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicasInput">maxReplicasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicasInput">minReplicasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicas">maxReplicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicas">minReplicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxReplicasInput`<sup>Optional</sup> <a name="maxReplicasInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicasInput"></a>

```typescript
public readonly maxReplicasInput: number;
```

- *Type:* number

---

##### `minReplicasInput`<sup>Optional</sup> <a name="minReplicasInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicasInput"></a>

```typescript
public readonly minReplicasInput: number;
```

- *Type:* number

---

##### `maxReplicas`<sup>Required</sup> <a name="maxReplicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicas"></a>

```typescript
public readonly maxReplicas: number;
```

- *Type:* number

---

##### `minReplicas`<sup>Required</sup> <a name="minReplicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicas"></a>

```typescript
public readonly minReplicas: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareNodePoolNodePoolAutoscaling;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a>

---


### GkeonpremVmwareNodePoolStatusConditionsList <a name="GkeonpremVmwareNodePoolStatusConditionsList" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

new gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.get"></a>

```typescript
public get(index: number): GkeonpremVmwareNodePoolStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GkeonpremVmwareNodePoolStatusConditionsOutputReference <a name="GkeonpremVmwareNodePoolStatusConditionsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

new gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditions">GkeonpremVmwareNodePoolStatusConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.lastTransitionTime"></a>

```typescript
public readonly lastTransitionTime: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareNodePoolStatusConditions;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditions">GkeonpremVmwareNodePoolStatusConditions</a>

---


### GkeonpremVmwareNodePoolStatusList <a name="GkeonpremVmwareNodePoolStatusList" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

new gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.get"></a>

```typescript
public get(index: number): GkeonpremVmwareNodePoolStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GkeonpremVmwareNodePoolStatusOutputReference <a name="GkeonpremVmwareNodePoolStatusOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

new gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList">GkeonpremVmwareNodePoolStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatus">GkeonpremVmwareNodePoolStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.conditions"></a>

```typescript
public readonly conditions: GkeonpremVmwareNodePoolStatusConditionsList;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList">GkeonpremVmwareNodePoolStatusConditionsList</a>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GkeonpremVmwareNodePoolStatus;
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatus">GkeonpremVmwareNodePoolStatus</a>

---


### GkeonpremVmwareNodePoolTimeoutsOutputReference <a name="GkeonpremVmwareNodePoolTimeoutsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { gkeonpremVmwareNodePool } from '@cdktf/provider-google'

new gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts">GkeonpremVmwareNodePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GkeonpremVmwareNodePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts">GkeonpremVmwareNodePoolTimeouts</a>

---



