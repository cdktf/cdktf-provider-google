# `edgecontainerVpnConnection` Submodule <a name="`edgecontainerVpnConnection` Submodule" id="@cdktf/provider-google.edgecontainerVpnConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EdgecontainerVpnConnection <a name="EdgecontainerVpnConnection" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/edgecontainer_vpn_connection google_edgecontainer_vpn_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer"></a>

```typescript
import { edgecontainerVpnConnection } from '@cdktf/provider-google'

new edgecontainerVpnConnection.EdgecontainerVpnConnection(scope: Construct, id: string, config: EdgecontainerVpnConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig">EdgecontainerVpnConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig">EdgecontainerVpnConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.putVpcProject">putVpcProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetEnableHighAvailability">resetEnableHighAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetNatGatewayIp">resetNatGatewayIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetRouter">resetRouter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetVpc">resetVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetVpcProject">resetVpcProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: EdgecontainerVpnConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts">EdgecontainerVpnConnectionTimeouts</a>

---

##### `putVpcProject` <a name="putVpcProject" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.putVpcProject"></a>

```typescript
public putVpcProject(value: EdgecontainerVpnConnectionVpcProject): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.putVpcProject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a>

---

##### `resetEnableHighAvailability` <a name="resetEnableHighAvailability" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetEnableHighAvailability"></a>

```typescript
public resetEnableHighAvailability(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetNatGatewayIp` <a name="resetNatGatewayIp" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetNatGatewayIp"></a>

```typescript
public resetNatGatewayIp(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRouter` <a name="resetRouter" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetRouter"></a>

```typescript
public resetRouter(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpc` <a name="resetVpc" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetVpc"></a>

```typescript
public resetVpc(): void
```

##### `resetVpcProject` <a name="resetVpcProject" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetVpcProject"></a>

```typescript
public resetVpcProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EdgecontainerVpnConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isConstruct"></a>

```typescript
import { edgecontainerVpnConnection } from '@cdktf/provider-google'

edgecontainerVpnConnection.EdgecontainerVpnConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isTerraformElement"></a>

```typescript
import { edgecontainerVpnConnection } from '@cdktf/provider-google'

edgecontainerVpnConnection.EdgecontainerVpnConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isTerraformResource"></a>

```typescript
import { edgecontainerVpnConnection } from '@cdktf/provider-google'

edgecontainerVpnConnection.EdgecontainerVpnConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.generateConfigForImport"></a>

```typescript
import { edgecontainerVpnConnection } from '@cdktf/provider-google'

edgecontainerVpnConnection.EdgecontainerVpnConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EdgecontainerVpnConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EdgecontainerVpnConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EdgecontainerVpnConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/edgecontainer_vpn_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EdgecontainerVpnConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.details">details</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList">EdgecontainerVpnConnectionDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference">EdgecontainerVpnConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpcProject">vpcProject</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference">EdgecontainerVpnConnectionVpcProjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.enableHighAvailabilityInput">enableHighAvailabilityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.natGatewayIpInput">natGatewayIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.routerInput">routerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts">EdgecontainerVpnConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpcInput">vpcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpcProjectInput">vpcProjectInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.enableHighAvailability">enableHighAvailability</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.natGatewayIp">natGatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.router">router</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpc">vpc</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.details"></a>

```typescript
public readonly details: EdgecontainerVpnConnectionDetailsList;
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList">EdgecontainerVpnConnectionDetailsList</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.timeouts"></a>

```typescript
public readonly timeouts: EdgecontainerVpnConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference">EdgecontainerVpnConnectionTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `vpcProject`<sup>Required</sup> <a name="vpcProject" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpcProject"></a>

```typescript
public readonly vpcProject: EdgecontainerVpnConnectionVpcProjectOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference">EdgecontainerVpnConnectionVpcProjectOutputReference</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `enableHighAvailabilityInput`<sup>Optional</sup> <a name="enableHighAvailabilityInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.enableHighAvailabilityInput"></a>

```typescript
public readonly enableHighAvailabilityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `natGatewayIpInput`<sup>Optional</sup> <a name="natGatewayIpInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.natGatewayIpInput"></a>

```typescript
public readonly natGatewayIpInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `routerInput`<sup>Optional</sup> <a name="routerInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.routerInput"></a>

```typescript
public readonly routerInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | EdgecontainerVpnConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts">EdgecontainerVpnConnectionTimeouts</a>

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpcInput"></a>

```typescript
public readonly vpcInput: string;
```

- *Type:* string

---

##### `vpcProjectInput`<sup>Optional</sup> <a name="vpcProjectInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpcProjectInput"></a>

```typescript
public readonly vpcProjectInput: EdgecontainerVpnConnectionVpcProject;
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `enableHighAvailability`<sup>Required</sup> <a name="enableHighAvailability" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.enableHighAvailability"></a>

```typescript
public readonly enableHighAvailability: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `natGatewayIp`<sup>Required</sup> <a name="natGatewayIp" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.natGatewayIp"></a>

```typescript
public readonly natGatewayIp: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.router"></a>

