# `sqlSourceRepresentationInstance` Submodule <a name="`sqlSourceRepresentationInstance` Submodule" id="@cdktf/provider-google.sqlSourceRepresentationInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlSourceRepresentationInstance <a name="SqlSourceRepresentationInstance" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance google_sql_source_representation_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_source_representation_instance.SqlSourceRepresentationInstance;

SqlSourceRepresentationInstance.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .databaseVersion(java.lang.String)
    .host(java.lang.String)
    .name(java.lang.String)
//  .caCertificate(java.lang.String)
//  .clientCertificate(java.lang.String)
//  .clientKey(java.lang.String)
//  .dumpFilePath(java.lang.String)
//  .id(java.lang.String)
//  .password(java.lang.String)
//  .port(java.lang.Number)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(SqlSourceRepresentationInstanceTimeouts)
//  .username(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | The MySQL version running on your source database server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.host">host</a></code> | <code>java.lang.String</code> | The IPv4 address and port for the external server, or the the DNS address for the external server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the source representation instance. Use any valid Cloud SQL instance name. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.caCertificate">caCertificate</a></code> | <code>java.lang.String</code> | The CA certificate on the external server. Include only if SSL/TLS is used on the external server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | The client certificate on the external server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.clientKey">clientKey</a></code> | <code>java.lang.String</code> | The private key file for the client certificate on the external server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.dumpFilePath">dumpFilePath</a></code> | <code>java.lang.String</code> | A file in the bucket that contains the data from the external server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#id SqlSourceRepresentationInstance#id}. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | The password for the replication user account. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | The externally accessible port for the source database server. Defaults to 3306. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#project SqlSourceRepresentationInstance#project}. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The Region in which the created instance should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts">SqlSourceRepresentationInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | The replication user account on the external server. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.databaseVersion"></a>

- *Type:* java.lang.String

The MySQL version running on your source database server.

