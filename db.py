import mysql.connector
from mysql.connector import Error

def create_connection():
    """Create a database connection to the MySQL database."""
    connection = None
    try:
        connection = mysql.connector.connect(
            host='localhost:3306',
            user='root',  # Your MySQL username
            password='nikhil@123',  # Your MySQL password
            database='your_database_name'  # Your database name
        )
        if connection.is_connected():
            print("Successfully connected to the database")
    except Error as e:
        print(f"Error: '{e}' occurred")
    
    return connection

def close_connection(connection):
    """Close the database connection."""
    if connection.is_connected():
        connection.close()
        print("The connection is closed")