```typescript
public readonly router: string;
```

- *Type:* string

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpc"></a>

```typescript
public readonly vpc: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EdgecontainerVpnConnectionConfig <a name="EdgecontainerVpnConnectionConfig" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.Initializer"></a>

```typescript
import { edgecontainerVpnConnection } from '@cdktf/provider-google'

const edgecontainerVpnConnectionConfig: edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.cluster">cluster</a></code> | <code>string</code> | The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.location">location</a></code> | <code>string</code> | Google Cloud Platform location. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.name">name</a></code> | <code>string</code> | The resource name of VPN connection. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.enableHighAvailability">enableHighAvailability</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this VPN connection has HA enabled on cluster side. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/edgecontainer_vpn_connection#id EdgecontainerVpnConnection#id}. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels associated with this resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.natGatewayIp">natGatewayIp</a></code> | <code>string</code> | NAT gateway IP, or WAN IP address. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/edgecontainer_vpn_connection#project EdgecontainerVpnConnection#project}. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.router">router</a></code> | <code>string</code> | The VPN connection Cloud Router name. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts">EdgecontainerVpnConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.vpc">vpc</a></code> | <code>string</code> | The network ID of VPC to connect to. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.vpcProject">vpcProject</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a></code> | vpc_project block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/edgecontainer_vpn_connection#cluster EdgecontainerVpnConnection#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Google Cloud Platform location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/edgecontainer_vpn_connection#location EdgecontainerVpnConnection#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name of VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/edgecontainer_vpn_connection#name EdgecontainerVpnConnection#name}

---

##### `enableHighAvailability`<sup>Optional</sup> <a name="enableHighAvailability" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.enableHighAvailability"></a>

```typescript
public readonly enableHighAvailability: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this VPN connection has HA enabled on cluster side.

If enabled, when creating VPN connection we will attempt to use 2 ANG floating IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/edgecontainer_vpn_connection#enable_high_availability EdgecontainerVpnConnection#enable_high_availability}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/edgecontainer_vpn_connection#id EdgecontainerVpnConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels associated with this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/edgecontainer_vpn_connection#labels EdgecontainerVpnConnection#labels}

---

##### `natGatewayIp`<sup>Optional</sup> <a name="natGatewayIp" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.natGatewayIp"></a>

```typescript
public readonly natGatewayIp: string;
```

- *Type:* string

NAT gateway IP, or WAN IP address.

If a customer has multiple NAT IPs, the customer needs to configure NAT such that only one external IP maps to the GMEC Anthos cluster.
This is empty if NAT is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/edgecontainer_vpn_connection#nat_gateway_ip EdgecontainerVpnConnection#nat_gateway_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/edgecontainer_vpn_connection#project EdgecontainerVpnConnection#project}.

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.router"></a>

```typescript
public readonly router: string;
```

- *Type:* string

The VPN connection Cloud Router name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/edgecontainer_vpn_connection#router EdgecontainerVpnConnection#router}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EdgecontainerVpnConnectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts">EdgecontainerVpnConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/edgecontainer_vpn_connection#timeouts EdgecontainerVpnConnection#timeouts}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.vpc"></a>

```typescript
public readonly vpc: string;
```

- *Type:* string

The network ID of VPC to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/edgecontainer_vpn_connection#vpc EdgecontainerVpnConnection#vpc}

---

##### `vpcProject`<sup>Optional</sup> <a name="vpcProject" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.vpcProject"></a>

```typescript
public readonly vpcProject: EdgecontainerVpnConnectionVpcProject;
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a>

vpc_project block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/edgecontainer_vpn_connection#vpc_project EdgecontainerVpnConnection#vpc_project}

---

### EdgecontainerVpnConnectionDetails <a name="EdgecontainerVpnConnectionDetails" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetails.Initializer"></a>

```typescript
import { edgecontainerVpnConnection } from '@cdktf/provider-google'

const edgecontainerVpnConnectionDetails: edgecontainerVpnConnection.EdgecontainerVpnConnectionDetails = { ... }
```


### EdgecontainerVpnConnectionDetailsCloudRouter <a name="EdgecontainerVpnConnectionDetailsCloudRouter" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouter.Initializer"></a>

```typescript
import { edgecontainerVpnConnection } from '@cdktf/provider-google'

const edgecontainerVpnConnectionDetailsCloudRouter: edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouter = { ... }
```


### EdgecontainerVpnConnectionDetailsCloudVpns <a name="EdgecontainerVpnConnectionDetailsCloudVpns" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpns.Initializer"></a>

```typescript
import { edgecontainerVpnConnection } from '@cdktf/provider-google'

const edgecontainerVpnConnectionDetailsCloudVpns: edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpns = { ... }
```


### EdgecontainerVpnConnectionTimeouts <a name="EdgecontainerVpnConnectionTimeouts" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.Initializer"></a>

