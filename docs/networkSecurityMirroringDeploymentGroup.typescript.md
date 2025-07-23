# `networkSecurityMirroringDeploymentGroup` Submodule <a name="`networkSecurityMirroringDeploymentGroup` Submodule" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityMirroringDeploymentGroup <a name="NetworkSecurityMirroringDeploymentGroup" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_mirroring_deployment_group google_network_security_mirroring_deployment_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.Initializer"></a>

```typescript
import { networkSecurityMirroringDeploymentGroup } from '@cdktf/provider-google'

new networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup(scope: Construct, id: string, config: NetworkSecurityMirroringDeploymentGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig">NetworkSecurityMirroringDeploymentGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig">NetworkSecurityMirroringDeploymentGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkSecurityMirroringDeploymentGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeouts">NetworkSecurityMirroringDeploymentGroupTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityMirroringDeploymentGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.isConstruct"></a>

```typescript
import { networkSecurityMirroringDeploymentGroup } from '@cdktf/provider-google'

networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.isTerraformElement"></a>

```typescript
import { networkSecurityMirroringDeploymentGroup } from '@cdktf/provider-google'

networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.isTerraformResource"></a>

```typescript
import { networkSecurityMirroringDeploymentGroup } from '@cdktf/provider-google'

networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.generateConfigForImport"></a>

```typescript
import { networkSecurityMirroringDeploymentGroup } from '@cdktf/provider-google'

networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkSecurityMirroringDeploymentGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkSecurityMirroringDeploymentGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkSecurityMirroringDeploymentGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_mirroring_deployment_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityMirroringDeploymentGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.connectedEndpointGroups">connectedEndpointGroups</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList">NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.locations">locations</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList">NetworkSecurityMirroringDeploymentGroupLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference">NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.mirroringDeploymentGroupIdInput">mirroringDeploymentGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeouts">NetworkSecurityMirroringDeploymentGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.mirroringDeploymentGroupId">mirroringDeploymentGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectedEndpointGroups`<sup>Required</sup> <a name="connectedEndpointGroups" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.connectedEndpointGroups"></a>

```typescript
public readonly connectedEndpointGroups: NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList">NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.locations"></a>

```typescript
public readonly locations: NetworkSecurityMirroringDeploymentGroupLocationsList;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList">NetworkSecurityMirroringDeploymentGroupLocationsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference">NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `mirroringDeploymentGroupIdInput`<sup>Optional</sup> <a name="mirroringDeploymentGroupIdInput" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.mirroringDeploymentGroupIdInput"></a>

```typescript
public readonly mirroringDeploymentGroupIdInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkSecurityMirroringDeploymentGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeouts">NetworkSecurityMirroringDeploymentGroupTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `mirroringDeploymentGroupId`<sup>Required</sup> <a name="mirroringDeploymentGroupId" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.mirroringDeploymentGroupId"></a>

```typescript
public readonly mirroringDeploymentGroupId: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityMirroringDeploymentGroupConfig <a name="NetworkSecurityMirroringDeploymentGroupConfig" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.Initializer"></a>

```typescript
import { networkSecurityMirroringDeploymentGroup } from '@cdktf/provider-google'

const networkSecurityMirroringDeploymentGroupConfig: networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.location">location</a></code> | <code>string</code> | The cloud location of the deployment group, currently restricted to 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.mirroringDeploymentGroupId">mirroringDeploymentGroupId</a></code> | <code>string</code> | The ID to use for the new deployment group, which will become the final component of the deployment group's resource name. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.network">network</a></code> | <code>string</code> | The network that will be used for all child deployments, for example: 'projects/{project}/global/networks/{network}'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.description">description</a></code> | <code>string</code> | User-provided description of the deployment group. Used as additional context for the deployment group. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_mirroring_deployment_group#id NetworkSecurityMirroringDeploymentGroup#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_mirroring_deployment_group#project NetworkSecurityMirroringDeploymentGroup#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeouts">NetworkSecurityMirroringDeploymentGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The cloud location of the deployment group, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_mirroring_deployment_group#location NetworkSecurityMirroringDeploymentGroup#location}

---

##### `mirroringDeploymentGroupId`<sup>Required</sup> <a name="mirroringDeploymentGroupId" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.mirroringDeploymentGroupId"></a>

```typescript
public readonly mirroringDeploymentGroupId: string;
```

- *Type:* string

The ID to use for the new deployment group, which will become the final component of the deployment group's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_mirroring_deployment_group#mirroring_deployment_group_id NetworkSecurityMirroringDeploymentGroup#mirroring_deployment_group_id}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The network that will be used for all child deployments, for example: 'projects/{project}/global/networks/{network}'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_mirroring_deployment_group#network NetworkSecurityMirroringDeploymentGroup#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

User-provided description of the deployment group. Used as additional context for the deployment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_mirroring_deployment_group#description NetworkSecurityMirroringDeploymentGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_mirroring_deployment_group#id NetworkSecurityMirroringDeploymentGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_mirroring_deployment_group#labels NetworkSecurityMirroringDeploymentGroup#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_mirroring_deployment_group#project NetworkSecurityMirroringDeploymentGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkSecurityMirroringDeploymentGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeouts">NetworkSecurityMirroringDeploymentGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_mirroring_deployment_group#timeouts NetworkSecurityMirroringDeploymentGroup#timeouts}

---

### NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroups <a name="NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroups" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroups.Initializer"></a>

```typescript
import { networkSecurityMirroringDeploymentGroup } from '@cdktf/provider-google'