Possible values: ["MYSQL_5_6", "MYSQL_5_7", "MYSQL_8_0", "POSTGRES_9_6", "POSTGRES_10", "POSTGRES_11", "POSTGRES_12", "POSTGRES_13", "POSTGRES_14"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#database_version SqlSourceRepresentationInstance#database_version}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.host"></a>

- *Type:* java.lang.String

The IPv4 address and port for the external server, or the the DNS address for the external server.

If the external server is hosted on Cloud SQL, the port is 5432.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#host SqlSourceRepresentationInstance#host}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the source representation instance. Use any valid Cloud SQL instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#name SqlSourceRepresentationInstance#name}

---

##### `caCertificate`<sup>Optional</sup> <a name="caCertificate" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.caCertificate"></a>

- *Type:* java.lang.String

The CA certificate on the external server. Include only if SSL/TLS is used on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#ca_certificate SqlSourceRepresentationInstance#ca_certificate}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.clientCertificate"></a>

- *Type:* java.lang.String

The client certificate on the external server.

Required only for server-client authentication. Include only if SSL/TLS is used on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#client_certificate SqlSourceRepresentationInstance#client_certificate}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.clientKey"></a>

- *Type:* java.lang.String

The private key file for the client certificate on the external server.

Required only for server-client authentication. Include only if SSL/TLS is used on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#client_key SqlSourceRepresentationInstance#client_key}

---

##### `dumpFilePath`<sup>Optional</sup> <a name="dumpFilePath" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.dumpFilePath"></a>

- *Type:* java.lang.String

A file in the bucket that contains the data from the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#dump_file_path SqlSourceRepresentationInstance#dump_file_path}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#id SqlSourceRepresentationInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.password"></a>

- *Type:* java.lang.String

The password for the replication user account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#password SqlSourceRepresentationInstance#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

The externally accessible port for the source database server. Defaults to 3306.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#port SqlSourceRepresentationInstance#port}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#project SqlSourceRepresentationInstance#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The Region in which the created instance should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#region SqlSourceRepresentationInstance#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts">SqlSourceRepresentationInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#timeouts SqlSourceRepresentationInstance#timeouts}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.Initializer.parameter.username"></a>

- *Type:* java.lang.String

The replication user account on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#username SqlSourceRepresentationInstance#username}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetCaCertificate">resetCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetClientKey">resetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetDumpFilePath">resetDumpFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.putTimeouts"></a>

```java
public void putTimeouts(SqlSourceRepresentationInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts">SqlSourceRepresentationInstanceTimeouts</a>

---

##### `resetCaCertificate` <a name="resetCaCertificate" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetCaCertificate"></a>

```java
public void resetCaCertificate()
```

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetClientCertificate"></a>

```java
public void resetClientCertificate()
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetClientKey"></a>

```java
public void resetClientKey()
```

##### `resetDumpFilePath` <a name="resetDumpFilePath" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetDumpFilePath"></a>

```java
public void resetDumpFilePath()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetId"></a>

```java
public void resetId()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetPort"></a>

```java
public void resetPort()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.resetUsername"></a>

```java
public void resetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SqlSourceRepresentationInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_source_representation_instance.SqlSourceRepresentationInstance;

SqlSourceRepresentationInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_source_representation_instance.SqlSourceRepresentationInstance;

SqlSourceRepresentationInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_source_representation_instance.SqlSourceRepresentationInstance;

SqlSourceRepresentationInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_source_representation_instance.SqlSourceRepresentationInstance;

SqlSourceRepresentationInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SqlSourceRepresentationInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SqlSourceRepresentationInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SqlSourceRepresentationInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SqlSourceRepresentationInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SqlSourceRepresentationInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference">SqlSourceRepresentationInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.caCertificateInput">caCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.clientCertificateInput">clientCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.clientKeyInput">clientKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.databaseVersionInput">databaseVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.dumpFilePathInput">dumpFilePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts">SqlSourceRepresentationInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.caCertificate">caCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.dumpFilePath">dumpFilePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.timeouts"></a>

```java
public SqlSourceRepresentationInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference">SqlSourceRepresentationInstanceTimeoutsOutputReference</a>

---

##### `caCertificateInput`<sup>Optional</sup> <a name="caCertificateInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.caCertificateInput"></a>

```java
public java.lang.String getCaCertificateInput();
```

- *Type:* java.lang.String

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.clientCertificateInput"></a>

```java
public java.lang.String getClientCertificateInput();
```

- *Type:* java.lang.String

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.clientKeyInput"></a>

```java
public java.lang.String getClientKeyInput();
```

- *Type:* java.lang.String

---

##### `databaseVersionInput`<sup>Optional</sup> <a name="databaseVersionInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.databaseVersionInput"></a>

```java
public java.lang.String getDatabaseVersionInput();
```

- *Type:* java.lang.String

---

##### `dumpFilePathInput`<sup>Optional</sup> <a name="dumpFilePathInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.dumpFilePathInput"></a>

```java
public java.lang.String getDumpFilePathInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts">SqlSourceRepresentationInstanceTimeouts</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.caCertificate"></a>

```java
public java.lang.String getCaCertificate();
```

- *Type:* java.lang.String

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.databaseVersion"></a>

```java
public java.lang.String getDatabaseVersion();
```

- *Type:* java.lang.String

---

##### `dumpFilePath`<sup>Required</sup> <a name="dumpFilePath" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.dumpFilePath"></a>

```java
public java.lang.String getDumpFilePath();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SqlSourceRepresentationInstanceConfig <a name="SqlSourceRepresentationInstanceConfig" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_source_representation_instance.SqlSourceRepresentationInstanceConfig;

SqlSourceRepresentationInstanceConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .databaseVersion(java.lang.String)
    .host(java.lang.String)
    .name(java.lang.String)
//  .caCertificate(java.lang.String)
//  .clientCertificate(java.lang.String)
//  .clientKey(java.lang.String)
//  .dumpFilePath(java.lang.String)
//  .id(java.lang.String)
//  .password(java.lang.String)
//  .port(java.lang.Number)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(SqlSourceRepresentationInstanceTimeouts)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.databaseVersion">databaseVersion</a></code> | <code>java.lang.String</code> | The MySQL version running on your source database server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.host">host</a></code> | <code>java.lang.String</code> | The IPv4 address and port for the external server, or the the DNS address for the external server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the source representation instance. Use any valid Cloud SQL instance name. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.caCertificate">caCertificate</a></code> | <code>java.lang.String</code> | The CA certificate on the external server. Include only if SSL/TLS is used on the external server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | The client certificate on the external server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | The private key file for the client certificate on the external server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.dumpFilePath">dumpFilePath</a></code> | <code>java.lang.String</code> | A file in the bucket that contains the data from the external server. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#id SqlSourceRepresentationInstance#id}. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.password">password</a></code> | <code>java.lang.String</code> | The password for the replication user account. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.port">port</a></code> | <code>java.lang.Number</code> | The externally accessible port for the source database server. Defaults to 3306. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#project SqlSourceRepresentationInstance#project}. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.region">region</a></code> | <code>java.lang.String</code> | The Region in which the created instance should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts">SqlSourceRepresentationInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.username">username</a></code> | <code>java.lang.String</code> | The replication user account on the external server. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.databaseVersion"></a>

```java
public java.lang.String getDatabaseVersion();
```

- *Type:* java.lang.String

The MySQL version running on your source database server.

Possible values: ["MYSQL_5_6", "MYSQL_5_7", "MYSQL_8_0", "POSTGRES_9_6", "POSTGRES_10", "POSTGRES_11", "POSTGRES_12", "POSTGRES_13", "POSTGRES_14"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#database_version SqlSourceRepresentationInstance#database_version}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The IPv4 address and port for the external server, or the the DNS address for the external server.

If the external server is hosted on Cloud SQL, the port is 5432.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#host SqlSourceRepresentationInstance#host}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the source representation instance. Use any valid Cloud SQL instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#name SqlSourceRepresentationInstance#name}

---

##### `caCertificate`<sup>Optional</sup> <a name="caCertificate" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.caCertificate"></a>

```java
public java.lang.String getCaCertificate();
```

- *Type:* java.lang.String

The CA certificate on the external server. Include only if SSL/TLS is used on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#ca_certificate SqlSourceRepresentationInstance#ca_certificate}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

The client certificate on the external server.

Required only for server-client authentication. Include only if SSL/TLS is used on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#client_certificate SqlSourceRepresentationInstance#client_certificate}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

The private key file for the client certificate on the external server.

Required only for server-client authentication. Include only if SSL/TLS is used on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#client_key SqlSourceRepresentationInstance#client_key}

---

##### `dumpFilePath`<sup>Optional</sup> <a name="dumpFilePath" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.dumpFilePath"></a>

```java
public java.lang.String getDumpFilePath();
```

- *Type:* java.lang.String

A file in the bucket that contains the data from the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#dump_file_path SqlSourceRepresentationInstance#dump_file_path}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#id SqlSourceRepresentationInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password for the replication user account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#password SqlSourceRepresentationInstance#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The externally accessible port for the source database server. Defaults to 3306.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#port SqlSourceRepresentationInstance#port}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#project SqlSourceRepresentationInstance#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The Region in which the created instance should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#region SqlSourceRepresentationInstance#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.timeouts"></a>

```java
public SqlSourceRepresentationInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts">SqlSourceRepresentationInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#timeouts SqlSourceRepresentationInstance#timeouts}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The replication user account on the external server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#username SqlSourceRepresentationInstance#username}

---

### SqlSourceRepresentationInstanceTimeouts <a name="SqlSourceRepresentationInstanceTimeouts" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_source_representation_instance.SqlSourceRepresentationInstanceTimeouts;

SqlSourceRepresentationInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#create SqlSourceRepresentationInstance#create}. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#delete SqlSourceRepresentationInstance#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#create SqlSourceRepresentationInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/sql_source_representation_instance#delete SqlSourceRepresentationInstance#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlSourceRepresentationInstanceTimeoutsOutputReference <a name="SqlSourceRepresentationInstanceTimeoutsOutputReference" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.sql_source_representation_instance.SqlSourceRepresentationInstanceTimeoutsOutputReference;

new SqlSourceRepresentationInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts">SqlSourceRepresentationInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sqlSourceRepresentationInstance.SqlSourceRepresentationInstanceTimeouts">SqlSourceRepresentationInstanceTimeouts</a>

---