```typescript
import { edgecontainerVpnConnection } from '@cdktf/provider-google'

const edgecontainerVpnConnectionTimeouts: edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/edgecontainer_vpn_connection#create EdgecontainerVpnConnection#create}. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/edgecontainer_vpn_connection#delete EdgecontainerVpnConnection#delete}. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/edgecontainer_vpn_connection#update EdgecontainerVpnConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/edgecontainer_vpn_connection#create EdgecontainerVpnConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/edgecontainer_vpn_connection#delete EdgecontainerVpnConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/edgecontainer_vpn_connection#update EdgecontainerVpnConnection#update}.

---

### EdgecontainerVpnConnectionVpcProject <a name="EdgecontainerVpnConnectionVpcProject" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject.Initializer"></a>

```typescript
import { edgecontainerVpnConnection } from '@cdktf/provider-google'

const edgecontainerVpnConnectionVpcProject: edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject.property.projectId">projectId</a></code> | <code>string</code> | The project of the VPC to connect to. If not specified, it is the same as the cluster project. |

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The project of the VPC to connect to. If not specified, it is the same as the cluster project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.27.0/docs/resources/edgecontainer_vpn_connection#project_id EdgecontainerVpnConnection#project_id}

---

## Classes <a name="Classes" id="Classes"></a>

### EdgecontainerVpnConnectionDetailsCloudRouterList <a name="EdgecontainerVpnConnectionDetailsCloudRouterList" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer"></a>

```typescript
import { edgecontainerVpnConnection } from '@cdktf/provider-google'

new edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.get"></a>

```typescript
public get(index: number): EdgecontainerVpnConnectionDetailsCloudRouterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### EdgecontainerVpnConnectionDetailsCloudRouterOutputReference <a name="EdgecontainerVpnConnectionDetailsCloudRouterOutputReference" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer"></a>

```typescript
import { edgecontainerVpnConnection } from '@cdktf/provider-google'

new edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouter">EdgecontainerVpnConnectionDetailsCloudRouter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EdgecontainerVpnConnectionDetailsCloudRouter;
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouter">EdgecontainerVpnConnectionDetailsCloudRouter</a>

---


### EdgecontainerVpnConnectionDetailsCloudVpnsList <a name="EdgecontainerVpnConnectionDetailsCloudVpnsList" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer"></a>

```typescript
import { edgecontainerVpnConnection } from '@cdktf/provider-google'

new edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.get"></a>

```typescript
public get(index: number): EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference <a name="EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer"></a>

```typescript
import { edgecontainerVpnConnection } from '@cdktf/provider-google'

new edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.gateway">gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpns">EdgecontainerVpnConnectionDetailsCloudVpns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EdgecontainerVpnConnectionDetailsCloudVpns;
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpns">EdgecontainerVpnConnectionDetailsCloudVpns</a>

---


### EdgecontainerVpnConnectionDetailsList <a name="EdgecontainerVpnConnectionDetailsList" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer"></a>

```typescript
import { edgecontainerVpnConnection } from '@cdktf/provider-google'

new edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.get"></a>

```typescript
public get(index: number): EdgecontainerVpnConnectionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### EdgecontainerVpnConnectionDetailsOutputReference <a name="EdgecontainerVpnConnectionDetailsOutputReference" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer"></a>

```typescript
import { edgecontainerVpnConnection } from '@cdktf/provider-google'

new edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.cloudRouter">cloudRouter</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList">EdgecontainerVpnConnectionDetailsCloudRouterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.cloudVpns">cloudVpns</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList">EdgecontainerVpnConnectionDetailsCloudVpnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.error">error</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetails">EdgecontainerVpnConnectionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudRouter`<sup>Required</sup> <a name="cloudRouter" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.cloudRouter"></a>

```typescript
public readonly cloudRouter: EdgecontainerVpnConnectionDetailsCloudRouterList;
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList">EdgecontainerVpnConnectionDetailsCloudRouterList</a>

---

##### `cloudVpns`<sup>Required</sup> <a name="cloudVpns" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.cloudVpns"></a>

```typescript
public readonly cloudVpns: EdgecontainerVpnConnectionDetailsCloudVpnsList;
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList">EdgecontainerVpnConnectionDetailsCloudVpnsList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.error"></a>

```typescript
public readonly error: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EdgecontainerVpnConnectionDetails;
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetails">EdgecontainerVpnConnectionDetails</a>

---


### EdgecontainerVpnConnectionTimeoutsOutputReference <a name="EdgecontainerVpnConnectionTimeoutsOutputReference" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { edgecontainerVpnConnection } from '@cdktf/provider-google'

new edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts">EdgecontainerVpnConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EdgecontainerVpnConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts">EdgecontainerVpnConnectionTimeouts</a>

---


### EdgecontainerVpnConnectionVpcProjectOutputReference <a name="EdgecontainerVpnConnectionVpcProjectOutputReference" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.Initializer"></a>

```typescript
import { edgecontainerVpnConnection } from '@cdktf/provider-google'

new edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EdgecontainerVpnConnectionVpcProject;
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a>

---