const networkSecurityMirroringDeploymentGroupConnectedEndpointGroups: networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroups = { ... }
```


### NetworkSecurityMirroringDeploymentGroupLocations <a name="NetworkSecurityMirroringDeploymentGroupLocations" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocations.Initializer"></a>

```typescript
import { networkSecurityMirroringDeploymentGroup } from '@cdktf/provider-google'

const networkSecurityMirroringDeploymentGroupLocations: networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocations = { ... }
```


### NetworkSecurityMirroringDeploymentGroupTimeouts <a name="NetworkSecurityMirroringDeploymentGroupTimeouts" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeouts.Initializer"></a>

```typescript
import { networkSecurityMirroringDeploymentGroup } from '@cdktf/provider-google'

const networkSecurityMirroringDeploymentGroupTimeouts: networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_mirroring_deployment_group#create NetworkSecurityMirroringDeploymentGroup#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_mirroring_deployment_group#delete NetworkSecurityMirroringDeploymentGroup#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_mirroring_deployment_group#update NetworkSecurityMirroringDeploymentGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_mirroring_deployment_group#create NetworkSecurityMirroringDeploymentGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_mirroring_deployment_group#delete NetworkSecurityMirroringDeploymentGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_security_mirroring_deployment_group#update NetworkSecurityMirroringDeploymentGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList <a name="NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.Initializer"></a>

```typescript
import { networkSecurityMirroringDeploymentGroup } from '@cdktf/provider-google'

new networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.get"></a>

```typescript
public get(index: number): NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference <a name="NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer"></a>

```typescript
import { networkSecurityMirroringDeploymentGroup } from '@cdktf/provider-google'

new networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroups">NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroups;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroups">NetworkSecurityMirroringDeploymentGroupConnectedEndpointGroups</a>

---


### NetworkSecurityMirroringDeploymentGroupLocationsList <a name="NetworkSecurityMirroringDeploymentGroupLocationsList" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList.Initializer"></a>

```typescript
import { networkSecurityMirroringDeploymentGroup } from '@cdktf/provider-google'

new networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList.get"></a>

```typescript
public get(index: number): NetworkSecurityMirroringDeploymentGroupLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkSecurityMirroringDeploymentGroupLocationsOutputReference <a name="NetworkSecurityMirroringDeploymentGroupLocationsOutputReference" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.Initializer"></a>

```typescript
import { networkSecurityMirroringDeploymentGroup } from '@cdktf/provider-google'

new networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocations">NetworkSecurityMirroringDeploymentGroupLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkSecurityMirroringDeploymentGroupLocations;
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupLocations">NetworkSecurityMirroringDeploymentGroupLocations</a>

---


### NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference <a name="NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkSecurityMirroringDeploymentGroup } from '@cdktf/provider-google'

new networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeouts">NetworkSecurityMirroringDeploymentGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkSecurityMirroringDeploymentGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkSecurityMirroringDeploymentGroup.NetworkSecurityMirroringDeploymentGroupTimeouts">NetworkSecurityMirroringDeploymentGroupTimeouts</a>

---



